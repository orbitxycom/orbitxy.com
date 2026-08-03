const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' } // saat production, ganti '*' dengan alamat website kamu
});

app.use(express.json());

let sock = null;
let isConnected = false;

async function startWhatsApp(phoneNumber, socketClient) {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');

  sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  });

  // Kalau belum pernah login, minta kode pairing
  if (!sock.authState.creds.registered) {
    try {
      const code = await sock.requestPairingCode(phoneNumber);
      socketClient.emit('pairing-code', code);
      socketClient.emit('wa-status', 'connecting');
    } catch (err) {
      console.error('Gagal minta pairing code:', err);
      socketClient.emit('wa-status', 'failed');
      return;
    }
  }

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'open') {
      isConnected = true;
      socketClient.emit('wa-status', 'connected');
      console.log('WhatsApp terhubung!');
    }

    if (connection === 'close') {
      isConnected = false;
      const shouldReconnect =
        new Boom(lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;

      socketClient.emit('wa-status', shouldReconnect ? 'connecting' : 'failed');

      if (shouldReconnect) {
        startWhatsApp(phoneNumber, socketClient);
      }
    }
  });

  // Contoh: dengarkan pesan masuk (opsional, untuk auto-reply nanti)
  sock.ev.on('messages.upsert', ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;
    console.log('Pesan masuk dari:', msg.key.remoteJid);
    // Di sini nanti bisa ditambah logika auto-reply
  });
}

io.on('connection', (socketClient) => {
  console.log('Client website terhubung ke server');

  socketClient.on('request-pairing', async ({ phone }) => {
    if (!phone) {
      socketClient.emit('wa-status', 'failed');
      return;
    }
    console.log('Memulai koneksi WA untuk nomor:', phone);
    await startWhatsApp(phone, socketClient);
  });
});

// Endpoint buat kirim pesan dari website (bagian "edit" yang dimaksud)
app.post('/send-message', async (req, res) => {
  const { to, message } = req.body;

  if (!sock || !isConnected) {
    return res.status(400).json({ error: 'WhatsApp belum terhubung' });
  }

  try {
    const jid = to.includes('@s.whatsapp.net') ? to : `${to}@s.whatsapp.net`;
    await sock.sendMessage(jid, { text: message });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengirim pesan' });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});

