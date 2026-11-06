(function(){"use strict";
if("serviceWorker" in navigator){addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})})}
var standalone=matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
if(standalone)return;
var ios=/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
var ICON='<svg viewBox="0 0 24 24" style="font-size:16px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>Pasang aplikasi';
var ev=null,btn=null;
function hide(){if(btn&&btn.parentNode)btn.parentNode.removeChild(btn);btn=null}
function make(){
if(btn)return;
var foot=document.querySelector(".sb-foot");if(!foot)return;
btn=document.createElement("button");btn.className="new-chat";btn.id="pasangBtn";btn.style.border="0";btn.innerHTML=ICON;
btn.onclick=function(){
if(ev){var e=ev;ev=null;e.prompt();if(e.userChoice)e.userChoice.then(hide)}
else if(ios){alert("Di Safari: tekan tombol Bagikan, lalu pilih \"Tambah ke Layar Utama\".")}
else{alert("Buka menu browser (titik tiga), lalu pilih \"Pasang aplikasi\" atau \"Tambahkan ke layar utama\".")}};
foot.insertBefore(btn,foot.firstChild)}
addEventListener("beforeinstallprompt",function(e){e.preventDefault();ev=e;make()});
addEventListener("appinstalled",hide);
function start(){if(ios)make()}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
