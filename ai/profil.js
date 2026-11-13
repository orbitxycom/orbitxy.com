/* Kartu profil di bawah sidebar + menu (Laporan bug, Ganti tema, Settings, dst.) */
(function(){"use strict";
/* Isi alamat halaman di sini kalau sudah ada. Kosong = muncul tulisan "segera hadir". */
var LINKS={settings:"",security:"",limits:"",support:"",terms:"",privacy:""};
var APP="Bekki";

var CSS=".sb-foot{position:relative}"
+".sb-foot>.new-chat{display:none!important}"
+".pf-card{display:flex;align-items:center;gap:12px;width:100%;padding:8px;border-radius:12px;text-align:left;transition:background .15s}"
+".pf-card:hover,.pf-card[aria-expanded=true]{background:var(--sidebar-accent)}"
+".pf-av{width:40px;height:40px;border-radius:10px;background:color-mix(in oklab,var(--foreground) 12%,transparent);color:color-mix(in oklab,var(--foreground) 65%,transparent);display:grid;place-items:center;font-size:14px;font-weight:600;flex:none}"
+".pf-txt{min-width:0;display:flex;flex-direction:column;gap:1px}"
+".pf-name{font-size:14px;font-weight:500;color:var(--foreground);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"
+".pf-sub{font-size:12px;color:var(--muted-foreground);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"
+".pf-menu{position:fixed;overflow-y:auto;background:var(--popover);color:var(--popover-foreground);border:1px solid color-mix(in oklab,var(--border) 80%,transparent);border-radius:16px;padding:8px;box-shadow:var(--shadow-float);z-index:80;animation:pf-in .16s var(--ease-spring) both}"
+".pf-menu[hidden]{display:none}"
+"@keyframes pf-in{0%{opacity:0;transform:translateY(6px) scale(.98)}to{opacity:1;transform:none}}"
+".pf-head{display:flex;align-items:center;gap:12px;padding:8px}"
+".pf-head .pf-av{width:44px;height:44px;border-radius:12px;font-size:15px}"
+".pf-head .pf-name{font-size:15px;font-weight:600}"
+".pf-sep{height:1px;background:color-mix(in oklab,var(--border) 80%,transparent);margin:6px 4px}"
+".pf-item{display:flex;align-items:center;gap:12px;width:100%;height:42px;padding:0 10px;border-radius:10px;font-size:14px;color:var(--foreground);text-align:left;transition:background .15s}"
+".pf-item:hover{background:var(--sidebar-accent)}"
+".pf-item svg{font-size:18px;opacity:.85;flex:none}"
+".pf-item .pf-r{margin-left:auto;font-size:13px;color:var(--muted-foreground)}"
+".pf-item .pf-chev{margin-left:auto;font-size:16px;opacity:.6}"
+".pf-modes{display:flex;gap:6px;padding:6px 8px 2px}"
+".pf-mode{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;border:1px solid transparent;color:var(--foreground);transition:background .15s}"
+".pf-mode svg{font-size:18px}"
+".pf-mode:hover{background:var(--sidebar-accent)}"
+".pf-mode[aria-pressed=true]{border-color:color-mix(in oklab,var(--foreground) 35%,transparent);background:var(--sidebar-accent)}"
+".pf-foot{padding:8px 10px 4px;font-size:13px;color:var(--muted-foreground);display:flex;flex-direction:column;gap:6px}"
+".pf-foot a{color:var(--muted-foreground);text-decoration:none;cursor:pointer}"
+".pf-foot a:hover{color:var(--foreground);text-decoration:underline}"
+".pf-toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:var(--foreground);color:var(--background);padding:10px 16px;border-radius:10px;font-size:13px;z-index:60;animation:fade-up .2s var(--ease-spring) both}";
var I={
bug:'<svg viewBox="0 0 24 24"><path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>',
sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
moon:'<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>',
pc:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>',
gear:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
lock:'<svg viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
gauge:'<svg viewBox="0 0 24 24"><path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
help:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>',
out:'<svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>',
chev:'<svg class="pf-chev" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>'};
function $(i){return document.getElementById(i)}
function item(id,icon,label,extra){return '<button class="pf-item" id="'+id+'" type="button" role="menuitem">'+icon+'<span>'+label+'</span>'+(extra||"")+'</button>'}
function init(){
var foot=document.querySelector(".sb-foot");if(!foot||$("pfCard"))return;
var st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
var card=document.createElement("button");card.className="pf-card";card.id="pfCard";card.type="button";card.setAttribute("aria-haspopup","menu");card.setAttribute("aria-expanded","false");
card.innerHTML='<span class="pf-av" id="pfAv">?</span><span class="pf-txt"><span class="pf-name" id="pfName">Akun saya</span><span class="pf-sub" id="pfSub">Akun saya</span></span>';
var menu=document.createElement("div");menu.className="pf-menu";menu.id="pfMenu";menu.hidden=true;menu.setAttribute("role","menu");
menu.innerHTML='<div class="pf-head"><span class="pf-av" id="pfAv2">?</span><span class="pf-txt"><span class="pf-name" id="pfName2"></span><span class="pf-sub" id="pfMail"></span></span></div>'
+'<div class="pf-sep"></div>'
+item("pfBug",I.bug,"Laporan bug")
+'<div class="pf-sep"></div>'
+item("pfSettings",I.gear,"Settings")
+item("pfSecurity",I.lock,"Security &amp; Access")
+item("pfLimits",I.gauge,"Limits",I.chev)
+item("pfSupport",I.help,"Support",I.chev)
+item("pfOut",I.out,"Log out")
+'<div class="pf-sep"></div>'
+'<div class="pf-modes" role="group" aria-label="Tema">'
+'<button class="pf-mode" data-m="light" type="button" aria-label="Terang" aria-pressed="false">'+I.sun+'</button>'
+'<button class="pf-mode" data-m="dark" type="button" aria-label="Gelap" aria-pressed="false">'+I.moon+'</button>'
+'<button class="pf-mode" data-m="system" type="button" aria-label="Ikuti sistem" aria-pressed="false">'+I.pc+'</button></div>'
+'<div class="pf-foot"><span>'+APP+' ©'+new Date().getFullYear()+'</span><span><a id="pfTerms">Terms</a> · <a id="pfPrivacy">Privacy policy</a></span></div>';
document.body.appendChild(menu);foot.appendChild(card);

function mode(){try{var n=localStorage.getItem("bekki_tema");return n==="dark"||n==="light"?n:"system"}catch(e){return "system"}}
function dark(){return document.documentElement.classList.contains("dark")}
function mark(){var m=mode();Array.prototype.forEach.call(menu.querySelectorAll(".pf-mode"),function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-m")===m))})}
function setTheme(m){
try{if(m==="system")localStorage.removeItem("bekki_tema");else localStorage.setItem("bekki_tema",m)}catch(e){}
document.documentElement.classList.toggle("dark",m==="dark"||(m==="system"&&matchMedia("(prefers-color-scheme: dark)").matches));mark()}
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){if(mode()==="system")setTheme("system")})}catch(e){}
function toast(t){var o=document.querySelector(".pf-toast");if(o)o.remove();var e=document.createElement("div");e.className="pf-toast";e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.remove()},2200)}
function pos(){var r=card.getBoundingClientRect();if(r.width<120){menu.style.width=Math.min(280,innerWidth-16)+"px";menu.style.left=Math.max(8,Math.min(r.right+8,innerWidth-Math.min(280,innerWidth-16)-8))+"px";menu.style.bottom=Math.max(8,innerHeight-r.bottom)+"px";menu.style.maxHeight=Math.max(200,innerHeight-16)+"px";return}var w=Math.min(r.width,innerWidth-16),l=Math.max(8,Math.min(r.left,innerWidth-w-8));menu.style.width=w+"px";menu.style.left=l+"px";menu.style.bottom=(innerHeight-r.top+8)+"px";menu.style.maxHeight=Math.max(200,r.top-16)+"px"}
function buka(){mark();menu.hidden=false;pos();card.setAttribute("aria-expanded","true")}
addEventListener("resize",function(){if(!menu.hidden)pos()});
function tutup(){menu.hidden=true;card.setAttribute("aria-expanded","false")}
function go(k){tutup();if(LINKS[k])window.open(LINKS[k],"_blank","noopener");else toast("Segera hadir")}

