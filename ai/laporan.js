(function(){"use strict";
var G="https://adxyijyerblmosdzsbyp.supabase.co",W="sb_publishable_bCG2DJjBfLAMp2ME9Pe3cQ_jbPmlnnX";
var $=function(i){return document.getElementById(i)};
var box=$("fb"),btn=$("bugBtn"),x=$("fbX"),chips=$("fbChips"),txt=$("fbText"),send=$("fbSend"),msg=$("fbMsg");
if(!box||!btn)return;
var cat="",busy=false,sent=false,last=null;
function ok(){send.disabled=busy||sent||!(cat||txt.value.trim())}
function open(){
if(innerWidth<=768){var s=$("sidebar");if(s)s.classList.add("closed")}
last=document.activeElement;cat="";sent=false;busy=false;txt.value="";msg.textContent="";msg.className="fb-msg";send.textContent="Kirim";
Array.prototype.forEach.call(chips.children,function(c){c.classList.remove("on")});
ok();box.classList.remove("hide");x.focus()}
function close(){box.classList.add("hide");if(last&&last.focus)last.focus()}
btn.onclick=open;x.onclick=close;
box.addEventListener("click",function(e){if(e.target===box)close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!box.classList.contains("hide"))close()});
chips.addEventListener("click",function(e){
var c=e.target.closest(".fb-chip");if(!c)return;
var on=c.classList.contains("on");
Array.prototype.forEach.call(chips.children,function(k){k.classList.remove("on")});
if(on){cat=""}else{c.classList.add("on");cat=c.textContent}
ok()});
txt.addEventListener("input",ok);
send.onclick=async function(){
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
})();
