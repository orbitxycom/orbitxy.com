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
+".pf-menu{position:absolute;left:0;right:0;bottom:calc(100% + 8px);max-height:calc(100dvh - 100px);overflow-y:auto;background:var(--popover);color:var(--popover-foreground);border:1px solid color-mix(in oklab,var(--border) 80%,transparent);border-radius:16px;padding:8px;box-shadow:var(--shadow-float);z-index:30;animation:pf-in .16s var(--ease-spring) both}"
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
foot.appendChild(menu);foot.appendChild(card);

function mode(){try{var n=localStorage.getItem("bekki_tema");return n==="dark"||n==="light"?n:"system"}catch(e){return "system"}}
function dark(){return document.documentElement.classList.contains("dark")}
function mark(){var m=mode();Array.prototype.forEach.call(menu.querySelectorAll(".pf-mode"),function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-m")===m))})}
function setTheme(m){
try{if(m==="system")localStorage.removeItem("bekki_tema");else localStorage.setItem("bekki_tema",m)}catch(e){}
document.documentElement.classList.toggle("dark",m==="dark"||(m==="system"&&matchMedia("(prefers-color-scheme: dark)").matches));mark()}
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){if(mode()==="system")setTheme("system")})}catch(e){}
function toast(t){var o=document.querySelector(".pf-toast");if(o)o.remove();var e=document.createElement("div");e.className="pf-toast";e.textContent=t;document.body.appendChild(e);setTimeout(function(){e.remove()},2200)}
function buka(){mark();menu.hidden=false;card.setAttribute("aria-expanded","true")}
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
var nama=m.full_name||m.name||(mail?mail.split("@")[0]:"Akun saya");
var w=String(nama).replace(/[._-]+/g," ").trim().split(/\s+/);
var ini=(w.length>1?w[0][0]+w[1][0]:String(nama).replace(/[^A-Za-z0-9]/g,"").slice(0,2)||"?").toUpperCase();
$("pfAv").textContent=ini;$("pfAv2").textContent=ini;
$("pfName").textContent=nama;$("pfName2").textContent=nama;$("pfMail").textContent=mail;
$("pfSub").textContent=mail||"Akun saya"}
var sb=window.bekkiSB;
if(sb)sb.auth.getSession().then(function(r){isi(r&&r.data&&r.data.session?r.data.session.user:null)}).catch(function(){});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