card.onclick=function(e){e.stopPropagation();menu.hidden?buka():tutup()};
document.addEventListener("click",function(e){if(!menu.hidden&&!menu.contains(e.target))tutup()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")tutup()});
$("pfBug").onclick=function(){tutup();var b=$("bugBtn");if(b)b.click()};
Array.prototype.forEach.call(menu.querySelectorAll(".pf-mode"),function(b){b.onclick=function(){setTheme(b.getAttribute("data-m"))}});
$("pfSettings").onclick=function(){go("settings")};
$("pfSecurity").onclick=function(){go("security")};
$("pfLimits").onclick=function(){go("limits")};
$("pfSupport").onclick=function(){go("support")};
$("pfTerms").onclick=function(){go("terms")};
$("pfPrivacy").onclick=function(){go("privacy")};
$("pfOut").onclick=function(){tutup();var sb=window.bekkiSB;(sb?sb.auth.signOut():Promise.resolve()).then(function(){location.replace("/ai/login/")},function(){location.replace("/ai/login/")})};

function isi(u){
var m=(u&&u.user_metadata)||{},mail=(u&&u.email)||"";
var nama=m.full_name||((m.first_name||m.last_name)?((m.first_name||"")+" "+(m.last_name||"")).trim():"")||m.name||(mail?mail.split("@")[0]:"Akun saya");
var w=String(nama).replace(/[._-]+/g," ").trim().split(/\s+/);
var ini=(w.length>1?w[0][0]+w[1][0]:String(nama).replace(/[^A-Za-z0-9]/g,"").slice(0,2)||"?").toUpperCase();
var foto=m.avatar_url||m.picture||"";if(!/^https:\/\//i.test(foto))foto="";["pfAv","pfAv2"].forEach(function(id){var e=$(id);e.textContent=ini;e.style.backgroundImage=foto?"url(\""+foto.replace(/["\\()\s]/g,encodeURIComponent)+"\")":"";e.style.backgroundSize="cover";e.style.backgroundPosition="center";e.style.color=foto?"transparent":""});
$("pfName").textContent=nama;$("pfName2").textContent=nama;$("pfMail").textContent=mail;
$("pfSub").textContent=mail||"Akun saya"}
/* ===== Jendela Settings ===== */
var SCSS=".st-back{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:70;display:flex;align-items:center;justify-content:center;padding:12px;animation:fade-up .18s var(--ease-spring) both}"
+".st-back[hidden]{display:none}"
+".st-box{position:relative;display:flex;width:min(880px,100%);height:min(560px,88dvh);background:var(--background);color:var(--foreground);border:1px solid color-mix(in oklab,var(--border) 80%,transparent);border-radius:18px;overflow:hidden;box-shadow:var(--shadow-float)}"
+".st-side{width:260px;flex:none;padding:14px;background:color-mix(in oklab,var(--foreground) 4%,var(--background));border-right:1px solid color-mix(in oklab,var(--border) 80%,transparent);display:flex;flex-direction:column;gap:12px}"
+".st-who{display:flex;align-items:center;gap:10px;min-width:0;padding:2px 2px 6px}"
+".st-who .pf-av{width:36px;height:36px;border-radius:9px;font-size:12px}"
+".st-nav{display:flex;flex-direction:column;gap:4px}"
+".st-tab{display:flex;align-items:center;gap:12px;height:40px;padding:0 12px;border-radius:10px;font-size:14px;color:var(--foreground);text-align:left;border:1px solid transparent}"
+".st-tab svg{font-size:17px;opacity:.85;flex:none}"
+".st-tab:hover{background:var(--sidebar-accent)}"
+".st-tab[aria-selected=true]{background:var(--sidebar-accent);border-color:color-mix(in oklab,var(--foreground) 22%,transparent)}"
+".st-main{flex:1;min-width:0;overflow-y:auto;padding:26px 28px}"
+".st-x{position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:10px;display:grid;place-items:center;color:var(--foreground);z-index:2}"
+".st-x:hover{background:var(--sidebar-accent)}.st-x svg{font-size:20px}"
+".st-h{font-size:20px;font-weight:600;margin:0 40px 18px 0}"
+".st-card{border:1px solid color-mix(in oklab,var(--border) 80%,transparent);border-radius:14px;margin-bottom:16px;overflow:hidden}"
+".st-in{padding:20px}.st-ct{font-size:16px;font-weight:600;margin:0 0 16px}"
+".st-acc{display:grid;grid-template-columns:auto 1fr;gap:16px 20px;align-items:start}"
+".st-big{width:64px;height:64px;border-radius:12px;background:#e8e0d5;color:#111;display:grid;place-items:center;font-size:22px;font-weight:600}"
+".st-f{display:flex;flex-direction:column;gap:6px;min-width:0}.st-f label{font-size:13px;font-weight:500}"
+".st-row2{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:16px}"
+".st-f input{height:40px;border-radius:10px;border:1px solid color-mix(in oklab,var(--border) 90%,transparent);background:transparent;color:var(--foreground);padding:0 12px;font-size:14px;width:100%;min-width:0}"
+".st-f input:disabled{opacity:.7}"
+".st-bar{display:flex;align-items:center;gap:10px;padding:14px 20px;border-top:1px solid color-mix(in oklab,var(--border) 80%,transparent);flex-wrap:wrap}"
+".st-bar .lbl{font-size:13px;color:var(--muted-foreground)}"
+".st-id{display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:8px;background:color-mix(in oklab,var(--foreground) 7%,transparent);font:12px ui-monospace,Menlo,monospace;color:var(--muted-foreground)}"
+".st-id button{display:grid;place-items:center;color:var(--foreground)}.st-id svg{font-size:15px}"
+".st-btn{height:40px;padding:0 18px;border-radius:10px;font-size:14px;font-weight:500;background:var(--foreground);color:var(--background);margin-left:auto}"
+".st-btn:disabled{opacity:.5}"
+".st-btn.out{background:transparent;color:var(--foreground);border:1px solid color-mix(in oklab,var(--border) 90%,transparent);margin-left:0}"
+".st-line{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 20px;font-size:14px}"
+".st-line+.st-line{border-top:1px solid color-mix(in oklab,var(--border) 80%,transparent)}"
+".st-line small{display:block;color:var(--muted-foreground);font-size:12px;margin-top:2px}"
+".st-modes{display:flex;gap:6px}.st-msg{font-size:13px;color:var(--muted-foreground)}"
+"@media(max-width:700px){.st-back{align-items:flex-start;padding:56px 0 0}.st-box{flex-direction:column;height:auto;max-height:calc(100dvh - 56px);width:100%;border-radius:18px 18px 0 0}"
+".st-side{width:auto;border-right:0;border-bottom:1px solid color-mix(in oklab,var(--border) 80%,transparent);padding:12px 56px 12px 12px}.st-who{display:none}.st-nav{flex-direction:row;flex-wrap:wrap}"
+".st-main{padding:20px}.st-acc{grid-template-columns:1fr}.st-big{margin:0 auto;width:68px;height:68px}.st-row2{grid-template-columns:1fr}}";
var SI={
user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
sl:'<svg viewBox="0 0 24 24"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>',
sh:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
shc:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
x:'<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
cp:'<svg viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>'};
var TABS=[["profile","Profile",SI.user],["pref","Preferences",SI.sl],["sec","Security &amp; Access",SI.sh],["priv","Privacy",SI.shc]];
var stEl=null,stUser=null,stTab="profile";
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function nm(u){var m=(u&&u.user_metadata)||{},mail=(u&&u.email)||"";var f=m.first_name,l=m.last_name;
if(f==null&&l==null){var full=m.full_name||m.name||(mail?mail.split("@")[0]:"");var p=String(full).split(/\s+/);f=p.shift()||"";l=p.join(" ")}
return {f:f||"",l:l||""}}
function inis(u){var n=nm(u),a=((n.f[0]||"")+(n.l[0]||"")).toUpperCase();return a||((u&&u.email||"?")[0]).toUpperCase()}
function stClose(){if(stEl){stEl.remove();stEl=null}}
function stBody(){
var u=stUser||{},n=nm(u),box=stEl.querySelector(".st-main"),h="";
if(stTab==="profile"){
var id=u.id||"",sid=id?id.slice(0,8)+"..."+id.slice(-7):"-";
h='<h2 class="st-h">Profile</h2><div class="st-card"><div class="st-in"><h3 class="st-ct">Your Account</h3><div class="st-acc"><div class="st-big">'+esc(inis(u))+'</div><div class="st-f"><label for="stEm">Email</label><input id="stEm" type="email" disabled value="'+esc(u.email||"")+'"></div>'
+'<div class="st-row2"><div class="st-f"><label for="stFn">First name</label><input id="stFn" value="'+esc(n.f)+'" maxlength="60" autocomplete="given-name"></div><div class="st-f"><label for="stLn">Last name</label><input id="stLn" value="'+esc(n.l)+'" maxlength="60" autocomplete="family-name"></div></div></div></div>'
+'<div class="st-bar"><span class="lbl">User ID</span><span class="st-id"><button type="button" id="stCp" aria-label="Salin">'+SI.cp+'</button><span>'+esc(sid)+'</span></span><span class="st-msg" id="stMsg" role="status"></span><button class="st-btn" id="stSave" type="button">Update profile</button></div></div>'}
else if(stTab==="pref"){
h='<h2 class="st-h">Preferences</h2><div class="st-card"><div class="st-line"><div>Theme<small>Terang, gelap, atau ikuti sistem</small></div><div class="st-modes">'
+'<button class="pf-mode" data-m="light" type="button" aria-label="Terang" aria-pressed="false">'+I.sun+'</button>'
+'<button class="pf-mode" data-m="dark" type="button" aria-label="Gelap" aria-pressed="false">'+I.moon+'</button>'
+'<button class="pf-mode" data-m="system" type="button" aria-label="Ikuti sistem" aria-pressed="false">'+I.pc+'</button></div></div></div>'}
else if(stTab==="sec"){
var pv=(u.app_metadata&&u.app_metadata.provider)||"email";
h='<h2 class="st-h">Security &amp; Access</h2><div class="st-card"><div class="st-line"><div>Metode masuk<small>'+(pv==="google"?"Google":"Kode lewat email")+' · '+esc(u.email||"")+'</small></div></div>'
+'<div class="st-line"><div>Keluar dari perangkat ini</div><button class="st-btn out" id="stOut" type="button">Log out</button></div>'
+'<div class="st-line"><div>Keluar dari semua perangkat<small>Semua HP dan browser harus login lagi</small></div><button class="st-btn out" id="stOutAll" type="button">Log out semua</button></div></div>'}
else{
h='<h2 class="st-h">Privacy</h2><div class="st-card"><div class="st-line"><div>Hapus semua obrolan<small>Menghapus riwayat obrolan di perangkat ini</small></div><button class="st-btn out" id="stDel" type="button">Hapus</button></div>'
+'<div class="st-line"><div>Terms</div><button class="st-btn out" id="stTerms" type="button">Buka</button></div>'
+'<div class="st-line"><div>Privacy policy</div><button class="st-btn out" id="stPriv" type="button">Buka</button></div></div>'}
box.innerHTML=h;box.scrollTop=0;
Array.prototype.forEach.call(stEl.querySelectorAll(".st-tab"),function(b){b.setAttribute("aria-selected",String(b.getAttribute("data-t")===stTab))});
function g(i){return stEl.querySelector("#"+i)}
if(stTab==="profile"){
g("stCp").onclick=function(){try{navigator.clipboard.writeText(u.id||"");g("stMsg").textContent="Tersalin"}catch(e){}};
g("stSave").onclick=function(){
var f=g("stFn").value.trim(),l=g("stLn").value.trim(),sb=window.bekkiSB,bt=g("stSave"),ms=g("stMsg");
if(!sb){ms.textContent="Belum siap";return}
bt.disabled=true;ms.textContent="Menyimpan...";
sb.auth.updateUser({data:{first_name:f,last_name:l,full_name:(f+" "+l).trim()}}).then(function(r){
bt.disabled=false;if(r&&r.error){ms.textContent="Gagal menyimpan";return}
stUser=(r&&r.data&&r.data.user)||stUser;isi(stUser);stEl.querySelector(".st-big").textContent=inis(stUser);
stEl.querySelector("#stWho").textContent=(f+" "+l).trim()||u.email;ms.textContent="Tersimpan"},function(){bt.disabled=false;ms.textContent="Gagal menyimpan"})}}
if(stTab==="pref"){
var m=mode();Array.prototype.forEach.call(box.querySelectorAll(".pf-mode"),function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-m")===m));b.onclick=function(){setTheme(b.getAttribute("data-m"));stBody()}})}
if(stTab==="sec"){
g("stOut").onclick=function(){$("pfOut").click()};
g("stOutAll").onclick=function(){var sb=window.bekkiSB;(sb?sb.auth.signOut({scope:"global"}):Promise.resolve()).then(function(){location.replace("/ai/login/")},function(){location.replace("/ai/login/")})}}
if(stTab==="priv"){
g("stDel").onclick=function(){stClose();var d=$("delAll");if(d)d.click()};
g("stTerms").onclick=function(){go("terms")};g("stPriv").onclick=function(){go("privacy")}}}
function stOpen(t){
tutup();stClose();stTab=(typeof t==="string")?t:"profile";
var sb=window.bekkiSB;
var back=document.createElement("div");back.className="st-back";
back.innerHTML='<div class="st-box" role="dialog" aria-modal="true" aria-label="Settings"><button class="st-x" id="stX" type="button" aria-label="Tutup">'+SI.x+'</button>'
+'<div class="st-side"><div class="st-who"><span class="pf-av">?</span><span class="pf-txt"><span class="pf-name" id="stWho"></span><span class="pf-sub" id="stMail"></span></span></div><div class="st-nav" role="tablist">'
+TABS.map(function(t){return '<button class="st-tab" role="tab" data-t="'+t[0]+'" type="button">'+t[2]+'<span>'+t[1]+'</span></button>'}).join("")
+'</div></div><div class="st-main"></div></div>';
document.body.appendChild(back);stEl=back;
var sty=document.getElementById("stCss");if(!sty){sty=document.createElement("style");sty.id="stCss";sty.textContent=SCSS;document.head.appendChild(sty)}
back.onclick=function(e){if(e.target===back)stClose()};
back.querySelector("#stX").onclick=stClose;
Array.prototype.forEach.call(back.querySelectorAll(".st-tab"),function(b){b.onclick=function(){stTab=b.getAttribute("data-t");stBody()}});
document.addEventListener("keydown",function k(e){if(!stEl){document.removeEventListener("keydown",k);return}if(e.key==="Escape"){stClose()}});
function fill(u){stUser=u||{};var n=nm(stUser),full=(n.f+" "+n.l).trim();back.querySelector(".st-who .pf-av").textContent=inis(stUser);
back.querySelector("#stWho").textContent=full||stUser.email||"Akun saya";back.querySelector("#stMail").textContent=stUser.email||"";stBody()}
fill(null);
if(sb)sb.auth.getSession().then(function(r){if(stEl===back)fill(r&&r.data&&r.data.session?r.data.session.user:null)}).catch(function(){})}
$("pfSettings").onclick=function(){stOpen("profile")};
$("pfSecurity").onclick=function(){stOpen("sec")};
var sb=window.bekkiSB;
if(sb)sb.auth.getSession().then(function(r){isi(r&&r.data&&r.data.session?r.data.session.user:null)}).catch(function(){});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
