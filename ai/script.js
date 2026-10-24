const SUGGESTIONS = [
  "What are the advantages of using Next.js?",
  "Write code to demonstrate Dijkstra's algorithm",
  "Help me write an essay about Silicon Valley",
  "What is the weather in San Francisco?"
];
const $ = (s) => document.querySelector(s);
const inner = $('#inner'), chat = $('#chat'), input = $('#input'), send = $('#send'), hist = $('#hist');
let busy = false, started = false;

/* ---- Tema ---- */
const root = document.documentElement;
if (matchMedia('(prefers-color-scheme: dark)').matches) root.classList.add('dark');
$('#theme').onclick = () => root.classList.toggle('dark');

/* ---- Sidebar ---- */
const toggleSb = () => $('#sidebar').classList.toggle('closed');
$('#toggle').onclick = toggleSb; $('#toggle2').onclick = toggleSb;

/* ---- Tampilan awal ---- */
function showEmpty() {
  started = false;
  inner.innerHTML = `
    <div class="empty">
      <div class="greet-t">What can I help with?</div>
      <div class="greet-s">Ask a question, write code, or explore ideas.</div>
      <div class="sugs">${SUGGESTIONS.map((s, i) =>
        `<button class="sug" style="animation-delay:${0.8 + i * 0.06}s">${s}</button>`).join('')}</div>
    </div>`;
  inner.querySelectorAll('.sug').forEach(b => b.onclick = () => submit(b.textContent));
}
$('#newChat').onclick = showEmpty;

/* ---- Pesan ---- */
const esc = (t) => t.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const fmt = (t) => esc(t).replace(/```(\w*)\n?([\s\S]*?)```/g, '<pre>$2</pre>');
const scroll = () => chat.scrollTo({ top: chat.scrollHeight });

function addUser(text) {
  const d = document.createElement('div');
  d.className = 'msg user';
  d.innerHTML = `<div class="bubble">${esc(text)}</div>`;
  inner.appendChild(d); scroll();
}
function addBot() {
  const d = document.createElement('div');
  d.className = 'msg bot';
  d.innerHTML = `<div class="avatar">✦</div><div class="bubble"><div class="thinking"><i></i><i></i><i></i></div></div>`;
  inner.appendChild(d); scroll();
  return d.querySelector('.bubble');
}

/* Ganti fungsi ini dengan panggilan API Anda (fetch ke backend) */
async function getReply(prompt) {
  await new Promise(r => setTimeout(r, 900));
  return `Ini jawaban demo untuk: "${prompt}"\n\nHubungkan fungsi getReply() di script.js ke API Anda untuk jawaban asli.\n\n\`\`\`js\nconsole.log("Halo dunia");\n\`\`\``;
}

async function submit(text) {
  text = (text ?? input.value).trim();
  if (!text || busy) return;
  busy = true; send.disabled = true;
  if (!started) {
    started = true; inner.innerHTML = '';
    const a = document.createElement('button');
    a.className = 'hist-item active'; a.textContent = text.slice(0, 40);
    hist.insertBefore(a, hist.children[1]);
  }
  input.value = ''; input.style.height = '';
  addUser(text);
  const bubble = addBot();
  const reply = await getReply(text);
  bubble.innerHTML = '';
  let out = '';
  for (const ch of reply) {            // efek mengetik (streaming)
    out += ch;
    bubble.innerHTML = fmt(out) + '<span class="caret"></span>';
    scroll();
    await new Promise(r => setTimeout(r, 12));
  }
  bubble.innerHTML = fmt(out);
  busy = false; send.disabled = !input.value.trim();
}

input.addEventListener('input', () => {
  send.disabled = busy || !input.value.trim();
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 240) + 'px';
});
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); }
});
send.onclick = () => submit();
showEmpty();
