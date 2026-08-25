/*
  Chat Widget — pop-up percakapan yang bisa dipanggil dari halaman manapun.

  CARA PAKAI:
  1. Taruh <script src="/assets/chat-widget.js"></script> di halaman.
  2. Buat/ambil ID chat dulu:
       var chat = await findOrCreateChat(sellerId, sellerName, productId, productName);
  3. Buka pop-upnya:
       openChatModal(chat.id, namaLawanBicara, subLabelOpsional);
  4. Tombol X di pop-up otomatis nutup modal (closeChatModal()).
     Pesan udah tersimpan ke database begitu dikirim — gak perlu aksi
     tambahan pas ditutup.
*/
(function () {
  var CHAT_SUPA_URL = 'https://ygjpwaftccewntwwoixs.supabase.co';
  var CHAT_SUPA_KEY = 'sb_publishable_4IdyoPpEW-It9IWLZOrSAQ_WuumXkl9';
  var _chatSupabase = null;
  function getClient() {
    if (_chatSupabase) return _chatSupabase;
    try { _chatSupabase = supabase.createClient(CHAT_SUPA_URL, CHAT_SUPA_KEY); }
    catch (e) { console.error('chat-widget: gagal load supabase', e); }
    return _chatSupabase;
  }

  var state = { chatId: null, currentUser: null, pollTimer: null };

  function injectStyles() {
    if (document.getElementById('_chatWidgetStyle')) return;
    var css =
      '.cw-overlay{position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.7);display:flex;align-items:flex-end;justify-content:center;opacity:0;pointer-events:none;transition:opacity .22s}' +
      '.cw-overlay.on{opacity:1;pointer-events:auto}' +
      '.cw-sheet{width:100%;max-width:520px;height:85vh;max-height:720px;background:#111015;border:1px solid #232028;border-bottom:none;border-radius:20px 20px 0 0;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .3s cubic-bezier(.32,.72,0,1);font-family:"DM Sans",system-ui,sans-serif}' +
      '.cw-overlay.on .cw-sheet{transform:translateY(0)}' +
      '.cw-head{flex-shrink:0;display:flex;align-items:center;gap:.6rem;padding:.9rem 1rem;border-bottom:1px solid #232028}' +
      '.cw-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(160deg,#8b5cf6,#6d28d9);display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:800;color:#fff;flex-shrink:0}' +
      '.cw-info{min-width:0;flex:1}' +
      '.cw-name{font-size:.82rem;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.cw-sub{font-size:.62rem;color:#77748a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.cw-close{width:30px;height:30px;border-radius:50%;background:#1c1a22;border:1px solid #2e2a35;color:#9c98a8;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem}' +
      '.cw-msgs{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:1rem .8rem}' +
      '.cw-empty{text-align:center;color:#77748a;font-size:.72rem;padding:2.5rem 1rem}' +
      '.cw-day{text-align:center;font-size:.6rem;color:#77748a;margin:.9rem 0 .5rem}' +
      '.cw-row{display:flex;margin-bottom:.45rem}' +
      '.cw-row.me{justify-content:flex-end}' +
      '.cw-bubble{max-width:76%;padding:.5rem .75rem;border-radius:16px;font-size:.78rem;line-height:1.5;white-space:pre-wrap;word-break:break-word}' +
      '.cw-row:not(.me) .cw-bubble{background:#1c1a22;border:1px solid #2e2a35;border-bottom-left-radius:4px;color:#c9c6d3}' +
      '.cw-row.me .cw-bubble{background:linear-gradient(180deg,#a855f7,#8b5cf6);color:#fff;border-bottom-right-radius:4px}' +
      '.cw-time{font-size:.56rem;color:#77748a;margin-top:.18rem;text-align:right}' +
      '.cw-row.me .cw-time{color:rgba(255,255,255,.55)}' +
      '.cw-compose{flex-shrink:0;display:flex;gap:.5rem;align-items:flex-end;padding:.65rem .8rem calc(.65rem + env(safe-area-inset-bottom));border-top:1px solid #232028}' +
      '.cw-inp{flex:1;background:#1c1a22;border:1px solid #2e2a35;border-radius:18px;padding:.55rem .9rem;color:#fff;font-family:inherit;font-size:.8rem;outline:none;resize:none;max-height:90px;line-height:1.4}' +
      '.cw-inp:focus{border-color:rgba(168,85,247,.5)}' +
      '.cw-send{flex-shrink:0;width:38px;height:38px;border-radius:50%;border:none;background:linear-gradient(180deg,#a855f7,#8b5cf6);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}' +
      '.cw-send:disabled{opacity:.4;cursor:not-allowed}' +
      '.cw-send svg{width:16px;height:16px}';
    var style = document.createElement('style');
    style.id = '_chatWidgetStyle';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function injectOverlay() {
    if (document.getElementById('cwOverlay')) return;
    var el = document.createElement('div');
    el.className = 'cw-overlay';
    el.id = 'cwOverlay';
    el.innerHTML =
      '<div class="cw-sheet">' +
        '<div class="cw-head">' +
          '<div class="cw-avatar" id="cwAvatar">?</div>' +
          '<div class="cw-info">' +
            '<div class="cw-name" id="cwName">…</div>' +
            '<div class="cw-sub" id="cwSub"></div>' +
          '</div>' +
          '<button class="cw-close" id="cwCloseBtn">&#10005;</button>' +
        '</div>' +
        '<div class="cw-msgs" id="cwMsgs">' +
          '<div class="cw-empty" id="cwEmpty" style="display:none">Belum ada pesan. Mulai percakapan sekarang.</div>' +
          '<div id="cwMsgList"></div>' +
        '</div>' +
        '<div class="cw-compose">' +
          '<textarea id="cwInp" class="cw-inp" rows="1" placeholder="Tulis pesan…" maxlength="1000"></textarea>' +
          '<button class="cw-send" id="cwSendBtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);

    el.addEventListener('click', function (e) { if (e.target === el) window.closeChatModal(); });
    document.getElementById('cwCloseBtn').addEventListener('click', window.closeChatModal);
    document.getElementById('cwSendBtn').addEventListener('click', sendChatMessage);
    document.getElementById('cwInp').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChatMessage(); }
    });
    document.getElementById('cwInp').addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 90) + 'px';
    });
  }

  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;'); }
  function formatTime(iso) { try { return new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }).format(new Date(iso)); } catch (e) { return ''; } }
  function formatDay(iso) { try { return new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' }).format(new Date(iso)); } catch (e) { return ''; } }

  function renderMessages(messages) {
    var list = document.getElementById('cwMsgList');
    var empty = document.getElementById('cwEmpty');
    if (!messages || !messages.length) { list.innerHTML = ''; empty.style.display = 'block'; return; }
    empty.style.display = 'none';
    var html = ''; var lastDay = '';
    messages.forEach(function (m) {
      var day = formatDay(m.created_at);
      if (day !== lastDay) { html += '<div class="cw-day">' + day + '</div>'; lastDay = day; }
      var isMe = m.sender_id === state.currentUser.id;
      html += '<div class="cw-row' + (isMe ? ' me' : '') + '"><div class="cw-bubble">' + esc(m.message) + '<div class="cw-time">' + formatTime(m.created_at) + '</div></div></div>';
    });
    list.innerHTML = html;
    var wrap = document.getElementById('cwMsgs');
    wrap.scrollTop = wrap.scrollHeight;
  }

  async function loadMessages() {
    var supa = getClient();
    var { data, error } = await supa.from('chat_messages').select('*').eq('chat_id', state.chatId).order('created_at', { ascending: true });
    if (error) { console.error('chat-widget load error', error); return; }
    renderMessages(data || []);
  }

  async function sendChatMessage() {
    var inp = document.getElementById('cwInp');
    var text = inp.value.trim();
    if (!text || !state.chatId) return;
    var btn = document.getElementById('cwSendBtn');
    btn.disabled = true;
    inp.value = ''; inp.style.height = 'auto';
    var supa = getClient();
    try {
      var { error } = await supa.from('chat_messages').insert({ chat_id: state.chatId, sender_id: state.currentUser.id, message: text });
      if (error) throw error;
      await supa.from('chats').update({ last_message: text, last_message_at: new Date().toISOString() }).eq('id', state.chatId);
      await loadMessages();
    } catch (err) {
      console.error('chat-widget send error', err);
      inp.value = text;
      alert('Gagal mengirim pesan');
    } finally {
      btn.disabled = false;
    }
  }

  // Buka pop-up chat buat chatId tertentu
  window.openChatModal = async function (chatId, counterpartName, subLabel) {
    injectStyles();
    injectOverlay();

    var supa = getClient();
    if (!supa) { alert('Gagal memuat sistem chat'); return; }

    var { data: userData } = await supa.auth.getUser();
    var user = userData ? userData.user : null;
    if (!user) {
      window.location.href = '/login/?returnUrl=' + encodeURIComponent(window.location.pathname + window.location.search);
      return;
    }

    state.chatId = chatId;
    state.currentUser = user;

    document.getElementById('cwName').textContent = counterpartName || 'Percakapan';
    document.getElementById('cwAvatar').textContent = (counterpartName || '?').charAt(0).toUpperCase();
    document.getElementById('cwSub').textContent = subLabel || '';

    document.getElementById('cwOverlay').classList.add('on');
    document.body.style.overflow = 'hidden';

    await loadMessages();

    clearInterval(state.pollTimer);
    state.pollTimer = setInterval(loadMessages, 4000);
  };

  // Tombol X manggil ini — nutup pop-up. Pesan udah otomatis tersimpan
  // ke database begitu dikirim, jadi nutup pop-up gak menghilangkan apa-apa.
  window.closeChatModal = function () {
    var el = document.getElementById('cwOverlay');
    if (el) el.classList.remove('on');
    document.body.style.overflow = '';
    clearInterval(state.pollTimer);
    state.pollTimer = null;
    state.chatId = null;
  };

  // Cari chat yang udah ada antara pembeli & penjual, atau bikin baru kalau belum ada
  window.findOrCreateChat = async function (sellerId, sellerName, productId, productName) {
    var supa = getClient();
    var { data: userData } = await supa.auth.getUser();
    var user = userData ? userData.user : null;
    if (!user) {
      window.location.href = '/login/?returnUrl=' + encodeURIComponent(window.location.pathname + window.location.search);
      return null;
    }
    if (user.id === sellerId) {
      alert('Ini produk toko kamu sendiri.');
      return null;
    }

    var { data: existing } = await supa.from('chats').select('*')
      .eq('buyer_id', user.id).eq('seller_id', sellerId).maybeSingle();
    if (existing) return existing;

    var buyerName = (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || (user.email ? user.email.split('@')[0] : 'Pembeli');
    buyerName = buyerName.trim().split(' ')[0];

    var { data: created, error } = await supa.from('chats').insert({
      buyer_id: user.id,
      seller_id: sellerId,
      buyer_name: buyerName,
      seller_name: sellerName || null,
      product_id: productId || null,
      product_name: productName || null
    }).select().single();

    if (error) { console.error('findOrCreateChat error', error); alert('Gagal membuka chat'); return null; }
    return created;
  };
})();
