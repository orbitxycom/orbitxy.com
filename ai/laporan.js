(function(){"use strict";
var G="https://adxyijyerblmosdzsbyp.supabase.co",W="sb_publishable_bCG2DJjBfLAMp2ME9Pe3cQ_jbPmlnnX";
var CSS=".fb{position:relative;max-width:520px}.fb h3{padding-right:36px}.fb-x{position:absolute;top:16px;right:16px;width:32px;height:32px;display:grid;place-items:center;border-radius:8px;color:var(--muted-foreground);transition:.15s;font-size:16px}.fb-x:hover{background:var(--accent);color:var(--foreground)}.fb-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.fb-chip{padding:8px 14px;border-radius:999px;border:1px solid color-mix(in oklab,var(--foreground) 18%,transparent);font-size:13px;transition:.15s}.fb-chip:hover{background:var(--accent)}.fb-chip.on{background:var(--accent);border-color:color-mix(in oklab,var(--foreground) 55%,transparent)}.fb-text{display:block;width:100%;min-height:104px;margin-top:16px;padding:12px 14px;border:1px solid color-mix(in oklab,var(--foreground) 18%,transparent);border-radius:12px;font-size:14px;line-height:1.5;resize:vertical;outline:none}.fb-text::placeholder{color:var(--muted-foreground)}.fb-text:focus{border-color:var(--ring)}.fb-msg{margin-top:12px;font-size:13px}.fb-msg:empty{display:none}.fb-msg.bad{color:var(--destructive)}.fb .btn-dark:disabled{opacity:.4;cursor:not-allowed}.sb-foot .new-chat{margin-bottom:2px}";
var BUG='<svg viewBox="0 0 24 24" style="font-size:16px"><path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>Laporkan bug';
var DLG='<div class="dlg fb" role="dialog" aria-modal="true" aria-labelledby="fbT"><button class="fb-x" id="fbX" aria-label="Tutup"><svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg></button><h3 id="fbT">Laporkan bug</h3><div class="fb-chips" id="fbChips"><button class="fb-chip" type="button">Tampilan rusak atau tidak pas</button><button class="fb-chip" type="button">Jawaban salah atau tidak lengkap</button><button class="fb-chip" type="button">Bukan yang saya minta</button><button class="fb-chip" type="button">Lambat atau bermasalah</button><button class="fb-chip" type="button">Gaya atau nada</button><button class="fb-chip" type="button">Masalah keamanan</button><button class="fb-chip" type="button">Lainnya</button></div><textarea class="fb-text" id="fbText" rows="4" maxlength="2000" placeholder="Ceritakan detailnya (opsional)"></textarea><div class="fb-msg" id="fbMsg" role="status"></div><div class="dlg-act"><button class="btn-dark" id="fbSend" disabled>Kirim</button></div></div>';
function $(i){return document.getElementById(i)}
function init(){
if(!$("fbcss")){var st=document.createElement("style");st.id="fbcss";st.textContent=CSS;document.head.appendChild(st)}
if(!$("fb")){var d=document.createElement("div");d.className="dlg-back hide";d.id="fb";d.innerHTML=DLG;document.body.appendChild(d)}
if(!$("bugBtn")){var foot=document.querySelector(".sb-foot");if(foot){var b=document.createElement("button");b.className="new-chat";b.id="bugBtn";b.style.border="0";b.innerHTML=BUG;foot.insertBefore(b,foot.firstChild)}}
var box=$("fb"),x=$("fbX"),chips=$("fbChips"),txt=$("fbText"),send=$("fbSend"),msg=$("fbMsg");
var cat="",busy=false,sent=false,last=null;
function ok(){send.disabled=busy||sent||!(cat||txt.value.trim())}
function open(){
if(innerWidth<=768){var s=$("sidebar");if(s)s.classList.add("closed")}
last=document.activeElement;cat="";sent=false;busy=false;txt.value="";msg.textContent="";msg.className="fb-msg";send.textContent="Kirim";
Array.prototype.forEach.call(chips.children,function(c){c.classList.remove("on")});
ok();box.classList.remove("hide");x.focus()}
function close(){box.classList.add("hide");if(last&&last.focus)last.focus()}
document.addEventListener("click",function(e){
var t=e.target;if(!t||!t.closest)return;
if(t.closest("#bugBtn")){open();return}
if(t.closest("#fbX")||t===box){close();return}
var c=t.closest(".fb-chip");
if(c){var on=c.classList.contains("on");
Array.prototype.forEach.call(chips.children,function(k){k.classList.remove("on")});
if(on){cat=""}else{c.classList.add("on");cat=c.textContent}
ok();return}
if(t.closest("#fbSend"))kirim()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!box.classList.contains("hide"))close()});
txt.addEventListener("input",ok);
async function kirim(){
if(send.disabled)return;
busy=true;send.disabled=true;send.textContent="Mengirim...";msg.textContent="";msg.className="fb-msg";
try{
var res=await fetch(G+"/rest/v1/laporan_bug",{method:"POST",headers:{"Content-Type":"application/json",apikey:W,Authorization:"Bearer "+W,Prefer:"return=minimal"},body:JSON.stringify({kategori:cat||null,detail:txt.value.trim().slice(0,2000)||null,layar:innerWidth+"x"+innerHeight,perangkat:navigator.userAgent.slice(0,300)})});
if(!res.ok)throw new Error("Kode "+res.status);
sent=true;msg.textContent="Terima kasih, laporan Anda sudah terkirim.";setTimeout(close,1400)
}catch(e){
msg.className="fb-msg bad";
msg.textContent=navigator.onLine?"Laporan belum terkirim. Coba lagi sebentar ya.":"Sepertinya sinyal Anda bermasalah. Cek koneksi internet, lalu kirim lagi ya."}
busy=false;send.textContent="Kirim";ok()}
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
