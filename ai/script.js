(() => {
  "use strict";
  const SUPABASE_URL = "https://adxyijyerblmosdzsbyp.supabase.co";
  const SUPABASE_KEY = "sb_publishable_bCG2DJjBfLAMp2ME9Pe3cQ_jbPmlnnX";
  const STORE = "bekki_riwayat_v2";
  const $ = (id) => document.getElementById(id);
  const sidebar = $("sidebar"), inner = $("inner"), chat = $("chat"), input = $("input"), sendBtn = $("send"), hist = $("hist");
  const mobile = () => innerWidth <= 768;
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const touch = matchMedia("(pointer:coarse)").matches;
  let chats = [], cur = null, busy = false;

  /* ===== Markdown sederhana (aman: teks di-escape dulu) ===== */
function esc(x){return x.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function lnk(h,t){return '<a href="'+h+'" target="_blank" rel="noopener noreferrer">'+t+'</a>'}
function inl(x){let r=esc(x).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/(^|[^*])\*([^*\s][^*]*)\*/g,'$1<em>$2</em>');
r=r.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)"']+)\)/g,(m,t,u)=>lnk(u,t));
return r.split(/(<a [^>]*>.*?<\/a>)/).map((seg,i)=>i%2?seg:seg.replace(/(^|[\s(]|&lt;)(https?:\/\/[^\s<"']+)/g,(m,pre,u)=>{u=u.replace(/(&gt;|&lt;).*$/,'');let tail='';
for(;;){const c=u.slice(-1);if(/[.,;:!?]/.test(c)||(c===')'&&(u.match(/\)/g)||[]).length>(u.match(/\(/g)||[]).length)){tail=c+tail;u=u.slice(0,-1)}else break}
const rest=m.slice(pre.length+u.length+tail.length);return pre+lnk(u,u)+tail+rest})).join('')}
function md(src){
if(src.indexOf('\n')<0)src=src.replace(/\s+(\d{1,2}\.\s+\*\*)/g,'\n$1');
const lines=src.replace(/\r/g,'').split('\n');let out='',list=null,para=[],code=null,m;
const fp=()=>{if(para.length){out+='<p>'+para.map(inl).join('<br>')+'</p>';para=[]}};
const fl=()=>{if(list){out+='</'+list+'>';list=null}};
for(const ln of lines){
if(ln.trim().startsWith('```')){if(code===null){fp();fl();code=[]}else{out+='<pre><code>'+esc(code.join('\n'))+'</code></pre>';code=null}continue}
if(code!==null){code.push(ln);continue}
if(!ln.trim()){fp();fl();continue}
if(m=ln.match(/^\s*(\d+)[.)]\s+(.*)/)){fp();if(list!=='ol'){fl();list='ol';out+='<ol start="'+m[1]+'">'}out+='<li>'+inl(m[2])+'</li>';continue}
if(m=ln.match(/^\s*[-*\u2022]\s+(.*)/)){fp();if(list!=='ul'){fl();list='ul';out+='<ul>'}out+='<li>'+inl(m[1])+'</li>';continue}
if(m=ln.match(/^#{1,6}\s+(.*)/)){fp();fl();out+='<p><strong>'+inl(m[1])+'</strong></p>';continue}
fl();para.push(ln)}
if(code!==null)out+='<pre><code>'+esc(code.join('\n'))+'</code></pre>';
fp();fl();return out}

  /* ===== Penyimpanan riwayat (di perangkat ini) ===== */
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE) || "null");
      if (s && Array.isArray(s.chats)) { chats = s.chats.filter((c) => c && c.id && Array.isArray(c.msgs)); cur = s.cur; }
    } catch (e) {}
    if (!chats.find((c) => c.id === cur)) cur = null;
  }
  function save() { try { localStorage.setItem(STORE, JSON.stringify({ chats, cur })); } catch (e) {} }
  const getCur = () => chats.find((c) => c.id === cur);

  /* ===== Bantuan tampilan ===== */
  function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  const AVATAR = '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  const TRASH = '<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/></svg>';
  const scrollEnd = () => { chat.scrollTop = chat.scrollHeight; };

  function addUser(text) {
    const m = el("div", "msg user"), b = el("div", "bubble");
    b.textContent = text; m.appendChild(b); inner.appendChild(m); return m;
  }
  function addBot(html) {
    const m = el("div", "msg bot"); m.appendChild(el("div", "avatar", AVATAR));
    const b = el("div", "bubble"); b.innerHTML = html; m.appendChild(b); inner.appendChild(m);
    return { row: m, bubble: b };
  }

  /* ===== Tampilan awal: sapaan dan saran ===== */
  const SARAN = [
    "What are the advantages of using Next.js?",
    "Write code to demonstrate Dijkstra's algorithm",
    "Help me write an essay about Silicon Valley",
    "What is the weather in San Francisco?",
  ];
  function renderEmpty() {
    inner.innerHTML = "";
    const e = el("div", "empty");
    e.appendChild(el("div", "greet-t", "What can I help with?"));
    e.appendChild(el("div", "greet-s", "Ask a question, write code, or explore ideas."));
    const g = el("div", "sugs");
    SARAN.forEach((t, i) => {
      const b = el("button", "sug"); b.textContent = t; b.style.animationDelay = 0.65 + i * 0.08 + "s";
      b.onclick = () => kirim(t); g.appendChild(b);
    });
    e.appendChild(g); inner.appendChild(e);
  }
  function renderChat() {
    const c = getCur();
    if (!c || !c.msgs.length) { renderEmpty(); return; }
    inner.innerHTML = "";
    c.msgs.forEach((m) => (m.role === "user" ? addUser(m.content) : addBot(md(m.content))));
    scrollEnd();
  }

  /* ===== Riwayat di sidebar (dikelompokkan menurut waktu) ===== */
  function renderHist() {
    hist.innerHTML = "";
    const now = new Date(), d0 = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const arr = chats.filter((c) => c.msgs.length).sort((a, b) => (b.u || 0) - (a.u || 0));
    let last = "";
    arr.forEach((c) => {
      const t = c.u || 0;
      const g = t >= d0 ? "Hari ini" : t >= d0 - 864e5 ? "Kemarin" : t >= d0 - 6 * 864e5 ? "7 hari terakhir" : "Lebih lama";
      if (g !== last) { hist.appendChild(el("div", "hist-label", g)); last = g; }
      const row = el("div", "hist-row"), b = el("button", "hist-item" + (c.id === cur ? " active" : ""));
      b.textContent = c.title; b.onclick = () => buka(c.id);
      const d = el("button", "hist-del", TRASH); d.setAttribute("aria-label", "Hapus obrolan");
      d.onclick = (ev) => { ev.stopPropagation(); hapus(c.id); };
      row.append(b, d); hist.appendChild(row);
    });
    if (!arr.length) hist.appendChild(el("div", "hist-label", "Belum ada obrolan"));
  }
  function tutupMobile() { if (mobile()) sidebar.classList.add("closed"); }
  function buka(id) { cur = id; save(); renderHist(); renderChat(); tutupMobile(); }
  function baru() { cur = null; save(); renderHist(); renderChat(); tutupMobile(); if (!touch) input.focus(); }
  function hapus(id) {
    if (!confirm("Hapus obrolan ini?")) return;
    chats = chats.filter((c) => c.id !== id);
    if (cur === id) cur = null;
    save(); renderHist(); renderChat();
  }

  /* ===== Pesan galat yang ramah ===== */
  function ramah(e) {
    const m = String((e && e.message) || "");
    if (e && e.name === "AbortError") return { teks: "Jawabannya kelamaan datang. Sepertinya sinyal Anda lemah atau Bekki lagi sibuk. Coba kirim lagi ya." };
    if (!navigator.onLine || /failed to fetch|networkerror|load failed|network request failed/i.test(m)) return { teks: "Sepertinya ada gangguan dengan sinyal Anda. Cek koneksi internet, lalu kirim lagi ya." };
    if (e && e.status === 429 && /batas pesan/i.test(m)) return { teks: m };
    if (/ramai|kebanjiran|rate limit|batas penggunaan|sibuk|overloaded/i.test(m)) return { teks: "Bekki lagi kebanjiran pesan nih. Tunggu beberapa detik, lalu coba kirim lagi ya." };
    if (/masuk dulu/i.test(m)) return { teks: "Chat ini sedang dibatasi untuk pengguna yang sudah masuk. Hubungi pengelola situs ya." };
    if (/belum diatur|secret|api key|x-api-key|authentication/i.test(m)) return { teks: "Bekki belum siap dipakai karena pengaturan servernya belum lengkap. Hubungi pengelola situs ya.", detail: m };
    return { teks: "Maaf, Bekki lagi ada kendala. Coba lagi sebentar ya.", detail: m };
  }

  /* ===== Kirim ke server ===== */
  async function tanya(msgs) {
    const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 45000);
    try {
      const r = await fetch(SUPABASE_URL + "/functions/v1/chat", {
        method: "POST", signal: ctl.signal,
        headers: { "Content-Type": "application/json", apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY },
        body: JSON.stringify({ messages: msgs.map((m) => ({ role: m.role, content: m.content })) }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.reply) { const er = new Error(j.error || "Kode " + r.status); er.status = r.status; throw er; }
      return j.reply;
    } finally { clearTimeout(to); }
  }

  /* Jawaban muncul bertahap dengan kursor berkedip */
  function reveal(bubble, text, done) {
    if (reduce) { bubble.innerHTML = md(text); scrollEnd(); done(); return; }
    let i = 0; const step = Math.max(2, Math.ceil(text.length / 150));
    const t = setInterval(() => {
      i = Math.min(text.length, i + step);
      let h = md(text.slice(0, i));
      if (i < text.length) {
        const caret = '<span class="caret"></span>', k = Math.max(h.lastIndexOf("</p>"), h.lastIndexOf("</li>"));
        h = k > -1 ? h.slice(0, k) + caret + h.slice(k) : h + caret;
      }
      bubble.innerHTML = h; scrollEnd();
      if (i >= text.length) { clearInterval(t); done(); }
    }, 22);
  }

  function upd() { sendBtn.disabled = busy || !input.value.trim(); }
  function fit() { input.style.height = "auto"; input.style.height = Math.min(input.scrollHeight, 240) + "px"; }

  async function kirim(teks) {
    teks = (teks || "").trim();
    if (!teks || busy) return;
    let c = getCur();
    if (!c) { c = { id: Date.now().toString(36), title: teks.slice(0, 60), u: Date.now(), msgs: [] }; chats.push(c); cur = c.id; }
    c.msgs.push({ role: "user", content: teks }); c.u = Date.now(); save();
    const kosong = inner.querySelector(".empty"); if (kosong) kosong.remove();
    addUser(teks); renderHist(); input.value = ""; fit(); busy = true; upd(); scrollEnd();

    const th = addBot('<span class="shimmer-text">Thinking...</span>'); scrollEnd();
    const lambat = setTimeout(() => { th.bubble.innerHTML = '<span class="shimmer-text">Masih diproses, sebentar ya...</span>'; }, 9000);
    let balasan = null, galat = null;
    try { balasan = await tanya(c.msgs.slice(-20)); } catch (e) { galat = e; }
    clearTimeout(lambat);

    if (galat) {
      const g = ramah(galat); th.bubble.classList.add("err"); th.bubble.textContent = g.teks;
      if (g.detail) { const n = el("div", "note"); n.textContent = "Detail teknis: " + g.detail; th.bubble.appendChild(n); }
      busy = false; upd(); scrollEnd(); return;
    }
    c.msgs.push({ role: "assistant", content: balasan }); c.u = Date.now(); save(); renderHist();
    reveal(th.bubble, balasan, () => { busy = false; upd(); });
  }

  /* ===== Tombol dan masukan ===== */
  input.addEventListener("input", () => { fit(); upd(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing && !touch) { e.preventDefault(); kirim(input.value); }
  });
  sendBtn.onclick = () => kirim(input.value);
  $("newChat").onclick = baru;
  const toggle = (e) => { if (e) e.stopPropagation(); sidebar.classList.toggle("closed"); };
  $("toggle").onclick = toggle; $("toggle2").onclick = toggle;
  document.querySelector(".main").addEventListener("click", () => { if (mobile() && !sidebar.classList.contains("closed")) sidebar.classList.add("closed"); });
  $("theme").onclick = () => {
    const gelap = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", gelap);
    try { localStorage.setItem("bekki_tema", gelap ? "dark" : "light"); } catch (e) {}
  };

  load(); renderHist(); renderChat(); upd();
  if (!touch) input.focus();
})();
