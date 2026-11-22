/* Wajib login sebelum masuk ke chat Bekki */
(function(){"use strict";
var URL_="https://adxyijyerblmosdzsbyp.supabase.co",KEY="sb_publishable_bCG2DJjBfLAMp2ME9Pe3cQ_jbPmlnnX";
var LOGIN="/";
function toLogin(){location.replace(LOGIN)}
var sb=window.supabase&&window.supabase.createClient?window.supabase.createClient(URL_,KEY):null;
if(!sb){toLogin();return}
window.bekkiSB=sb;
/* token pengguna yang sedang login, dipakai script.js saat memanggil server */
window.bekkiToken=function(){return sb.auth.getSession().then(function(r){return r&&r.data&&r.data.session?r.data.session.access_token:KEY}).catch(function(){return KEY})};
/* keluar: hapus sesi di browser ini pasti (tanpa bergantung pada jaringan), lalu ke halaman login */
function clearLocal(){try{[localStorage,sessionStorage].forEach(function(st){Object.keys(st).forEach(function(k){if(/^sb-.*-auth-token/.test(k)||/^sb-.*-code-verifier/.test(k))st.removeItem(k)})})}catch(e){}}
window.bekkiLogout=function(scope){
var done=false;function fin(){if(done)return;done=true;try{sb.auth.signOut({scope:"local"}).catch(function(){})}catch(e){}clearLocal();toLogin()}
var t=setTimeout(fin,scope==="global"?3500:1500);
try{sb.auth.signOut({scope:scope==="global"?"global":"local"}).then(function(){clearTimeout(t);fin()},function(){clearTimeout(t);fin()})}catch(e){clearTimeout(t);fin()}};
function logout(){window.bekkiLogout("local")}
function addLogout(){
var foot=document.querySelector(".sb-foot");if(!foot||document.getElementById("logoutBtn"))return;
var b=document.createElement("button");b.className="new-chat";b.id="logoutBtn";b.style.border="0";
b.innerHTML='<svg viewBox="0 0 24 24" style="font-size:16px"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>Keluar';
b.onclick=logout;foot.appendChild(b)}
sb.auth.getSession().then(function(r){
if(!(r&&r.data&&r.data.session)){toLogin();return}
document.documentElement.classList.add("auth-ok");
if(location.hash.indexOf("access_token")>-1||location.search.indexOf("code=")>-1)history.replaceState(null,"",location.pathname);
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",addLogout);else addLogout()
}).catch(toLogin);
sb.auth.onAuthStateChange(function(ev){if(ev==="SIGNED_OUT")toLogin()});
setTimeout(function(){if(!document.documentElement.classList.contains("auth-ok"))toLogin()},8000);
})();
