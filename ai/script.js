(()=>{"use strict";const G="https://adxyijyerblmosdzsbyp.supabase.co",W="sb_publishable_bCG2DJjBfLAMp2ME9Pe3cQ_jbPmlnnX",_="bekki_riwayat_v2",r=t=>document.getElementById(t),E=r("sidebar"),k=r("inner"),$=r("chat"),p=r("input"),P=r("send"),A=r("hist"),J=()=>innerWidth<=768,K=!1,D=matchMedia("(pointer:coarse)").matches;let f=[],h=null,v=!1;function j(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R(t,e){return'<a href="'+t+'" target="_blank" rel="noopener noreferrer">'+e+"</a>"}function M(t){let e=j(t).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/(^|[^*])\*([^*\s][^*]*)\*/g,"$1<em>$2</em>");return e=e.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)"']+)\)/g,(n,a,i)=>R(i,a)),e.split(/(<a [^>]*>.*?<\/a>)/).map((n,a)=>a%2?n:n.replace(/(^|[\s(]|&lt;)(https?:\/\/[^\s<"']+)/g,(i,s,l)=>{l=l.replace(/(&gt;|&lt;).*$/,"");let o="";for(;;){const d=l.slice(-1);if(/[.,;:!?]/.test(d)||d===")"&&(l.match(/\)/g)||[]).length>(l.match(/\(/g)||[]).length)o=d+o,l=l.slice(0,-1);else break}const c=i.slice(s.length+l.length+o.length);return s+R(l,l)+o+c})).join("")}function H(t){t.indexOf(`
`)<0&&(t=t.replace(/\s+(\d{1,2}\.\s+\*\*)/g,`
$1`));const e=t.replace(/\r/g,"").split(`
`);let n="",a=null,i=[],s=null,l,lg="";const o=()=>{i.length&&(n+="<p>"+i.map(M).join("<br>")+"</p>",i=[])},c=()=>{a&&(n+="</"+a+">",a=null)};for(const d of e){if(d.trim().startsWith("```")){s===null?(o(),c(),s=[],lg=d.trim().slice(3).trim().toLowerCase()):(n+=CB(s.join(`
`),lg,!1),s=null);continue}if(s!==null){s.push(d);continue}if(!d.trim()){o(),c();continue}if(l=d.match(/^\s*(\d+)[.)]\s+(.*)/)){o(),a!=="ol"&&(c(),a="ol",n+='<ol start="'+l[1]+'">'),n+="<li>"+M(l[2])+"</li>";continue}if(l=d.match(/^\s*[-*\u2022]\s+(.*)/)){o(),a!=="ul"&&(c(),a="ul",n+="<ul>"),n+="<li>"+M(l[1])+"</li>";continue}if(l=d.match(/^#{1,6}\s+(.*)/)){o(),c(),n+="<p><strong>"+M(l[1])+"</strong></p>";continue}c(),i.push(d)}return s!==null&&(n+=CB(s.join(`
`),lg,!0)),o(),c(),n}function Q(){try{const t=JSON.parse(localStorage.getItem(_)||"null");t&&Array.isArray(t.chats)&&(f=t.chats.filter(e=>e&&e.id&&Array.isArray(e.msgs)),h=t.cur)}catch{}f.find(t=>t.id===h)||(h=null);try{let u=new URLSearchParams(location.search).get("c")||new URLSearchParams(location.hash.slice(1)).get("c");if(!u&&location.search.length>1&&location.search.indexOf("=")<0)try{u=decodeURIComponent(location.search.slice(1))}catch{}if(!u&&location.search.length>1)try{u=decodeURIComponent(location.search.slice(1).split("=")[0])}catch{}if(!u&&location.hash.length>1)try{u=decodeURIComponent(location.hash.slice(1))}catch{}u&&f.some(t=>t.id===u)&&(h=u)}catch{}}function NID(){try{const a=new Uint8Array(9);crypto.getRandomValues(a);return"c"+Array.from(a,x=>(x%36).toString(36)).join("")}catch{return"c"+Date.now().toString(36)+Math.random().toString(36).slice(2,8)}}function UR(){try{history.replaceState(history.state,"",(window.bekkiPkt?location.pathname+"?"+encodeURIComponent(h||"c0")+"="+window.bekkiPkt:h?location.pathname+"?"+encodeURIComponent(h):location.pathname))}catch{}}function b(){try{localStorage.setItem(_,JSON.stringify({chats:f,cur:h}))}catch{}UR()}const T=()=>f.find(t=>t.id===h);function u(t,e,n){const a=document.createElement(t);return e&&(a.className=e),n!=null&&(a.innerHTML=n),a}const X='<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',Z='<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/></svg>',y=()=>{$.scrollTop=$.scrollHeight},PS=()=>y(),yp=()=>y();let PIN=null,PB=null;function U(t,at){const e=u("div","msg user"),n=u("div","bubble");if(n.textContent=t,at&&at.length){const r=u("div","att-row");at.forEach(a=>{if(a.k==="img"&&a.thumb){const i=document.createElement("img");i.src=a.thumb;i.alt=a.name||"Gambar";r.appendChild(i)}else{const f=u("span","att-file");f.innerHTML=ATI.file+"<b></b>";f.lastChild.textContent=a.name||"File";r.appendChild(f)}});e.classList.add("has-att"),e.appendChild(r)}return e.appendChild(n),k.appendChild(e),e}const AI={up:'<svg viewBox="0 0 24 24"><path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>',dn:'<svg viewBox="0 0 24 24"><path d="M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>',cp:'<svg viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>',ck:'<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>'};
function TM(t){const d=new Date(t),h=d.getHours();return(h%12||12)+":"+String(d.getMinutes()).padStart(2,"0")+(h<12?"am":"pm")}
function CPY(x){try{return navigator.clipboard.writeText(x)}catch(e){}const a=document.createElement("textarea");a.value=x;a.style.cssText="position:fixed;opacity:0";document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(e){}a.remove();return Promise.resolve()}
function AB(r,m){const bb=r&&r.querySelector(".bubble");if(!bb||!m||bb.querySelector(".acts"))return;const d=document.createElement("div");d.className="acts";
const mk=(c,i,l)=>{const x=document.createElement("button");x.type="button";x.className=c;x.setAttribute("aria-label",l);x.innerHTML=i;return x};
const up=mk("a-up",AI.up,"Suka"),dn=mk("a-dn",AI.dn,"Tidak suka"),cp=mk("a-cp",AI.cp,"Salin");
const st=()=>{up.setAttribute("aria-pressed",String(m.fb==="up"));dn.setAttribute("aria-pressed",String(m.fb==="down"))};st();
up.onclick=()=>{m.fb=m.fb==="up"?null:"up";st();b()};dn.onclick=()=>{m.fb=m.fb==="down"?null:"down";st();b();m.fb==="down"&&DK(m)};
cp.onclick=()=>{CPY(m.content||"").then(()=>{cp.innerHTML=AI.ck;setTimeout(()=>{cp.innerHTML=AI.cp},1500)})};
d.appendChild(up),d.appendChild(dn),d.appendChild(cp);
const SL=SN(m.src);if(SL.length){const sb=document.createElement("button");sb.type="button";sb.className="a-src";sb.setAttribute("aria-label","Sumber web");sb.innerHTML='<span class="src-fv">'+SL.slice(0,3).map(x=>'<i>'+SFV(x)+"</i>").join("")+'</span>';sb.title=SL.length+" web pages";sb.setAttribute("aria-label",SL.length+" sumber web");sb.onclick=()=>SRK(m);d.appendChild(sb)}
if(m.t){const t=document.createElement("span");t.className="tm";t.textContent=TM(m.t);d.appendChild(t)}
bb.appendChild(d);return r}
let LSRC=[];
function SN(a){if(!Array.isArray(a))return[];const o=[],seen=new Set;a.forEach(x=>{if(!x)return;const u=String(typeof x==="string"?x:x.u||x.url||x.link||x.href||"");if(!/^https?:\/\//i.test(u)||seen.has(u))return;seen.add(u);let h="";try{h=new URL(u).hostname.replace(/^www\./,"")}catch(e){return}o.push({u:u,h:h,t:String(typeof x==="string"?h:x.t||x.title||x.name||h).slice(0,140),d:String(typeof x==="string"?"":x.d||x.snippet||x.description||x.text||"").slice(0,200)})});return o}
function SFV(x){const h=(x.h||"").replace(/[^a-z0-9.\-]/gi,"");return'<img src="https://www.google.com/s2/favicons?domain='+h+'&sz=64" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.replaceWith(Object.assign(document.createElement(\'b\'),{textContent:\''+(h[0]||"?").toUpperCase()+'\'}))">'}
function SRK(m){const old=document.getElementById("srk");old&&old.remove();const L=SN(m.src);
const w=document.createElement("div");w.className="dk-back";w.id="srk";
w.innerHTML='<div class="dk-sheet" role="dialog" aria-modal="true" aria-labelledby="srT"><div class="dk-grab" aria-hidden="true"><span></span></div><h3 id="srT">Sumber web ('+L.length+')</h3><div class="src-list"></div></div>';
document.body.appendChild(w);
const sh=w.querySelector(".dk-sheet"),ls=w.querySelector(".src-list");
L.forEach(x=>{const a=document.createElement("a");a.className="src-it";a.href=x.u;a.target="_blank";a.rel="noopener noreferrer nofollow";
a.innerHTML='<span class="src-ic">'+SFV(x)+'</span><span class="src-tx"><b></b><small></small><em></em></span>';
a.querySelector("b").textContent=x.t;a.querySelector("small").textContent=x.h;const e=a.querySelector("em");x.d?e.textContent=x.d:e.remove();ls.appendChild(a)});
let gone=!1;const cl=()=>{if(gone)return;gone=!0;document.removeEventListener("keydown",kd,!0);w.classList.add("out");sh.style.transition="transform .22s ease";sh.style.transform="translateY(105%)";setTimeout(()=>w.remove(),230)};
function kd(e){e.key==="Escape"&&(e.stopPropagation(),cl())}document.addEventListener("keydown",kd,!0);
w.onclick=e=>{e.target===w&&cl()};
let y0=0,drag=!1,can=!1;const mv=y=>{const d=Math.max(0,y-y0);sh.style.transition="none";sh.style.transform="translateY("+d+"px)"};
const fin=d=>{drag=!1;if(d>90)cl();else{sh.style.transition="transform .2s ease";sh.style.transform=""}};
sh.addEventListener("touchstart",e=>{y0=e.touches[0].clientY;can=sh.scrollTop<=0;drag=!1},{passive:!0});
sh.addEventListener("touchmove",e=>{const dy=e.touches[0].clientY-y0;if(can&&dy>0){drag=!0;e.cancelable&&e.preventDefault();mv(e.touches[0].clientY)}},{passive:!1});
sh.addEventListener("touchend",e=>{if(drag)fin(Math.max(0,e.changedTouches[0].clientY-y0))});
w.querySelector(".dk-grab").addEventListener("mousedown",e=>{e.preventDefault();y0=e.clientY;const m1=ev=>{drag=!0;mv(ev.clientY)},u1=ev=>{window.removeEventListener("mousemove",m1);window.removeEventListener("mouseup",u1);fin(Math.max(0,ev.clientY-y0))};window.addEventListener("mousemove",m1);window.addEventListener("mouseup",u1)})}
const DR=["Illegal or violating","Incorrect answer","Made up information","Too short","Too long","Incorrect language","Don't like the style","Refused to answer","Did not understand my question","Display error","Did not follow instructions","Did not generate an image","Did not perform a web search","Other"];
function DK(m){const old=document.getElementById("dk");old&&old.remove();
const w=document.createElement("div");w.className="dk-back";w.id="dk";
w.innerHTML='<div class="dk-sheet" role="dialog" aria-modal="true" aria-labelledby="dkT"><div class="dk-grab" aria-hidden="true"><span></span></div><h3 id="dkT">What was wrong?</h3><div class="dk-chips"></div><div class="dk-act"><button class="btn-dark" type="button" disabled>Kirim</button></div></div>';
document.body.appendChild(w);
const sh=w.querySelector(".dk-sheet"),cs=w.querySelector(".dk-chips"),sd=w.querySelector(".btn-dark"),pick=new Set(Array.isArray(m.fbWhy)?m.fbWhy:[]);
let gone=!1;
const cl=()=>{if(gone)return;gone=!0;document.removeEventListener("keydown",kd,true);w.classList.add("out");sh.style.transition="transform .22s ease";sh.style.transform="translateY(105%)";setTimeout(()=>w.remove(),230)};
function kd(e){e.key==="Escape"&&(e.stopPropagation(),cl())}
document.addEventListener("keydown",kd,true);
DR.forEach(r=>{const c=document.createElement("button");c.type="button";c.className="fb-chip";c.textContent=r;pick.has(r)&&c.classList.add("on");
c.onclick=()=>{pick.has(r)?(pick.delete(r),c.classList.remove("on")):(pick.add(r),c.classList.add("on"));sd.disabled=!pick.size};cs.appendChild(c)});
sd.disabled=!pick.size;
w.onclick=e=>{e.target===w&&cl()};
let y0=0,drag=!1,can=!1;
const mv=y=>{const d=Math.max(0,y-y0);sh.style.transition="none";sh.style.transform="translateY("+d+"px)";return d};
const fin=d=>{drag=!1;if(d>90)cl();else{sh.style.transition="transform .2s ease";sh.style.transform=""}};
sh.addEventListener("touchstart",e=>{y0=e.touches[0].clientY;can=sh.scrollTop<=0;drag=!1},{passive:!0});
sh.addEventListener("touchmove",e=>{const dy=e.touches[0].clientY-y0;if(can&&dy>0){drag=!0;e.cancelable&&e.preventDefault();mv(e.touches[0].clientY)}},{passive:!1});
sh.addEventListener("touchend",e=>{if(drag)fin(Math.max(0,e.changedTouches[0].clientY-y0))});
const gr=w.querySelector(".dk-grab");
gr.addEventListener("mousedown",e=>{e.preventDefault();y0=e.clientY;const m1=ev=>{drag=!0;mv(ev.clientY)},u1=ev=>{window.removeEventListener("mousemove",m1);window.removeEventListener("mouseup",u1);fin(Math.max(0,ev.clientY-y0))};window.addEventListener("mousemove",m1);window.addEventListener("mouseup",u1)});
gr.addEventListener("click",()=>{});
sd.onclick=()=>{const why=[...pick];m.fbWhy=why;b();
try{fetch(G+"/rest/v1/laporan_bug",{method:"POST",headers:{"Content-Type":"application/json",apikey:W,Authorization:"Bearer "+W,Prefer:"return=minimal"},body:JSON.stringify({kategori:("Dislike: "+why.join(", ")).slice(0,200),detail:null,layar:innerWidth+"x"+innerHeight,perangkat:navigator.userAgent.slice(0,300)})}).catch(()=>{})}catch(e){}
cl()}}
function ES(x){return String(x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function SP(c,x){return String(x).split("\n").map(p=>p?'<i class="'+c+'">'+ES(p)+'</i>':"").join("\n")}
const KW=/^(?:const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|new|this|class|extends|import|export|from|default|try|catch|finally|throw|async|await|typeof|instanceof|in|of|null|undefined|true|false|void|delete)$/;
function HC(x){return x.replace(/(\/\*[\s\S]*?(?:\*\/|$))|("[^"\n]*"?|'[^'\n]*'?)|([A-Za-z-]+)(?=\s*:)|(#[0-9a-fA-F]{3,8}\b|-?\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|s|ms|deg|fr)?)|([\s\S])/g,(a,c,s,p,n,o)=>c?SP("h-c",c):s?SP("h-s",s):p?SP("h-a",p):n?SP("h-n",n):ES(o))}
function HJ(x){return x.replace(/(\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$))|("(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?|`(?:\\.|[^`\\])*`?)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|([\s\S])/g,(a,c,s,w,n,o)=>c?SP("h-c",c):s?SP("h-s",s):w?(KW.test(w)?SP("h-k",w):ES(w)):n?SP("h-n",n):ES(o))}
function HT(t){if(/^<!/.test(t))return SP("h-c",t);const m=t.match(/^(<\/?)([\w:-]+)([\s\S]*?)(\/?>?)$/);if(!m)return ES(t);
return SP("h-t",m[1]+m[2])+m[3].replace(/([^\s=<>\/"']+)(\s*=\s*)?("[^"]*"?|'[^']*'?|[^\s"'>]+)?|[\s\S]/g,(a,n,e,v)=>n?SP("h-a",n)+(e?ES(e):"")+(v?SP("h-s",v):""):ES(a))+SP("h-t",m[4])}
function HH(code){let out="",last=0,m;const re=/<!--[\s\S]*?(?:-->|$)|<(script|style)\b[^>]*>|<\/?[a-zA-Z!][^>]*(?:>|$)/gi;
while((m=re.exec(code))){out+=ES(code.slice(last,m.index));const t=m[0];
if(t.slice(0,4)==="<!--"){out+=SP("h-c",t);last=re.lastIndex}
else if(m[1]){out+=HT(t);const rest=code.slice(re.lastIndex),k=rest.search(new RegExp("</"+m[1]+"\\s*>","i")),inner=k<0?rest:rest.slice(0,k);out+=m[1].toLowerCase()==="style"?HC(inner):HJ(inner);re.lastIndex+=inner.length;last=re.lastIndex}
else{out+=HT(t);last=re.lastIndex}}
return out+ES(code.slice(last))}
const PG='<script>document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a");if(!a)return;e.preventDefault();var h=a.getAttribute("href")||"";if(h.length>1&&h.charAt(0)==="#"){var t=document.getElementById(h.slice(1));t&&t.scrollIntoView({behavior:"smooth"})}},!0);document.addEventListener("submit",function(e){e.preventDefault()},!0);<\/script>';const AIC={code:'<svg viewBox="0 0 24 24"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9z"/></svg>',eye:'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',dl:'<svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>'};
function CB(code,lg,live){code=code.replace(/(<a\b[^>]*?\shref\s*=\s*)("[^"]*"|'[^']*'|[^\s>]+)/gi,(m,p,v)=>/^["']?#/.test(v)?m:p+'"#"');const isH=lg==="html"||/^\s*(<!doctype html|<html)/i.test(code);if(!isH)return"<pre><code>"+j(code)+"</code></pre>";
const tm=code.match(/<title[^>]*>([^<]*)/i)||code.match(/<h1[^>]*>([^<]*)/i);let ti=((tm&&tm[1].trim())||"HTML").slice(0,60);const te=ES(ti).replace(/"/g,"&quot;");
return(live?'<div class="art-st"><span class="art-dot"></span><span>Working</span><span class="art-sep">•</span><b>Creating '+te+'</b></div>':"")
+'<div class="art'+(live?" live":"")+'" data-c="'+encodeURIComponent(code)+'" data-t="'+te+'"><button type="button" class="art-card"'+(live?" disabled":"")+'><span class="art-ic">'+AIC.globe+'</span><span class="art-meta"><b>'+te+'</b><small>Kode \xB7 HTML</small></span></button></div>'}
const APX={chev:'<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',exp:'<svg viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',shr:'<svg viewBox="0 0 24 24"><path d="M14 10h6V4M10 14H4v6M20 4l-6 6M4 20l6-6"/></svg>',x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>'};
let AP=null;
function APA(){if(!AP)return;if(!matchMedia("(max-width:899px)").matches){APC();return}const x=AP,el=x.el;el.style.animation="none";el.style.transition="transform .22s ease";el.style.transform="translateY(100%)";setTimeout(()=>{AP===x&&APC()},220)}
function APC(){if(!AP)return;document.removeEventListener("keydown",AP.kd);document.removeEventListener("click",AP.oc,!0);AP.el.remove();AP.card&&AP.card.classList.remove("on");document.body.classList.remove("art-open");AP=null}
function APCP(x,btn){const done=()=>{const o=btn.textContent;btn.textContent="Tersalin";setTimeout(()=>{btn.textContent="Salin"},1500)};
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(x).then(done,()=>{APFB(x);done()})}else{APFB(x);done()}}
function APFB(x){const t=document.createElement("textarea");t.value=x;t.style.cssText="position:fixed;opacity:0";document.body.appendChild(t);t.select();try{document.execCommand("copy")}catch(e){}t.remove()}
function APD(code,title){const bl=new Blob([code],{type:"text/html;charset=utf-8"}),u=URL.createObjectURL(bl),l=document.createElement("a");l.href=u;l.download=((title||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"halaman")+".html";document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),1500)}
function APO(code,title,card){if(AP&&AP.code===code){AP.el.classList.contains("full")&&0;return}APC();
const host=document.querySelector(".app")||document.body,el=document.createElement("aside");el.className="apanel";el.setAttribute("aria-label","Panel kode");
el.innerHTML='<div class="ap-grab" aria-hidden="true"><span></span></div><div class="ap-h"><div class="ap-seg" role="tablist"><button type="button" data-v="pv" class="on" aria-label="Pratinjau">'+AIC.eye+'<span class="ap-lb">Pratinjau</span></button><button type="button" data-v="code" aria-label="Kode">'+AIC.code+'<span class="ap-lb">Kode</span></button></div><div class="ap-ti"><b></b><span>HTML</span></div><div class="ap-split"><button type="button" class="ap-cp">Salin</button><button type="button" class="ap-more" aria-label="Opsi lainnya" aria-haspopup="menu" aria-expanded="false">'+APX.chev+'</button><div class="ap-menu" role="menu" hidden><button type="button" role="menuitem" data-a="cp">Salin kode</button><button type="button" role="menuitem" data-a="dl">Unduh .html</button></div></div><button type="button" class="ap-ex" aria-label="Layar penuh">'+APX.exp+'</button><button type="button" class="ap-x" aria-label="Tutup">'+APX.x+'</button></div><div class="ap-b"><div class="ap-pv"></div><div class="ap-code" hidden></div></div>';
el.querySelector(".ap-ti b").textContent=title||"HTML";
const pv=el.querySelector(".ap-pv"),cd=el.querySelector(".ap-code"),menu=el.querySelector(".ap-menu"),more=el.querySelector(".ap-more"),cp=el.querySelector(".ap-cp"),ex=el.querySelector(".ap-ex");
const show=v=>{el.querySelectorAll(".ap-seg button").forEach(b=>b.classList.toggle("on",b.dataset.v===v));if(v==="pv"){if(!pv.firstChild){const f=document.createElement("iframe");f.setAttribute("sandbox","allow-scripts allow-forms allow-modals allow-popups");f.title="Pratinjau";f.srcdoc=PG+code;pv.appendChild(f)}pv.hidden=!1;cd.hidden=!0}else{if(!cd.firstChild)cd.innerHTML=HH(code).split("\n").map((x,i)=>'<div class="cl"><span class="no">'+(i+1)+'</span><span class="tx">'+(x||" ")+"</span></div>").join("");cd.hidden=!1;pv.hidden=!0}};
const mc=o=>{menu.hidden=!o;more.setAttribute("aria-expanded",o?"true":"false")};
el.querySelectorAll(".ap-seg button").forEach(b=>b.onclick=()=>show(b.dataset.v));
cp.onclick=()=>APCP(code,cp);more.onclick=e=>{e.stopPropagation();mc(menu.hidden)};
menu.onclick=e=>{const b=e.target.closest("button");if(!b)return;mc(!1);b.dataset.a==="dl"?APD(code,title):APCP(code,cp)};
ex.onclick=()=>{const f=el.classList.toggle("full");ex.innerHTML=f?APX.shr:APX.exp;ex.setAttribute("aria-label",f?"Keluar layar penuh":"Layar penuh")};
el.querySelector(".ap-x").onclick=APA;
let y0=0,dy=0,dr=!1;[el.querySelector(".ap-grab"),el.querySelector(".ap-h")].forEach(z=>{z.addEventListener("touchstart",e=>{if(!matchMedia("(max-width:899px)").matches||e.target.closest("button"))return;y0=e.touches[0].clientY;dy=0;dr=!0;el.style.animation="none";el.style.transition="none"},{passive:!0});z.addEventListener("touchmove",e=>{if(!dr)return;dy=Math.max(0,e.touches[0].clientY-y0);el.style.transform="translateY("+dy+"px)"},{passive:!0});z.addEventListener("touchend",()=>{if(!dr)return;dr=!1;if(dy>110)APA();else{el.style.transition="transform .2s ease";el.style.transform=""}})});
const kd=e=>{if(e.key!=="Escape")return;if(!menu.hidden){mc(!1);return}if(document.querySelector(".dk-back,#srk"))return;APA()};document.addEventListener("keydown",kd);
const oc=e=>{menu.hidden||menu.contains(e.target)||e.target===more||more.contains(e.target)||mc(!1)};document.addEventListener("click",oc,!0);
const rs=document.createElement("div");rs.className="ap-rs";rs.tabIndex=0;rs.setAttribute("role","separator");rs.setAttribute("aria-orientation","vertical");rs.setAttribute("aria-label","Ubah lebar panel");rs.title="Geser untuk ubah lebar, klik dua kali untuk reset";el.insertBefore(rs,el.firstChild);
const dsk=()=>matchMedia("(min-width:900px)").matches,sw=w=>{el.style.flex="0 0 "+w+"px";el.style.width=w+"px"},lim=()=>{const m=document.querySelector(".main").getBoundingClientRect(),r=host.getBoundingClientRect();return Math.max(380,r.right-m.left-360)};
try{const w0=parseInt(localStorage.getItem("bekki_apw")||"",10);w0>0&&dsk()&&sw(Math.min(Math.max(380,w0),lim()))}catch(e){}
const sv=w=>{try{localStorage.setItem("bekki_apw",String(Math.round(w)))}catch(e){}};
rs.addEventListener("pointerdown",e=>{if(e.button||!dsk()||el.classList.contains("full"))return;e.preventDefault();rs.setPointerCapture(e.pointerId);document.body.classList.add("ap-drag");rs.classList.add("on");
const mv=ev=>{const r=host.getBoundingClientRect();sw(Math.max(380,Math.min(r.right-ev.clientX,lim())))},up=()=>{rs.removeEventListener("pointermove",mv);rs.removeEventListener("pointerup",up);rs.removeEventListener("pointercancel",up);document.body.classList.remove("ap-drag");rs.classList.remove("on");sv(el.getBoundingClientRect().width)};
rs.addEventListener("pointermove",mv);rs.addEventListener("pointerup",up);rs.addEventListener("pointercancel",up)});
rs.addEventListener("dblclick",()=>{el.style.flex="";el.style.width="";try{localStorage.removeItem("bekki_apw")}catch(e){}});
rs.addEventListener("keydown",e=>{if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;e.preventDefault();const w=el.getBoundingClientRect().width+(e.key==="ArrowLeft"?24:-24),n=Math.max(380,Math.min(w,lim()));sw(n);sv(n)});
host.appendChild(el);document.body.classList.add("art-open");card&&card.classList.add("on");
AP={el:el,code:code,card:card,kd:kd,oc:oc,cid:(T()||{}).id};show("pv")}
document.addEventListener("click",e=>{const c=e.target.closest&&e.target.closest(".art-card");if(!c)return;const a=c.closest(".art");if(!a||a.classList.contains("live"))return;
document.querySelectorAll(".art.on").forEach(x=>x!==a&&x.classList.remove("on"));APO(decodeURIComponent(a.dataset.c),a.dataset.t||"HTML",a)});
const CATS='<svg viewBox="190 190 700 700" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect x="190" y="190" width="700" height="700" fill="#000"/><rect x="268" y="268" width="78" height="78" fill="#ade4ff"/><rect x="734" y="268" width="78" height="78" fill="#ade4ff"/><rect x="268" y="346" width="156" height="78" fill="#9fdcff"/><rect x="657" y="346" width="156" height="78" fill="#9fdcff"/><rect x="268" y="423" width="544" height="78" fill="#90d6ff"/><rect x="268" y="501" width="78" height="78" fill="#80cbff"/><rect x="424" y="501" width="233" height="78" fill="#80cbff"/><rect x="734" y="501" width="78" height="78" fill="#80cbff"/><rect x="268" y="579" width="233" height="78" fill="#5eb4f7"/><rect x="579" y="579" width="233" height="78" fill="#5eb4f7"/><rect x="268" y="656" width="156" height="78" fill="#2f8add"/><rect x="462" y="656" width="39" height="39" fill="#2f8add"/><rect x="579" y="656" width="39" height="39" fill="#2f8add"/><rect x="657" y="656" width="156" height="78" fill="#2f8add"/><rect x="229" y="734" width="622" height="78" fill="#0d3b87"/></svg>';
const SHI={
cp:'<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"/></svg>',
wa:'<svg viewBox="0 0 24 24"><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z"/></svg>',
tg:'<svg viewBox="0 0 24 24"><path d="M21 4 3 11l6 2 2 6 3-4 5 4z"/><path d="M9 13l8-6"/></svg>',
fb:'<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/></svg>',
mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
sms:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
dl:'<svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>',pv:'<svg viewBox="0 0 24 24"><path d="m15 6-6 6 6 6"/></svg>',nx:'<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',more:'<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>'};
function LGC(){return[BM[2],BM[1],BM[0]]}
const SBG=[["#3a3a3f","#111114"],["#22c55e","#a7f3d0"],["#2563eb","#a855f7"]];
function RR(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function mkImg(i,title){return new Promise(res=>{const W=1200,H=630,cv=document.createElement("canvas");cv.width=W;cv.height=H;const c=cv.getContext("2d");
const g=c.createLinearGradient(0,0,W,H),bg=SBG[i]||SBG[0];g.addColorStop(0,bg[0]);g.addColorStop(1,bg[1]);c.fillStyle=g;c.fillRect(0,0,W,H);
const cw=760,ch=370,cx=(W-cw)/2,cy=(H-ch)/2;
c.save();c.shadowColor="rgba(0,0,0,.4)";c.shadowBlur=50;c.shadowOffsetY=18;RR(c,cx,cy,cw,ch,48);c.fillStyle="#000";c.fill();c.restore();
RR(c,cx,cy,cw,ch,48);c.strokeStyle="rgba(255,255,255,.14)";c.lineWidth=2;c.stroke();
const im=new Image();im.onload=im.onerror=()=>{const L=130,tw=(()=>{c.font="800 96px Geist,system-ui,sans-serif";try{c.letterSpacing="8px"}catch(e){}return c.measureText("BEKKI").width})(),gap=30,x0=(W-(L+gap+tw))/2,y0=cy+60;
c.save();RR(c,x0,y0,L,L,22);c.clip();try{c.drawImage(im,x0,y0,L,L)}catch(e){}c.restore();
c.fillStyle="#fff";c.textBaseline="middle";c.textAlign="left";c.fillText("BEKKI",x0+L+gap,y0+L/2+4);
c.font="500 38px Geist,system-ui,sans-serif";try{c.letterSpacing="0px"}catch(e){}c.fillStyle="rgba(255,255,255,.65)";c.textAlign="center";
let t=String(title||"");while(t.length>1&&c.measureText(t).width>cw-80)t=t.slice(0,-1);if(t!==String(title||""))t=t.trimEnd()+"…";
c.fillText(t,W/2,cy+ch-62);
cv.toBlob(b=>res(b),"image/png")};
im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(CATC(LGC()[i]?LGC()[i].c:LGC()[0].c))})}
function DLB(b,n){const u=URL.createObjectURL(b),l=document.createElement("a");l.href=u;l.download=n;document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),1500)}
function SH(c){const old=document.getElementById("sh");old&&old.remove();
const ti=c.title||"Percakapan",txt=ti+" - Bekki",et=encodeURIComponent(txt),bs=location.origin+location.pathname.replace(/index\.html$/,""),U=()=>bs+(ci?"s"+(ci+1)+"/":"")+"?"+encodeURIComponent(c.id),EU=()=>encodeURIComponent(U());
const bgs=["linear-gradient(135deg,#3a3a3f,#111114)","linear-gradient(135deg,#22c55e,#a7f3d0)","linear-gradient(135deg,#2563eb,#a855f7)"];
const slides=bgs.map((b,k)=>'<div class="sh-sl" style="background:'+b+'"><div class="sh-cd"><div class="sh-br"><span class="sh-lg">'+CATC(LGC()[k].c)+'</span><b>BEKKI</b></div><div class="sh-ct">'+ES(ti)+'</div></div></div>').join("");
let ci=0;
const shareImg=async fb=>{const bl=await mkImg(ci,ti),f=new File([bl],"bekki.png",{type:"image/png"}),d={files:[f],text:txt+"\n"+U()};
if(navigator.canShare&&navigator.canShare(d)){try{await navigator.share(d)}catch(e){}return}
let ok=!1;try{await navigator.clipboard.write([new ClipboardItem({"image/png":bl})]);ok=!0;TT("Gambar disalin, tempel di chat")}catch(e){}
if(!ok){DLB(bl,"bekki.png");TT("Gambar disimpan")}
fb&&window.open(fb,"_blank","noopener")};
const apps=[["Salin tautan",SHI.cp,"#e5e7eb","#111",()=>CPY(U()).then(()=>TT("Tautan disalin"))],
["WhatsApp",SHI.wa,"#25d366","#fff",()=>"https://wa.me/?text="+et+"%20"+EU()],
["Telegram",SHI.tg,"#2aabee","#fff",()=>"https://t.me/share/url?url="+EU()+"&text="+et],
["Facebook",SHI.fb,"#1877f2","#fff",()=>"https://www.facebook.com/sharer/sharer.php?u="+EU()],
["X",'<span style="font:700 20px/1 system-ui">X</span>',"#000","#fff",()=>"https://twitter.com/intent/tweet?text="+et+"&url="+EU()],
["Email",SHI.mail,"#ea4335","#fff",()=>"mailto:?subject="+et+"&body="+EU()],
["Pesan",SHI.sms,"#34c759","#fff",()=>"sms:?&body="+et+"%20"+EU()],
["Simpan gambar",SHI.dl,"#e5e7eb","#111",async()=>{DLB(await mkImg(ci,ti),"bekki.png");TT("Gambar disimpan")}]];
if(navigator.share)apps.push(["Lainnya",SHI.more,"#e5e7eb","#111",()=>shareImg("")]);
const w=document.createElement("div");w.className="dk-back";w.id="sh";
w.innerHTML='<div class="dk-sheet sh-sheet" role="dialog" aria-modal="true" aria-labelledby="shT"><div class="dk-grab" aria-hidden="true"><span></span></div><h3 id="shT" class="sh-h">Bagikan percakapan</h3><p class="sh-s">Siapa pun yang memiliki tautan dapat melihat pesan sebelumnya.</p><div class="sh-wrap"><button type="button" class="sh-nav l" aria-label="Sebelumnya">'+SHI.pv+'</button><div class="sh-car">'+slides+'</div><button type="button" class="sh-nav r" aria-label="Berikutnya">'+SHI.nx+'</button></div><div class="sh-dots"><i class="on"></i><i></i><i></i></div><div class="sh-line"></div><div class="sh-apps"></div></div>';
document.body.appendChild(w);
const sh=w.querySelector(".dk-sheet"),car=w.querySelector(".sh-car"),dots=w.querySelectorAll(".sh-dots i"),ap=w.querySelector(".sh-apps");
let gone=!1;const cl=()=>{if(gone)return;gone=!0;document.removeEventListener("keydown",kd,!0);w.classList.add("out");sh.style.transition="transform .22s ease";sh.style.transform="translateY(105%)";setTimeout(()=>w.remove(),230)};
function kd(e){e.key==="Escape"&&(e.stopPropagation(),cl())}document.addEventListener("keydown",kd,!0);
apps.forEach(a=>{const x=document.createElement("button");x.type="button";x.className="sh-app";x.innerHTML='<span class="sh-ic" style="background:'+a[2]+';color:'+a[3]+'">'+a[1]+'</span><span>'+a[0]+'</span>';
x.onclick=()=>{const r=typeof a[4]==="function"?a[4]():a[4];typeof r==="string"&&(/^https?:/.test(r)?window.open(r,"_blank","noopener"):location.href=r);cl()};ap.appendChild(x)});
const slides0=bgs.length;
const go=i=>{i=Math.max(0,Math.min(slides0-1,i));car.scrollTo({left:i*(car.firstChild.offsetWidth+12),behavior:"smooth"})};
w.querySelector(".sh-nav.l").onclick=()=>go(ci-1);w.querySelector(".sh-nav.r").onclick=()=>go(ci+1);
dots.forEach((d,k)=>{d.onclick=()=>go(k)});
let dn=!1,sx=0,sl=0,lx=0;
car.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse"||e.button)return;dn=!0;sx=lx=e.clientX;sl=car.scrollLeft;car.style.scrollSnapType="none";car.classList.add("drag");try{car.setPointerCapture(e.pointerId)}catch(x){}});
car.addEventListener("pointermove",e=>{dn&&(lx=e.clientX,car.scrollLeft=sl-(e.clientX-sx))});
const upd=()=>{if(!dn)return;dn=!1;car.classList.remove("drag");const sw=car.firstChild.offsetWidth+12,si=Math.round(sl/sw),d=lx-sx,i=d<-50?si+1:d>50?si-1:si;car.style.scrollSnapType="";go(i)};
car.addEventListener("pointerup",upd);car.addEventListener("pointercancel",upd);
document.addEventListener("keydown",function ka(e){if(!document.getElementById("sh")){document.removeEventListener("keydown",ka);return}if(e.key==="ArrowLeft")go(ci-1);else if(e.key==="ArrowRight")go(ci+1)});
car.addEventListener("scroll",()=>{const i=Math.round(car.scrollLeft/(car.firstChild.offsetWidth+12));ci=i,dots.forEach((d,k)=>d.classList.toggle("on",k===i))},{passive:!0});
w.onclick=e=>{e.target===w&&cl()};
let y0=0,drag=!1,can=!1;const mv=y=>{const d=Math.max(0,y-y0);sh.style.transition="none";sh.style.transform="translateY("+d+"px)";return d};
const fin=d=>{drag=!1;if(d>90)cl();else{sh.style.transition="transform .2s ease";sh.style.transform=""}};
sh.addEventListener("touchstart",e=>{y0=e.touches[0].clientY;can=sh.scrollTop<=0&&!e.target.closest(".sh-car,.sh-apps");drag=!1},{passive:!0});
sh.addEventListener("touchmove",e=>{const dy=e.touches[0].clientY-y0;if(can&&dy>0){drag=!0;e.cancelable&&e.preventDefault();mv(e.touches[0].clientY)}},{passive:!1});
sh.addEventListener("touchend",e=>{if(drag)fin(Math.max(0,e.changedTouches[0].clientY-y0))});
w.querySelector(".dk-grab").addEventListener("mousedown",e=>{e.preventDefault();y0=e.clientY;const m1=ev=>{drag=!0;mv(ev.clientY)},u1=ev=>{window.removeEventListener("mousemove",m1);window.removeEventListener("mouseup",u1);fin(Math.max(0,ev.clientY-y0))};window.addEventListener("mousemove",m1);window.addEventListener("mouseup",u1)})}
const BM=[{id:"1.10",n:"Bekki 1.10",off:!0,c:["#d9d2fe","#c7bcff","#b3a4ff","#9c8bfb","#8368f3","#6446da","#3a1fa2"]},{id:"1.5",n:"Bekki 1.5",off:!0,c:["#bdf6d6","#a5f0c5","#8de9b6","#70de9f","#45cc7d","#26ae5c","#0a6b35"]},{id:"1.1",n:"Bekki 1.1",c:["#a9e2ff","#9cdcff","#8ed6fe","#7fcbff","#5bb4f6","#2f8cdc","#0c3c86"]}];
const BO=["#ade4ff","#9fdcff","#90d6ff","#80cbff","#5eb4f7","#2f8add","#0d3b87"];
function CATC(c){let x=CATS;BO.forEach((o,i)=>{x=x.split(o).join(c[i])});return x}
function CATT(c){return CATC(c).replace('viewBox="190 190 700 700"','viewBox="229 268 622 544"').replace('<rect x="190" y="190" width="700" height="700" fill="#000"/>',"")}
const MB=document.getElementById("modelBtn");let MS=null;try{MS=localStorage.getItem("bekki_model")}catch(e){}if(!BM.some(m=>m.id===MS&&!m.off))MS="1.1";
const MCH='<svg class="mdl-ch" viewBox="0 0 24 24"><path d="m6 15 6-6 6 6"/></svg>';
function MR(){const m=BM.find(x=>x.id===MS);MB.innerHTML='<span class="mdl-lg">'+CATT(m.c)+'</span>'+MCH;MB.setAttribute("aria-label","Model: "+m.n);MB.title=m.n}
let MP=null;function MCL(){MP&&(MP.remove(),MP=null,MB.setAttribute("aria-expanded","false"))}
function MO(){const p=document.createElement("div");p.className="mdl-pop";p.setAttribute("role","listbox");
BM.forEach(m=>{const b2=document.createElement("button");b2.type="button";b2.className="mdl-it"+(m.off?" off":"");m.off&&(b2.disabled=!0,b2.setAttribute("aria-disabled","true"));b2.setAttribute("role","option");b2.setAttribute("aria-selected",String(m.id===MS));
b2.innerHTML='<span class="mdl-lg">'+CATT(m.c)+'</span><span class="mdl-nm">'+m.n+(m.off?" - not available":"")+'</span>'+(m.id===MS?'<svg class="mdl-ck" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>':"");
b2.onclick=()=>{MS=m.id;try{localStorage.setItem("bekki_model",MS)}catch(e){}MR();MCL()};p.appendChild(b2)});
document.body.appendChild(p);MP=p;MB.setAttribute("aria-expanded","true");
const r=MB.getBoundingClientRect();p.style.bottom=innerHeight-r.top+8+"px";p.style.left=Math.max(8,Math.min(r.left,innerWidth-p.offsetWidth-8))+"px"}
MB.onclick=e=>{e.stopPropagation();MP?MCL():MO()};
document.addEventListener("click",e=>{MP&&!MP.contains(e.target)&&MCL()});
document.addEventListener("keydown",e=>{e.key==="Escape"&&MP&&MCL()});
addEventListener("resize",MCL);
MR();
function Y(t){const e=u("div","msg bot");e.appendChild(u("div","avatar",X));const n=u("div","bubble");return n.innerHTML=t,e.appendChild(n),k.appendChild(e),{row:e,bubble:n}}const ee=["What are the advantages of using Next.js?","Write code to demonstrate Dijkstra's algorithm","Help me write an essay about Silicon Valley","What is the weather in San Francisco?"];const SGL=[['<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',"Buatkan kode algoritma Dijkstra"],['<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',"Bantu saya menulis esai atau surat"],['<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',"Kabar terbaru dunia AI"],['<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"/>',"Jelaskan hal rumit dengan sederhana"]];const HOME_PAL=["#aae3ff","#8cd8f2","#78ddbf","#5ed88f","#7a8cf0","#6446da","#3a1fa2"];function GWK(){const h=new Date().getHours();return h>=4&&h<11?"pagi":h>=11&&h<15?"siang":h>=15&&h<18?"sore":"malam"}function GTX(){const n=String(window.bekkiName||"").trim();return"Selamat "+GWK()+(n?", "+n:"")+"."}window.bekkiGreet=()=>{const g=document.getElementById("greetA");g&&(g.textContent=GTX())};function te(){k.innerHTML="";const t=u("div","empty");const pj=window.bekkiPrjName&&window.bekkiPrjName();if(pj){const pe=u("div","hm-prj");pe.textContent=pj;t.appendChild(pe)}const lg=u("div","hm-logo");lg.innerHTML=CATT(HOME_PAL);t.appendChild(lg);const gt=u("div","greet-t");gt.id="greetT";const ga=u("span","greet-a",GTX());ga.id="greetA";const gb=u("span","greet-b","Ada yang bisa dibantu?");gt.append(ga," ",gb);t.appendChild(gt);const sg=u("div","sugs");SGL.forEach((x,i)=>{const b=u("button","sug");b.type="button";b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+x[0]+"</svg><span></span>";b.lastChild.textContent=x[1];b.style.animationDelay=.5+i*.07+"s";b.onclick=()=>O(x[1]);sg.appendChild(b)});t.appendChild(sg);k.appendChild(t)}let HM=null;function HMS(home){const M=document.querySelector(".main"),W=document.querySelector(".composer-wrap");if(!M||!W)return;if(HM===home)return;const first=HM===null;let y0=0;if(!first)y0=W.getBoundingClientRect().top;HM=home;M.classList.toggle("home",home);if(first)return;const y1=W.getBoundingClientRect().top,d=y0-y1;if(Math.abs(d)<4||!W.animate)return;W.animate([{transform:"translateY("+d+"px)"},{transform:"translateY(0)"}],{duration:480,easing:"cubic-bezier(.22,1,.36,1)"})}
function C(){PIN=null;k.style.paddingBottom="";const t=T();HMS(!t||!t.msgs.length);if(!t||!t.msgs.length){te();return}k.innerHTML="",t.msgs.forEach(e=>e.role==="user"?U(e.content,e.att):AB(Y(NB(e)).row,e)),y()}function ne(t){let e=String(t).replace(/\s+/g," ").trim();const n=e.search(/[.!?]\s/);n>8&&(e=e.slice(0,n+1));const a=/^(tolong|bisa|bisakah|boleh|coba|bantu|bantuin|bantulah|please|can you|could you|help me|hai|halo|hi|hello|hey)[,!\s]+/i;for(let i=0;i<3&&a.test(e)&&e.replace(a,"").length>3;i++)e=e.replace(a,"");if(e=e.replace(/[?!.,;:\s]+$/,""),e||(e=String(t).trim()),e.length>42){e=e.slice(0,42);const i=e.lastIndexOf(" ");e=e.slice(0,i>20?i:42).replace(/[,;:\s]+$/,"")+"\u2026"}return e.charAt(0).toUpperCase()+e.slice(1)}const g=r("title");const TB=u("button","ttl-mb",'<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>');TB.type="button";TB.setAttribute("aria-label","Menu obrolan");TB.setAttribute("aria-haspopup","menu");g.after(TB);
const MI={pin:'<svg viewBox="0 0 24 24"><path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1z"/></svg>',ed:'<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',sh:'<svg viewBox="0 0 24 24"><path d="M12 15V3M7 8l5-5 5 5M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>',dl:'<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/></svg>'};
let TMN=null;
function TCL(){TMN&&(TMN.remove(),TMN=null,TB.setAttribute("aria-expanded","false"))}
function TT(x){const o=document.querySelector(".tt-toast");o&&o.remove();const e=document.createElement("div");e.className="tt-toast";e.textContent=x;document.body.appendChild(e);setTimeout(()=>e.remove(),2200)}
function TO(){if(TMN){TCL();return}const c=T()||{},em=!c.id||!c.msgs||!c.msgs.length;
const d=document.createElement("div");d.className="tt-menu";d.setAttribute("role","menu");
const it=(ic,lb,fn,cls)=>{const x=document.createElement("button");x.type="button";x.className="tt-item"+(cls?" "+cls:"");x.setAttribute("role","menuitem");x.innerHTML=ic+"<span>"+lb+"</span>";em?(x.disabled=!0):x.onclick=()=>{TCL();fn()};d.appendChild(x)};
it(MI.pin,c.pin?"Lepas sematan":"Sematkan",()=>{c.pin=!c.pin;b();m();TT(c.pin?"Obrolan disematkan":"Sematan dilepas")});
it(MI.ed,"Ganti nama",()=>{g.dataset.edit||g.onclick()});
it(MI.sh,"Bagikan sesi",()=>{c.shared=!0;b();SH(c)});
const sp=document.createElement("div");sp.className="tt-sep";d.appendChild(sp);
it(MI.dl,"Hapus",()=>le(c.id),"del");
document.body.appendChild(d);TMN=d;TB.setAttribute("aria-expanded","true");
const r0=TB.getBoundingClientRect(),w0=d.offsetWidth;d.style.top=r0.bottom+8+"px";d.style.left=Math.max(8,Math.min(innerWidth-w0-8,r0.left+r0.width/2-w0/2))+"px"}
TB.onclick=e=>{e.stopPropagation();TO()};
document.addEventListener("click",e=>{TMN&&!TMN.contains(e.target)&&TCL()});
document.addEventListener("keydown",e=>{e.key==="Escape"&&TMN&&TCL()});
let TYI=0;function TYP(n){clearInterval(TYI);const a=Array.from(n);if(a.length>120)return;let i=0;g.textContent="";g.classList.add("typing");g.setAttribute("aria-label",n);TYI=setInterval(()=>{const c=document.createElement("span");c.className="tc";c.textContent=a[i++];g.appendChild(c);i>=a.length&&(clearInterval(TYI),setTimeout(()=>{g.classList.contains("typing")&&(g.textContent=n,g.classList.remove("typing"))},140))},28)}
let B=null,LE=!0;function q(){const t=T(),e=!!(t&&t.msgs.length),n=e?(window.bekkiPrjOf&&t.pid&&window.bekkiPrjOf(t.pid)?window.bekkiPrjOf(t.pid)+" / ":"")+t.title:"New chat";AP&&AP.cid!==(t&&t.id)&&APC();B!==n&&(clearInterval(TYI),g.classList.remove("typing")),g.classList.toggle("muted",!e),TCL(),g.classList.contains("typing")&&B===n||(g.textContent=n),g.title=e?"Ganti judul":"",document.title=e?n+" \xB7 bekki":"bekki",B!==n&&(g.classList.remove("baru"),g.offsetWidth,e&&!LE&&t.msgs.length<=2&&TYP(n),B=n),LE=e}g.onclick=()=>{const t=T();if(!t||!t.msgs.length||g.dataset.edit)return;g.dataset.edit="1";const e=u("input","ttl-input");e.value=t.title,e.maxLength=80,e.setAttribute("aria-label","Ganti judul obrolan"),g.replaceWith(e),e.focus(),e.select();let n=!1;const a=i=>{if(n)return;n=!0;const s=e.value.trim();i&&s&&(t.title=s.slice(0,80),b()),e.replaceWith(g),delete g.dataset.edit,B=null,q(),m()};e.onkeydown=i=>{i.key==="Enter"&&(i.preventDefault(),a(!0)),i.key==="Escape"&&(i.stopPropagation(),a(!1))},e.onblur=()=>a(!0)};window.bekkiChats=()=>f;window.bekkiSave=()=>b();window.bekkiRender=()=>m();window.bekkiConfirm=(a,b2,c2,d2)=>V(a,b2,c2,d2);window.bekkiCur=()=>h;window.bekkiOpen=t=>ae(t);window.bekkiNew=()=>ie();window.bekkiDel=t=>le(t);window.bekkiShare=t=>{const c=f.find(x=>x.id===t);c&&(c.shared=!0,b(),SH(c))};let SQ="";window.bekkiSetQ=t=>{SQ=String(t||"").trim().toLowerCase();m()};function m(){A.innerHTML="";const t=new Date,e=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),n=f.filter(i=>i.msgs.length&&!i.pid&&!i.arc&&(!SQ||String(i.title||"").toLowerCase().includes(SQ)||i.msgs.some(x=>String(x&&x.content||"").toLowerCase().includes(SQ)))).sort((i,s)=>(!!s.pin-!!i.pin)||(s.u||0)-(i.u||0));let a="";n.forEach(i=>{const s=i.u||0,l=i.pin?"Disematkan":s>=e?"Hari ini":s>=e-864e5?"Kemarin":s>=e-6*864e5?"7 hari terakhir":"Lebih lama";l!==a&&(A.appendChild(u("div","hist-label",l)),a=l);const o=u("div","hist-row"),c=u("button","hist-item"+(i.id===h?" active":""));c.textContent=i.title,c.onclick=()=>ae(i.id);const d=u("button","hist-del hist-more",'<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg>');d.setAttribute("aria-label","Menu obrolan"),d.setAttribute("aria-haspopup","menu"),d.onclick=ue=>{ue.stopPropagation(),window.bekkiChatMenu&&window.bekkiChatMenu(d,i.id)},o.append(c,d);if(i.pin){const pi=u("span","hist-pin",'<svg viewBox="0 0 24 24"><path d="M12 16v5M8 3h8l-1.5 6.5L18 13H6l3.5-3.5z"/></svg>');o.appendChild(pi)}A.appendChild(o)}),n.length||A.appendChild(u("div","hist-label",SQ?"Tidak ditemukan":"Belum ada obrolan")),r("delAll").disabled=!f.some(i=>i.msgs.length),window.bekkiPrjR&&window.bekkiPrjR(),q()}function I(){J()&&E.classList.add("closed")}function ae(t){h=t;const _c=f.find(x=>x.id===t);window.bekkiPid=_c&&_c.pid||null,b(),m(),C(),I()}function ie(){h=null,window.bekkiPid=null,b(),m(),C(),I(),D||p.focus()}function le(t){V("Delete this chat?","This action cannot be undone.","Delete",()=>{f=f.filter(e=>e.id!==t),h===t&&(h=null),b(),m(),C()})}function se(){V("Delete all chats?","This action cannot be undone. This will permanently delete all your chats from this device.","Delete All",()=>{f=[],h=null,b(),m(),C(),I()})}const w=r("dlg");let N=null,S=null;function V(t,e,n,a){r("dlgT").textContent=t,r("dlgD").textContent=e,r("dlgYes").textContent=n,N=a,S=document.activeElement,w.classList.remove("hide"),r("dlgNo").focus()}function x(){w.classList.add("hide"),N=null,S&&S.focus&&S.focus()}r("dlgNo").onclick=x,r("dlgYes").onclick=()=>{const t=N;x(),t&&t()},w.addEventListener("click",t=>{t.target===w&&x()}),addEventListener("keydown",t=>{if(!w.classList.contains("hide")&&(t.key==="Escape"&&x(),t.key==="Tab")){const e=[r("dlgNo"),r("dlgYes")],n=e.indexOf(document.activeElement);t.preventDefault(),e[(n+(t.shiftKey?-1:1)+2)%2].focus()}});function oe(t){const e=String(t&&t.message||"");return t&&t.name==="AbortError"?{teks:"Jawabannya kelamaan datang. Sepertinya sinyal Anda lemah atau Bekki lagi sibuk. Coba kirim lagi ya."}:!navigator.onLine||/failed to fetch|networkerror|load failed|network request failed/i.test(e)?{teks:"Sepertinya ada gangguan dengan sinyal Anda. Cek koneksi internet, lalu kirim lagi ya."}:t&&t.status===429&&/batas pesan/i.test(e)?{teks:e}:/ramai|kebanjiran|rate limit|batas penggunaan|sibuk|overloaded/i.test(e)?{teks:"Bekki lagi kebanjiran pesan nih. Tunggu beberapa detik, lalu coba kirim lagi ya."}:/masuk dulu/i.test(e)?{teks:"Chat ini sedang dibatasi untuk pengguna yang sudah masuk. Hubungi pengelola situs ya."}:/belum diatur|secret|api key|x-api-key|authentication/i.test(e)?{teks:"Bekki belum siap dipakai karena pengaturan servernya belum lengkap. Hubungi pengelola situs ya.",detail:e}:{teks:"Maaf, Bekki lagi ada kendala. Coba lagi sebentar ya.",detail:e}}const TK="\n\n(Format balasan: mulai dengan tiga bagian singkat memakai penanda persis ini, masing-masing 1-3 kalimat: <thought>pertimbangan Anda</thought><analysis>analisis pertanyaan</analysis><reasoning>penalaran menuju jawaban</reasoning> lalu langsung tulis jawaban akhir untuk pengguna di luar penanda. Jika pengguna meminta kode HTML (halaman, dashboard, formulir, dan sebagainya): jangan mengisi tautan apa pun, semua atribut href pada tautan <a> harus dikosongkan dengan nilai # supaya pengguna yang mengisinya sendiri, dan jangan menambahkan menu login, daftar, atau tombol akun kecuali diminta. Jangan menyebut format ini.)",TKS=[["thought","Thought","Pertimbangan AI"],["analysis","Analysis","Analisis pertanyaan"],["reasoning","Reasoning","Penalaran untuk mencari jawaban"]];function PK(t){let e=String(t),n={},a=!1;return TKS.forEach(i=>{const s=e.match(new RegExp("<"+i[0]+">([\\s\\S]*?)</"+i[0]+">","i"));s&&(n[i[0]]=s[1].trim(),a=!0,e=e.replace(s[0],""))}),a?(e=e.replace(/<\/?(thought|analysis|reasoning)>/gi,"").trim(),{c:e||String(t),t:n}):{c:String(t),t:null}}function PN(t){if(!t)return"";let e="";return TKS.forEach(n=>{t[n[0]]&&(e+='<details class="tk"><summary><svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg><b>'+n[1]+"</b><span>"+n[2]+'</span></summary><div class="tk-b">'+M(t[n[0]])+"</div></details>")}),e?'<details class="tko"><summary><svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg><b>Thinking</b></summary><div class="tks">'+e+"</div></details>":""}function SB(t,e){return t.innerHTML=PN(e.t)+'<div class="ans"></div>',t.querySelector(".ans")}function NB(t){return PN(t.thinking)+'<div class="ans">'+H(t.content)+"</div>"}async function re(t){const e=new AbortController,n=setTimeout(()=>e.abort(),45e3);try{const a=await fetch(G+"/functions/v1/chat",{method:"POST",signal:e.signal,headers:{"Content-Type":"application/json",apikey:W,Authorization:"Bearer "+await(window.bekkiToken?window.bekkiToken():Promise.resolve(W))},body:JSON.stringify({q:(t[t.length-1]||{}).content,...(CUR&&CUR.img?{image:CUR.img}:{}),messages:t.map((s,i)=>({role:s.role,content:i===t.length-1&&s.role==="user"?(window.bekkiPrjCtx?window.bekkiPrjCtx():"")+s.content+(CUR&&CUR.files.length?CUR.files.map(f=>"\n\n[Isi file: "+f.name+"]\n"+f.text).join(""):"")+TK:s.content}))})}),i=await a.json().catch(()=>({}));if(!a.ok||!i.reply){const s=new Error(i.error||"Kode "+a.status);throw s.status=a.status,s}LSRC=SN(i.sources||i.citations||i.search_results);return i.reply}finally{clearTimeout(n)}}function ce(t,e,n){let a=0;const i=Math.max(2,Math.ceil(e.length/150)),s=setInterval(()=>{a=Math.min(e.length,a+i);let l=H(e.slice(0,a));if(a<e.length){const o='<span class="caret"></span>',c=Math.max(l.lastIndexOf("</p>"),l.lastIndexOf("</li>"));l=c>-1?l.slice(0,c)+o+l.slice(c):l+o}t.innerHTML=l,t.querySelectorAll(".art.live .art-code").forEach(q=>q.scrollTop=q.scrollHeight),PS(),a>=e.length&&(clearInterval(s),n())},22)}function L(){P.disabled=v||!p.value.trim()&&!ATT.length}function z(){p.style.height="auto",p.style.height=Math.min(p.scrollHeight,240)+"px"}async function O(t){t=(t||"").trim();if(!t&&ATT.length)t=ATT.some(a=>a.k==="img")?"Apa isi gambar ini?":"Tolong rangkum isi file ini.";if(!t||v)return;const at=ATT.slice();at.forEach(a=>a.k==="img"&&a.data&&FULLMAP.set(a.thumb,a.data));ATT=[];ATR();let e=T();e||(e={id:NID(),title:ne(t),u:Date.now(),msgs:[]},window.bekkiPid&&(e.pid=window.bekkiPid),f.push(e),h=e.id),e.msgs.push(at.length?{role:"user",content:t,att:at.map(a=>({k:a.k,name:a.name,thumb:a.thumb}))}:{role:"user",content:t}),e.u=Date.now(),b();const n=k.querySelector(".empty");n&&n.remove(),HMS(!1),U(t,at),m(),p.value="",z(),v=!0,L(),yp();const a=Y('<span class="shimmer-text">Thinking...</span>');PS();const i=setTimeout(()=>{a.bubble.innerHTML='<span class="shimmer-text">Masih diproses, sebentar ya...</span>'},9e3);let s=null,l=null;try{CUR={img:(at.find(a=>a.k==="img")||{}).data,files:at.filter(a=>a.k==="txt")};s=await re(e.msgs.slice(-20))}catch(o){l=o}CUR=null;if(clearTimeout(i),l){const o=oe(l);if(a.bubble.classList.add("err"),a.bubble.textContent=o.teks,o.detail){const c=u("div","note");c.textContent="Detail teknis: "+o.detail,a.bubble.appendChild(c)}v=!1,L(),PS();return}const pr=PK(s);const am={role:"assistant",content:pr.c,thinking:pr.t,t:Date.now()};LSRC.length&&(am.src=LSRC);LSRC=[];e.msgs.push(am),e.u=Date.now(),b(),m(),ce(SB(a.bubble,pr),pr.c,()=>{v=!1,L(),AB(a.row,am)})}let ATT=[],CUR=null;const FULLMAP=new Map();
const ATI={plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',cam:'<svg viewBox="0 0 24 24"><path d="M14.5 4h-5L8 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/></svg>',img:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.6"/><path d="m21 15-4.5-4.5L6 21"/></svg>',clip:'<svg viewBox="0 0 24 24"><path d="m21 11-8.6 8.6a5 5 0 0 1-7-7L14 4a3.3 3.3 0 0 1 4.7 4.7L10 17.4a1.7 1.7 0 0 1-2.4-2.4L15 7.6"/></svg>',up:'<svg viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></svg>',undo:'<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',file:'<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>'};
const TXT_EXT=/\.(txt|md|markdown|csv|tsv|json|jsonl|js|mjs|ts|tsx|jsx|html|htm|css|scss|xml|yml|yaml|toml|ini|log|sql|sh|py|java|c|h|cpp|cs|go|rs|rb|php|kt|swift|r|tex|srt|env)$/i;
function LBO(src,from){const old=document.getElementById("lb");old&&old.remove();const w=u("div","lb");w.id="lb";w.setAttribute("role","dialog");w.setAttribute("aria-modal","true");w.setAttribute("aria-label","Pratinjau gambar");const im=document.createElement("img");im.alt="";im.src=FULLMAP.get(src)||src;w.appendChild(im);const x=u("button","lb-x",APX.shr);x.type="button";x.setAttribute("aria-label","Tutup");x.title="Tutup";w.appendChild(x);document.body.appendChild(w);
const ease="cubic-bezier(.2,.8,.2,1)",flip=(to)=>{if(!from||!document.contains(from)||!im.animate)return null;const a=from.getBoundingClientRect(),b=im.getBoundingClientRect();if(!b.width||!a.width)return null;const t="translate("+(a.left+a.width/2-(b.left+b.width/2))+"px,"+(a.top+a.height/2-(b.top+b.height/2))+"px) scale("+a.width/b.width+")";return im.animate(to?[{transform:"none"},{transform:t}]:[{transform:t},{transform:"none"}],{duration:260,easing:ease,fill:"both"})};
w.animate&&w.animate([{opacity:0},{opacity:1}],{duration:200});im.complete?flip(!1):im.addEventListener("load",()=>flip(!1),{once:!0});
let gone=!1;const cl=()=>{if(gone)return;gone=!0;document.removeEventListener("keydown",kd,!0);const f=flip(!0);if(f){w.animate&&w.animate([{opacity:1},{opacity:0}],{duration:260,fill:"both"});f.onfinish=()=>w.remove()}else if(w.animate){const o=w.animate([{opacity:1},{opacity:0}],{duration:150,fill:"both"});o.onfinish=()=>w.remove()}else w.remove()};
function kd(e){if(e.key==="Escape"){e.preventDefault();e.stopPropagation();cl()}}document.addEventListener("keydown",kd,!0);w.onclick=cl;x.focus({preventScroll:!0})}
["contextmenu","dragstart"].forEach(n=>document.addEventListener(n,e=>{e.target.closest&&e.target.closest(".att-chip img,.att-row img,.lb")&&e.preventDefault()},!0));
document.addEventListener("click",e=>{const i=e.target.closest&&e.target.closest(".att-chip.is-img img,.att-row img");if(!i)return;e.preventDefault();LBO(i.currentSrc||i.src,i)});
function ATS(m){const o=document.querySelector(".at-toast");o&&o.remove();const d=u("div","at-toast");d.textContent=m;document.body.appendChild(d);setTimeout(()=>{d.classList.add("out");setTimeout(()=>d.remove(),250)},2600)}
function ATR(){let t=r("attTray");if(!t){t=u("div","att-tray");t.id="attTray";p.parentNode.insertBefore(t,p)}t.innerHTML="";t.hidden=!ATT.length;ATT.forEach((a,i)=>{const c=u("div","att-chip "+(a.k==="img"?"is-img":"is-file"));if(a.k==="img"){const im=document.createElement("img");im.src=a.thumb;im.alt=a.name;c.appendChild(im)}else{c.innerHTML=ATI.file+"<b></b>";c.lastChild.textContent=a.name}const x=u("button","att-x",ATI.x);x.type="button";x.setAttribute("aria-label","Hapus lampiran");x.title="Hapus lampiran";x.onclick=()=>{ATT.splice(i,1);ATR();L();p.focus()};c.appendChild(x);t.appendChild(c)});L()}
function ATIMG(f){return new Promise((ok,no)=>{const url=URL.createObjectURL(f),im=new Image;im.onload=()=>{try{const mk=(mx,q)=>{const sc=Math.min(1,mx/Math.max(im.naturalWidth,im.naturalHeight)),cv=document.createElement("canvas");cv.width=Math.max(1,Math.round(im.naturalWidth*sc));cv.height=Math.max(1,Math.round(im.naturalHeight*sc));const c=cv.getContext("2d");c.fillStyle="#fff";c.fillRect(0,0,cv.width,cv.height);c.drawImage(im,0,0,cv.width,cv.height);return cv.toDataURL("image/jpeg",q)};let d=mk(1280,.82);if(d.length>28e5)d=mk(1024,.7);if(d.length>28e5)d=mk(800,.6);URL.revokeObjectURL(url);d.length>29e5?no(new Error("big")):ok({data:d,thumb:mk(360,.7)})}catch(e){URL.revokeObjectURL(url);no(e)}};im.onerror=()=>{URL.revokeObjectURL(url);no(new Error("bad"))};im.src=url})}
async function ATADD(list){list=Array.from(list||[]);for(const f of list){if(ATT.length>=3){ATS("Maksimal 3 lampiran");break}try{if(/^image\//i.test(f.type)){const r=await ATIMG(f);FULLMAP.set(r.thumb,r.data);ATT=ATT.filter(a=>a.k!=="img");ATT.push({k:"img",name:f.name||"gambar.jpg",data:r.data,thumb:r.thumb})}else if(/^text\//i.test(f.type)||TXT_EXT.test(f.name||"")||/json|xml|javascript/i.test(f.type)){if(f.size>3e5){ATS("File terlalu besar (maks 300 KB)");continue}let tx=await f.text();if(/\u0000/.test(tx.slice(0,2000))){ATS("Format file belum didukung");continue}let tr=!1;if(tx.length>8e3){tx=tx.slice(0,8e3);tr=!0}ATT.push({k:"txt",name:f.name,text:tx+(tr?"\n[...dipotong, hanya 8000 karakter pertama]":"")});tr&&ATS("File dipotong: 8000 karakter pertama dikirim")}else ATS("Format belum didukung. Pakai gambar atau file teks.")}catch(e){ATS("Gagal membaca "+(f.name||"file"))}}ATR();p.focus()}
function ATPICK(acc,cap){const i=document.createElement("input");i.type="file";i.accept=acc;if(cap)i.setAttribute("capture","environment");i.multiple=!cap;i.style.cssText="position:fixed;left:-9999px;opacity:0";document.body.appendChild(i);i.onchange=()=>{ATADD(i.files);i.remove()};i.addEventListener("cancel",()=>i.remove());i.click()}
const ATACC="image/*,text/*,.txt,.md,.csv,.tsv,.json,.js,.ts,.tsx,.jsx,.html,.css,.xml,.yml,.yaml,.log,.sql,.sh,.py,.java,.c,.cpp,.cs,.go,.rs,.rb,.php,.kt,.swift";
function ATRESET(){p.value="";ATT=[];ATR();z();L();p.focus()}
function ATMENU(btn){const old=document.getElementById("plMenu");if(old){old.remove();return}const m=u("div","pl-menu");m.id="plMenu";m.setAttribute("role","menu");m.innerHTML='<button type="button" role="menuitem" data-a="up">'+ATI.up+'<span>Upload files</span></button><div class="pl-sep"></div><button type="button" role="menuitem" data-a="rs">'+ATI.undo+'<span>Reset input</span></button>';document.body.appendChild(m);const r0=btn.getBoundingClientRect();m.style.left=Math.max(8,Math.min(r0.left,innerWidth-m.offsetWidth-8))+"px";m.style.bottom=(innerHeight-r0.top+8)+"px";
const cl=()=>{m.remove();document.removeEventListener("pointerdown",od,!0);document.removeEventListener("keydown",ok)},od=e=>{m.contains(e.target)||btn.contains(e.target)||cl()},ok=e=>{e.key==="Escape"&&cl()};document.addEventListener("pointerdown",od,!0);document.addEventListener("keydown",ok);
m.onclick=e=>{const b=e.target.closest("button");if(!b)return;cl();b.dataset.a==="up"?ATPICK(ATACC):ATRESET()}}
function ATSHEET(){const old=document.getElementById("plSheet");old&&old.remove();const w=u("div","dk-back");w.id="plSheet";w.innerHTML='<div class="dk-sheet" role="dialog" aria-modal="true" aria-labelledby="plT"><div class="dk-grab" aria-hidden="true"><span></span></div><div class="pl-h"><h3 id="plT">Photos</h3></div><div class="pl-tiles"><button type="button" data-a="cam" aria-label="Kamera">'+ATI.cam+'</button><button type="button" data-a="gal" aria-label="Galeri">'+ATI.img+'</button></div><button type="button" class="pl-row" data-a="up">'+ATI.clip+'<span>Upload files</span></button></div>';document.body.appendChild(w);const sh=w.querySelector(".dk-sheet");
let gone=!1;const cl=()=>{if(gone)return;gone=!0;document.removeEventListener("keydown",kd);w.classList.add("out");sh.style.transition="transform .22s ease";sh.style.transform="translateY(105%)";setTimeout(()=>w.remove(),230)};function kd(e){e.key==="Escape"&&cl()}document.addEventListener("keydown",kd);w.onclick=e=>{if(e.target===w){cl();return}const b=e.target.closest("button[data-a]");if(!b)return;const a=b.dataset.a;a==="cam"?ATPICK("image/*",!0):a==="gal"?ATPICK("image/*"):ATPICK(ATACC);cl()};
let y0=0,drag=!1,can=!1;const mv=y=>{sh.style.transition="none";sh.style.transform="translateY("+Math.max(0,y-y0)+"px)"},fin=d=>{drag=!1;if(d>90)cl();else{sh.style.transition="transform .2s ease";sh.style.transform=""}};
sh.addEventListener("touchstart",e=>{y0=e.touches[0].clientY;can=sh.scrollTop<=0;drag=!1},{passive:!0});sh.addEventListener("touchmove",e=>{const dy=e.touches[0].clientY-y0;if(can&&dy>0){drag=!0;e.cancelable&&e.preventDefault();mv(e.touches[0].clientY)}},{passive:!1});sh.addEventListener("touchend",e=>{drag&&fin(Math.max(0,e.changedTouches[0].clientY-y0))})}
(()=>{const b=r("plusBtn");if(!b)return;b.onclick=e=>{e.stopPropagation();matchMedia("(hover:hover) and (pointer:fine)").matches&&innerWidth>768?ATMENU(b):ATSHEET()};
p.addEventListener("paste",e=>{const fs=Array.from(e.clipboardData&&e.clipboardData.files||[]).filter(f=>/^image\//i.test(f.type));if(fs.length){e.preventDefault();ATADD(fs)}});
{const ov=document.createElement("div");ov.id="dropOv";ov.setAttribute("aria-hidden","true");ov.innerHTML='<div class="dr-box"><svg viewBox="0 0 24 24"><path d="M12 16V4M6 10l6-6 6 6M5 20h14"/></svg><span>Drop your files here...</span></div>';document.body.appendChild(ov);let dc=0;const hasF=e=>e.dataTransfer&&Array.from(e.dataTransfer.types||[]).includes("Files");const show=b=>{ov.classList.toggle("on",b);document.documentElement.classList.toggle("dropping",b)};
window.addEventListener("dragenter",e=>{if(!hasF(e))return;e.preventDefault();dc++;show(!0)},!0);
window.addEventListener("dragover",e=>{if(!hasF(e))return;e.preventDefault();e.dataTransfer.dropEffect="copy"},!0);
window.addEventListener("dragleave",e=>{if(!hasF(e))return;dc=Math.max(0,dc-1);if(!dc||e.relatedTarget===null)show(!1),dc=0},!0);
window.addEventListener("drop",e=>{if(!hasF(e))return;e.preventDefault();e.stopPropagation();dc=0;show(!1);ATADD(e.dataTransfer.files)},!0);
window.addEventListener("blur",()=>{dc=0;show(!1)})}})();
p.addEventListener("input",()=>{z(),L()}),p.addEventListener("keydown",t=>{t.key==="Enter"&&!t.shiftKey&&!t.isComposing&&!D&&(t.preventDefault(),O(p.value))}),P.onclick=()=>O(p.value),r("newChat").onclick=ie,r("delAll").onclick=se;const F=t=>{if(t&&t.stopPropagation(),TMN){TCL();return}E.classList.toggle("closed")};(()=>{const b=r("toggle"),sv=b.firstElementChild;if(!sv)return;sv.classList.add("tg-ic");const lg=document.createElement("span");lg.className="tg-lg";lg.setAttribute("aria-hidden","true");lg.innerHTML=CATT(["#a9e2ff", "#8cd8f2", "#78ddbf", "#5ed88f", "#7a8cf0", "#6446da", "#3a1fa2"]);b.insertBefore(lg,sv);(()=>{const M=document.querySelector(".main");if(!M||!matchMedia("(hover:hover) and (pointer:fine)").matches)return;const v=document.createElement("div");v.className="vs";v.setAttribute("aria-hidden","true");v.innerHTML='<i class="vs-th"></i>';M.appendChild(v);const th=v.firstChild;document.body.classList.add("vs-on");
let tm=0,raf=0,dr=null,tH=0,mx=0;
const upd=()=>{raf=0;const m=M.getBoundingClientRect(),c=$.getBoundingClientRect(),H=$.clientHeight,S=$.scrollHeight;v.style.top=(c.top-m.top)+"px";const T=v.clientHeight;if(S<=H+1||T<=0){v.style.visibility="hidden";return}v.style.visibility="";tH=Math.max(44,Math.round(T*H/S));mx=Math.max(1,S-H);th.style.height=tH+"px";th.style.transform="translateY("+Math.round((T-tH)*Math.min(1,$.scrollTop/mx))+"px)"};
const sch=()=>{raf||(raf=requestAnimationFrame(upd))};
const show=()=>{v.classList.add("on");clearTimeout(tm);tm=setTimeout(()=>{dr||v.matches(":hover")||v.classList.remove("on")},900)};
$.addEventListener("scroll",()=>{sch();show()},{passive:!0});$.addEventListener("wheel",show,{passive:!0});
M.addEventListener("pointermove",e=>{M.getBoundingClientRect().right-e.clientX<28&&show()},{passive:!0});
v.addEventListener("pointerleave",()=>{dr||show()});
new ResizeObserver(sch).observe($);new ResizeObserver(sch).observe(M);new MutationObserver(sch).observe($,{childList:!0,subtree:!0,characterData:!0});addEventListener("resize",sch);
th.addEventListener("pointerdown",e=>{e.preventDefault();e.stopPropagation();th.setPointerCapture(e.pointerId);dr={y:e.clientY,s:$.scrollTop};v.classList.add("on","drag");const mv=ev=>{const T=v.clientHeight;$.scrollTop=dr.s+(ev.clientY-dr.y)*mx/Math.max(1,T-tH)},end=()=>{th.removeEventListener("pointermove",mv);th.removeEventListener("pointerup",end);th.removeEventListener("pointercancel",end);dr=null;v.classList.remove("drag");show()};th.addEventListener("pointermove",mv);th.addEventListener("pointerup",end);th.addEventListener("pointercancel",end)});
v.addEventListener("pointerdown",e=>{if(e.target===th)return;const r0=th.getBoundingClientRect();$.scrollBy({top:(e.clientY<r0.top?-1:1)*$.clientHeight*.9,behavior:"smooth"})});
sch()})();
(()=>{const h=r("hist");let ht;const sh=()=>{h.classList.add("scrolling");clearTimeout(ht);ht=setTimeout(()=>h.classList.remove("scrolling"),900)};h.addEventListener("scroll",sh,{passive:!0});h.addEventListener("wheel",sh,{passive:!0})})();r("newChat").title="New chat";r("delAll").title="Delete all";const up=()=>{const c=E.classList.contains("closed");b.title=c?"Buka sidebar":"Tutup sidebar";b.setAttribute("aria-label",b.title)};up();new MutationObserver(up).observe(E,{attributes:!0,attributeFilter:["class"]});const mq=matchMedia("(min-width:769px) and (hover:hover) and (pointer:fine)");document.addEventListener("pointermove",e=>{if(!mq.matches)return;const k=b.getBoundingClientRect(),dx=Math.max(k.left-e.clientX,0,e.clientX-k.right),dy=Math.max(k.top-e.clientY,0,e.clientY-k.bottom);b.classList.toggle("near",Math.hypot(dx,dy)<80)},{passive:!0});document.documentElement.addEventListener("mouseleave",()=>b.classList.remove("near"))})();r("toggle").onclick=F,r("toggle2").onclick=F,document.querySelector(".main").addEventListener("click",()=>{J()&&!E.classList.contains("closed")&&E.classList.add("closed")}),r("theme").onclick=()=>{const t=!document.documentElement.classList.contains("dark");document.documentElement.classList.toggle("dark",t);try{localStorage.setItem("bekki_tema",t?"dark":"light")}catch{}},Q(),m(),C(),L(),D||p.focus()})();
/* geser ke kanan membuka sidebar, geser ke kiri menutup (hp) */
(()=>{const E=document.getElementById("sidebar");if(!E)return;const mob=()=>matchMedia("(max-width:768px)").matches;
const SKIP='textarea,input,select,pre,table,.apanel,.dk-back,.dlg-back,.lb,#pkt,#srk,[role=dialog],.src-sheet,.pl-sheet,.pl-bd,.vs-th,.ttl-input';
const hs=n=>{for(;n&&n!==document.body;n=n.parentElement){if(n.scrollWidth>n.clientWidth+2){const o=getComputedStyle(n).overflowX;if(o==="auto"||o==="scroll")return!0}}return!1};
let x0=0,y0=0,t0=0,dx=0,st=0,op=!1;const W=()=>E.getBoundingClientRect().width||260;
document.addEventListener("touchstart",e=>{st=0;if(e.touches.length!==1||!mob())return;const tg=e.target;if(!tg.closest)return;if(tg.closest(SKIP)||hs(tg))return;if(document.querySelector(".dk-back,.dlg-back:not(.hide),.lb,#srk,.apanel"))return;const t=e.touches[0];x0=t.clientX;y0=t.clientY;t0=Date.now();dx=0;op=!E.classList.contains("closed");st=1},{passive:!0});
document.addEventListener("touchmove",e=>{if(!st)return;const t=e.touches[0],mx=t.clientX-x0,my=t.clientY-y0;if(st===1){if(Math.abs(mx)<10&&Math.abs(my)<10)return;if(Math.abs(mx)<Math.abs(my)*1.4||(op?mx>0:mx<0)){st=0;return}st=2;E.style.transition="none"}dx=mx;const w=W();E.style.marginLeft=(op?Math.max(-w,Math.min(0,mx)):Math.min(0,-w+Math.max(0,mx)))+"px"},{passive:!0});
const end=()=>{if(st!==2){st=0;return}st=0;const w=W(),v=Math.abs(dx)/Math.max(1,Date.now()-t0),go=Math.abs(dx)>w*.3||v>.5;E.style.transition="";if(op){go&&dx<0&&E.classList.add("closed")}else{go&&dx>0&&E.classList.remove("closed")}E.style.marginLeft=""};
document.addEventListener("touchend",end,{passive:!0});document.addEventListener("touchcancel",end,{passive:!0})})();

/* pencarian obrolan: jendela cari (ikon kaca pembesar di sidebar, atau Ctrl/Cmd+K) */
(()=>{const E=document.getElementById("sidebar"),hd=E&&E.querySelector(".sb-head"),tg=document.getElementById("toggle");if(!hd||!tg)return;
const bt=document.createElement("button");bt.className="icon-btn sb-sbtn";bt.id="sbSearch";bt.type="button";bt.title="Cari obrolan";bt.setAttribute("aria-label","Cari obrolan");
bt.innerHTML='<svg viewBox="0 0 24 24" style="font-size:16px"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';hd.insertBefore(bt,tg);
const IC={s:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',c:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',n:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',x:'<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>'};
let bk=null,inp=null,lst=null,pin=null,act=-1,items=[];
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
const hl=(txt,q)=>{const fr=document.createDocumentFragment();if(!q){fr.append(txt);return fr}const lo=txt.toLowerCase();let p=0,i;while((i=lo.indexOf(q,p))>=0){i>p&&fr.append(txt.slice(p,i));const m=el("mark",null,txt.slice(i,i+q.length));fr.append(m);p=i+q.length}p<txt.length&&fr.append(txt.slice(p));return fr};
const snip=(txt,q)=>{const t=String(txt).replace(/\s+/g," ").trim(),i=t.toLowerCase().indexOf(q);if(i<0)return"";const a=Math.max(0,i-28),b=Math.min(t.length,i+q.length+70);return(a>0?"…":"")+t.slice(a,b)+(b<t.length?"…":"")};
const dt=u=>{if(!u)return"";const d=new Date(u),n=new Date(),z=x=>new Date(x.getFullYear(),x.getMonth(),x.getDate()).getTime(),df=Math.round((z(n)-z(d))/864e5);return df<=0?"Hari ini":df===1?"Kemarin":d.toLocaleDateString("id-ID",{day:"numeric",month:"short"})};
const setAct=n=>{if(!items.length){act=-1;return}act=(n+items.length)%items.length;items.forEach((it,i)=>it.el.classList.toggle("on",i===act));const e=items[act].el;e.scrollIntoView&&e.scrollIntoView({block:"nearest"})};
const close=()=>{if(!bk)return;const b=bk;bk=null;b.classList.add("out");setTimeout(()=>b.remove(),160);document.removeEventListener("keydown",kd,!0)};
const pick=it=>{close();setTimeout(()=>it.run(),0)};
const render=()=>{const q=inp.value.trim().toLowerCase();lst.textContent="";pin.textContent="";items=[];const all=(window.bekkiChats?window.bekkiChats():[]).filter(c=>c.msgs&&c.msgs.length).sort((a,b)=>(b.u||0)-(a.u||0));
const add=(node,run,host)=>{(host||lst).appendChild(node);items.push({el:node,run});node.onclick=()=>pick({run});node.onmousemove=()=>{const i=items.findIndex(x=>x.el===node);i!==act&&setAct(i)}};
const row=(c,sn)=>{const r=el("button","srch-it");r.type="button";const bx=el("span","srch-tx"),t=el("span","srch-t");t.appendChild(hl(String(c.title||"Obrolan"),q));bx.appendChild(t);if(sn){const s=el("span","srch-sn");s.appendChild(hl(sn,q));bx.appendChild(s)}const d=el("span","srch-d",dt(c.u));r.append(bx,d);return r};
{const nw=el("button","srch-it srch-new");nw.type="button";const ic=el("span","srch-ic");ic.innerHTML=IC.n;nw.append(ic,el("span","srch-t","Obrolan baru"));add(nw,()=>window.bekkiNew&&window.bekkiNew(),pin)}if(!q){
if(all.length){lst.appendChild(el("div","srch-lb","Terbaru"));all.forEach(c=>add(row(c,""),()=>window.bekkiOpen(c.id)))}else lst.appendChild(el("div","srch-em","Belum ada obrolan"))}
else{const res=[];all.forEach(c=>{const tm=String(c.title||"").toLowerCase().includes(q);let sn="";if(!tm){const m=c.msgs.find(x=>x&&String(x.content||"").toLowerCase().includes(q));m&&(sn=snip(m.content,q))}else{const m=c.msgs.find(x=>x&&String(x.content||"").toLowerCase().includes(q));m&&(sn=snip(m.content,q))}if(tm||sn)res.push({c,sn,tm})});
res.sort((a,b)=>(b.tm-a.tm));if(res.length){lst.appendChild(el("div","srch-lb",res.length+" hasil"));res.forEach(r=>add(row(r.c,r.sn),()=>window.bekkiOpen(r.c.id)))}else{const em=el("div","srch-em");em.append("Tidak ada hasil untuk ");em.appendChild(el("b",null,"“"+inp.value.trim()+"”"));lst.appendChild(em)}}
setAct(items.length>1?1:0)};
const kd=e=>{if(!bk)return;if(e.key==="Escape"){e.preventDefault();e.stopPropagation();close()}else if(e.key==="ArrowDown"){e.preventDefault();setAct(act+1)}else if(e.key==="ArrowUp"){e.preventDefault();setAct(act-1)}else if(e.key==="Enter"&&items[act]){e.preventDefault();pick(items[act])}};
const open=()=>{if(bk)return;bk=el("div","srch-back");const pn=el("div","srch");pn.setAttribute("role","dialog");pn.setAttribute("aria-modal","true");pn.setAttribute("aria-label","Cari obrolan");
const hdr=el("div","srch-h");const si=el("span","srch-si");si.innerHTML=IC.s;inp=el("input");inp.type="text";inp.placeholder="Cari obrolan";inp.autocomplete="off";inp.spellcheck=!1;inp.setAttribute("autocapitalize","off");inp.setAttribute("enterkeyhint","search");inp.setAttribute("aria-label","Cari obrolan");
const cx=el("button","srch-x");cx.type="button";cx.setAttribute("aria-label","Tutup");cx.innerHTML=IC.x;cx.onclick=close;const bt2=el("button","srch-cancel","Batal");bt2.type="button";bt2.onclick=close;
hdr.append(si,inp,cx,bt2);pin=el("div","srch-pin");lst=el("div","srch-l");pn.append(hdr,pin,lst);bk.appendChild(pn);document.body.appendChild(bk);
bk.addEventListener("mousedown",e=>{e.target===bk&&close()});inp.addEventListener("input",render);document.addEventListener("keydown",kd,!0);render();setTimeout(()=>inp.focus(),30)};
bt.onclick=e=>{e.stopPropagation();open()};
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();bk?close():open()}})})();
/* menu Context di sidebar */
(()=>{const b=document.getElementById("ctxBtn"),sub=document.getElementById("ctxSub");if(!b||!sub)return;let T=null;
const set=o=>{sub.hidden=!o;b.setAttribute("aria-expanded",o?"true":"false");b.classList.toggle("open",o);try{localStorage.setItem("bekki_ctx",o?"1":"0")}catch{}};
let o0=!1;try{o0=localStorage.getItem("bekki_ctx")==="1"}catch{}set(o0);
b.onclick=()=>{if(sub.hidden){set(!0);sub.classList.remove("closing");sub.classList.add("opening");clearTimeout(window.__cx);window.__cx=setTimeout(()=>sub.classList.remove("opening"),420)}else{clearTimeout(window.__cx);sub.classList.remove("opening");sub.classList.add("closing");b.classList.remove("open");b.setAttribute("aria-expanded","false");try{localStorage.setItem("bekki_ctx","0")}catch{}window.__cx=setTimeout(()=>{sub.classList.remove("closing");sub.hidden=!0},200)}};
const toast=t=>{document.querySelectorAll(".at-toast.ctx-toast").forEach(e=>e.remove());clearTimeout(T);const e=document.createElement("div");e.className="at-toast ctx-toast";e.setAttribute("role","status");e.textContent=t;document.body.appendChild(e);T=setTimeout(()=>{e.style.transition="opacity .25s";e.style.opacity="0";setTimeout(()=>e.remove(),260)},2200)};
sub.addEventListener("click",e=>{const i=e.target.closest(".ctx-it");i&&toast(i.dataset.soon+" segera hadir")})})();
/* proyek + bagian Chats di sidebar */
(()=>{const KEY="bekki_proyek_v1",OK="bekki_chats_open2";const $=id=>document.getElementById(id);
const E=$("sidebar"),list=$("prjList"),tog=$("chTog"),hist=$("hist");if(!E||!list||!tog||!hist)return;
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
let P=[];try{const j=JSON.parse(localStorage.getItem(KEY)||"{}");P=Array.isArray(j.list)?j.list.filter(p=>p&&p.id&&p.name):[]}catch{}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({list:P}))}catch{}};
const opened=new Set(JSON.parse((()=>{try{return localStorage.getItem("bekki_prj_open")||"[]"}catch{return"[]"}})()));
const saveOpen=()=>{try{localStorage.setItem("bekki_prj_open",JSON.stringify([...opened]))}catch{}};
window.bekkiPrjOf=id=>{const p=P.find(x=>x.id===id);return p?p.name:""};window.bekkiPrjName=()=>{const p=P.find(x=>x.id===window.bekkiPid);return p?p.icon+" "+p.name:""};
const chats=()=>window.bekkiChats?window.bekkiChats():[];
/* daftar proyek */
window.bekkiPrjR=()=>{list.textContent="";if(!P.length){list.appendChild(el("div","prj-em","Belum ada proyek"));return}
P.forEach(p=>{const cs=chats().filter(c=>c.pid===p.id&&!c.arc&&c.msgs&&c.msgs.length).sort((a,b)=>(b.u||0)-(a.u||0));const open=opened.has(p.id);
const row=el("div","hist-row prj-row"),b=el("button","hist-item prj-it"+(window.bekkiPid===p.id&&!window.bekkiCur()?" active":"")+(window.bekkiPrjPage===p.id?" active":""));b.setAttribute("aria-expanded",open?"true":"false");
const ic=el("span","prj-ic",p.icon||"📁"),nm=el("span","prj-nm",p.name);const multi=cs.length>=2,cv=el("span","prj-cv"+(open&&multi?" on":""));cv.setAttribute("role","button");cv.setAttribute("aria-label",open?"Ciutkan":"Buka daftar obrolan");cv.innerHTML='<svg viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>';cv.onclick=e=>{e.stopPropagation();open?opened.delete(p.id):opened.add(p.id);saveOpen();window.bekkiPrjR()};b.append(ic,nm);multi&&b.appendChild(cv);
b.onclick=()=>{opened.add(p.id);saveOpen();window.bekkiPrjOpen&&window.bekkiPrjOpen(p.id)};
const d=el("button","hist-del");d.setAttribute("aria-label","Hapus proyek");d.innerHTML='<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>';d.onclick=e=>{e.stopPropagation();delPrj(p)};row.append(b,d);list.appendChild(row);
if(open&&cs.length>=2){const sub=el("div","prj-sub");
cs.forEach(c=>{const r2=el("div","hist-row"),b2=el("button","hist-item"+(window.bekkiCur()===c.id?" active":""));b2.textContent=c.title;b2.onclick=()=>window.bekkiOpen(c.id);r2.appendChild(b2);sub.appendChild(r2)});list.appendChild(sub)}})};
const delPrj=p=>{window.bekkiConfirm("Hapus proyek ini?","Proyek “"+p.name+"” akan dihapus. Obrolan di dalamnya tidak ikut dihapus.","Hapus",()=>{chats().forEach(c=>{if(c.pid===p.id)delete c.pid});P=P.filter(x=>x.id!==p.id);opened.delete(p.id);save();saveOpen();window.bekkiPid===p.id&&(window.bekkiPid=null);window.bekkiPrjClose&&window.bekkiPrjClose();window.bekkiSave&&window.bekkiSave();window.bekkiRender&&window.bekkiRender()})};
/* Chats bisa dilipat */
const setChats=o=>{hist.hidden=!o;tog.setAttribute("aria-expanded",o?"true":"false");tog.classList.toggle("shut",!o);try{localStorage.setItem(OK,o?"1":"0")}catch{}};
let co=!0;try{co=localStorage.getItem(OK)!=="0"}catch{}setChats(co);tog.onclick=()=>setChats(hist.hidden);
$("chAdd").onclick=()=>{window.bekkiNew&&window.bekkiNew()};
$("chFilter").onclick=()=>{const b=$("sbSearch");b&&b.click()};
/* menu kecil (titik tiga) */
let pop=null;const pk=e=>{e.key==="Escape"&&closePop()};const closePop=()=>{pop&&pop.remove();pop=null;document.removeEventListener("pointerdown",outside,!0);document.removeEventListener("keydown",pk,!0)};
const outside=e=>{pop&&!pop.contains(e.target)&&closePop()};
const menu=(anchor,items)=>{closePop();pop=el("div","sb-pop");pop.setAttribute("role","menu");items.forEach(it=>{const b=el("button",null,it[0]);b.type="button";b.setAttribute("role","menuitem");b.onclick=()=>{closePop();it[1]()};pop.appendChild(b)});document.body.appendChild(pop);const r=anchor.getBoundingClientRect();pop.style.top=Math.round(r.bottom+4)+"px";pop.style.left=Math.max(8,Math.min(innerWidth-pop.offsetWidth-8,r.right-pop.offsetWidth))+"px";setTimeout(()=>{document.addEventListener("pointerdown",outside,!0);document.addEventListener("keydown",pk,!0)},0)};
$("prjMenu").onclick=e=>{e.stopPropagation();menu(e.currentTarget,[["Proyek baru",openDlg],["Hapus semua proyek",()=>{if(!P.length)return;window.bekkiConfirm("Hapus semua proyek?","Semua proyek akan dihapus. Obrolan di dalamnya tidak ikut dihapus.","Hapus",()=>{chats().forEach(c=>{delete c.pid});P=[];opened.clear();save();saveOpen();window.bekkiPid=null;window.bekkiSave&&window.bekkiSave();window.bekkiRender&&window.bekkiRender()})}]])};
$("chMenu").onclick=e=>{e.stopPropagation();menu(e.currentTarget,[["Archived chats",()=>window.bekkiSub&&window.bekkiSub(1)],["Shared chats",()=>window.bekkiSub&&window.bekkiSub(0)]])};
$("prjAdd").onclick=openDlg;window.bekkiPrjAPI={get:()=>P,save,del:delPrj,menu};
/* jendela "Buat proyek baru" */
const SUG=[["Belajar","\u{1F4D9}"],["Riset","\u{1F50E}"],["Coding","\u{1F4BB}"],["Kerja","\u{1F4BC}"],["Kesehatan","\u{1F9E1}"],["Menulis","\u{1F58A}️"]];
const EMO=["\u{1F600}","\u{1F4DA}","\u{1F4A1}","\u{1F680}","\u{1F3AF}","\u{1F3A8}","\u{1F3B5}","\u{1F3E0}","\u{1F4B0}","\u{1F30D}","\u{1F373}","✈️"];
let dlg=null,kd=null;
function closeDlg(){if(!dlg)return;const d=dlg;dlg=null;d.classList.add("out");setTimeout(()=>d.remove(),180);document.removeEventListener("keydown",kd,!0)}
function openDlg(){if(dlg)return;let icon="";const bk=el("div","pd-back"),pn=el("div","pd");pn.setAttribute("role","dialog");pn.setAttribute("aria-modal","true");pn.setAttribute("aria-label","Buat proyek baru");
const grab=el("div","pd-grab");const t=el("div","pd-t","Buat proyek baru"),st=el("div","pd-s","Gunakan proyek untuk merapikan obrolan.");
const nr=el("div","pd-nr"),ib=el("button","pd-ib");ib.type="button";ib.setAttribute("aria-label","Pilih ikon");const setIc=e=>{icon=e;ib.textContent=e||"";ib.classList.toggle("has",!!e);if(!e)ib.innerHTML='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.3 2 3.5 2 3.5-2 3.5-2M9 9.5h.01M15 9.5h.01"/></svg>'};setIc("");
const inp=el("input","pd-in");inp.type="text";inp.placeholder="Proyek baru";inp.maxLength=40;inp.autocomplete="off";inp.setAttribute("aria-label","Nama proyek");nr.append(ib,inp);
const grid=el("div","pd-eg");grid.hidden=!0;EMO.forEach(e=>{const b=el("button",null,e);b.type="button";b.onclick=()=>{setIc(e);grid.hidden=!0;inp.focus()};grid.appendChild(b)});ib.onclick=()=>{grid.hidden=!grid.hidden};
const sl=el("div","pd-sl","Saran"),chips=el("div","pd-ch");SUG.forEach(x=>{const b=el("button","pd-chip");b.type="button";b.innerHTML="<span></span><b></b>";b.firstChild.textContent=x[1];b.lastChild.textContent=x[0];b.onclick=()=>{setIc(x[1]);inp.value=x[0];grid.hidden=!0;upd();inp.focus()};chips.appendChild(b)});
const hr=el("div","pd-hr"),cr=el("button","pd-btn pd-create","Buat");cr.type="button";cr.disabled=!0;const cn=el("button","pd-btn pd-cancel","Batal");cn.type="button";
const upd=()=>{cr.disabled=!inp.value.trim()};inp.addEventListener("input",upd);
const go=()=>{const n=inp.value.trim();if(!n)return;const p={id:"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),name:n,icon:icon||"\u{1F4C1}",u:Date.now()};P.unshift(p);opened.add(p.id);save();saveOpen();closeDlg();window.bekkiPrjR();const sec=$("prjSec");sec&&sec.scrollIntoView&&sec.scrollIntoView({block:"nearest"})};
cr.onclick=go;cn.onclick=closeDlg;inp.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),go())});
pn.append(grab,t,st,nr,grid,sl,chips,hr,cr,cn);bk.appendChild(pn);document.body.appendChild(bk);dlg=bk;bk.addEventListener("mousedown",e=>{e.target===bk&&closeDlg()});
kd=e=>{if(e.key==="Escape"){e.preventDefault();e.stopPropagation();closeDlg()}};document.addEventListener("keydown",kd,!0);setTimeout(()=>inp.focus(),40)}
window.bekkiPrjR()})();

/* halaman proyek */
(()=>{const $=id=>document.getElementById(id);const main=document.querySelector(".main"),SB=$("sidebar");if(!main)return;
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
const API=()=>window.bekkiPrjAPI;let pg=null,cur=null;
const TONES=[["","Default (Global)","Balanced, natural responses."],["professional","Professional","Polished, precise and well structured."],["empathetic","Empathetic","Warm, understanding and supportive."],["direct","Direct","Best for clear and concise answers."]];
const TI={professional:"Jawab dengan nada profesional, rapi dan presisi.",empathetic:"Jawab dengan nada empatik, hangat dan suportif.",direct:"Jawab langsung, jelas dan ringkas."};
const CH=[["Casual","Use a casual tone."],["Polite","Be polite."],["Humorous","Add some humor."],["Earnest","Be earnest and sincere."],["Empathetic","Be empathetic."]];
const toast=m=>{const o=document.querySelector(".at-toast");o&&o.remove();const d=el("div","at-toast",m);document.body.appendChild(d);setTimeout(()=>{d.classList.add("out");setTimeout(()=>d.remove(),300)},2000)};
const proj=()=>{const a=API();return a&&a.get().find(p=>p.id===cur)};
function close(){if(!pg)return;pg.remove();pg=null;cur=null;window.bekkiPrjPage=null;window.bekkiPrjR&&window.bekkiPrjR()}
window.bekkiPrjClose=close;
const o1=window.bekkiOpen,o2=window.bekkiNew;window.bekkiOpen=t=>{close();return o1(t)};window.bekkiNew=()=>{close();return o2()};
[$("newChat"),$("hist")].forEach(x=>x&&x.addEventListener("click",e=>{if(pg&&(x.id==="newChat"||e.target.closest(".hist-item")))close()},!0));
/* konteks yang dikirim ke AI */
window.bekkiPrjCtx=()=>{const a=API();if(!a||!window.bekkiPid)return"";const p=a.get().find(x=>x.id===window.bekkiPid);if(!p)return"";let o="";
if(p.tone&&TI[p.tone])o+="[Nada jawaban]\n"+TI[p.tone]+"\n\n";
if(p.ins&&p.ins.trim())o+="[Instruksi proyek \u201C"+p.name+"\u201D]\n"+p.ins.trim()+"\n\n";
if(p.ctx!==!1){const cur=window.bekkiCur&&window.bekkiCur();const l=(window.bekkiChats?window.bekkiChats():[]).filter(c=>c.pid===p.id&&c.id!==cur&&c.msgs&&c.msgs.length).sort((x,y)=>(y.u||0)-(x.u||0)).slice(0,5).map(c=>{const f=c.msgs.find(m=>m.role==="user");return"- "+c.title+(f?": "+String(f.content).replace(/\s+/g," ").slice(0,120):"")});if(l.length)o+="[Obrolan lain di proyek ini]\n"+l.join("\n")+"\n\n"}
return o?o+"[Pesan pengguna]\n":""};
const SVG='<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>';
const dt=u=>{if(!u)return"";const d=new Date(u),n=new Date();if(d.toDateString()===n.toDateString())return"Hari ini";return d.toLocaleDateString("id-ID",{day:"numeric",month:"short"})};
function open(id){const a=API();if(!a||!a.get().some(p=>p.id===id))return;close();cur=id;window.bekkiPrjPage=id;let tab=0;
if(matchMedia("(max-width:768px)").matches&&SB)SB.classList.add("closed");
pg=el("div","pj");pg.id="prjPage";
const top=el("div","pj-top"),tg=el("button","icon-btn");tg.type="button";tg.setAttribute("aria-label","Sidebar");tg.style.color="var(--foreground)";tg.innerHTML=SVG;tg.onclick=e=>{e.stopPropagation();SB&&SB.classList.toggle("closed")};top.appendChild(tg);
const body=el("div","pj-body"),hd=el("div","pj-hd"),ic=el("span","pj-ic"),nm=el("h2","pj-nm"),more=el("button","pj-more");more.type="button";more.setAttribute("aria-label","Menu proyek");more.innerHTML='<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>';
const nb=el("div","pj-nb"),meta=el("div","pj-meta");nb.append(nm,meta);hd.append(ic,nb,more);
const tabs=el("div","pj-tabs"),t0=el("button","pj-tab","Conversations"),t1=el("button","pj-tab","Settings");[t0,t1].forEach(b=>{b.type="button";b.setAttribute("role","tab")});tabs.append(t0,t1);
const pane=el("div","pj-pane");body.append(hd,tabs,pane);
/* composer */
const comp=el("div","pj-comp"),box=el("div","pj-cbox"),ta=el("textarea");ta.rows=1;ta.placeholder="Ask anything...";ta.setAttribute("aria-label","Pesan");const sd=el("button","pj-send");sd.type="button";sd.disabled=!0;sd.setAttribute("aria-label","Kirim");sd.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';box.append(ta,sd);comp.appendChild(box);
const fit=()=>{ta.style.height="auto";ta.style.height=Math.min(160,ta.scrollHeight)+"px";sd.disabled=!ta.value.trim()};
const send=()=>{const v=ta.value.trim();if(!v)return;const pid=cur;window.bekkiNew();window.bekkiPid=pid;const inp=$("input");inp.value=v;inp.dispatchEvent(new Event("input",{bubbles:!0}));$("send").click()};
ta.oninput=fit;ta.onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey&&!e.isComposing){e.preventDefault();send()}};sd.onclick=send;
pg.append(top,body,comp);main.appendChild(pg);
function head(){const p=proj();if(!p)return close();ic.textContent=p.icon||"\u{1F4C1}";nm.textContent=p.name;nm.title=p.name;ta.placeholder="Mulai chat baru di "+p.name+"\u2026"}
function draw(){const p=proj();if(!p)return close();const cs=(window.bekkiChats?window.bekkiChats():[]).filter(c=>c.pid===p.id&&!c.arc&&c.msgs&&c.msgs.length).sort((x,y)=>(y.u||0)-(x.u||0));
const TL=(TONES.find(x=>x[0]===(p.tone||""))||TONES[0])[1];meta.textContent=cs.length+" percakapan · Tone: "+TL.replace(" (Global)","");
t0.textContent="Conversations";cs.length&&t0.appendChild(el("span","pj-bd",String(cs.length)));t1.textContent="Settings";
t0.classList.toggle("on",tab===0);t1.classList.toggle("on",tab===1);t0.setAttribute("aria-selected",tab===0);t1.setAttribute("aria-selected",tab===1);comp.hidden=tab!==0;pane.textContent="";
if(tab===0){
if(!cs.length){const em=el("div","pj-em");em.innerHTML='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 8h20a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H15l-6 5v-5H6a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z"/><path d="M22 20h18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3v5l-6-5H22a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3z"/><path d="M26 28h.01M31 28h.01M36 28h.01"/></svg>';em.append(el("div","pj-et","No conversations yet"),el("div","pj-es","Every big idea starts with a chat. What’s yours? Let’s talk!"));pane.appendChild(em)}
else{const ul=el("div","pj-ls");cs.forEach(c=>{const b=el("button","pj-ci");b.type="button";const last=c.msgs[c.msgs.length-1],sn=String(last&&last.content||"").replace(/[#*`>_~|]/g," ").replace(/\s+/g," ").trim().slice(0,100);const m=el("span","pj-cm");m.appendChild(el("span","pj-ct",c.title));sn&&m.appendChild(el("span","pj-cs",sn));const r=el("span","pj-cr2");r.append(el("span","pj-cd",dt(c.u)),el("span","pj-cn",c.msgs.length+" pesan"));b.append(m,r);b.insertAdjacentHTML("beforeend",'<svg class="pj-ch2" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>');b.onclick=()=>window.bekkiOpen(c.id);ul.appendChild(b)});pane.appendChild(ul)}}
else{const CV='<svg class="pj-ch2" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>';
const card=(l,v,cls)=>{const d=el("div","pj-card"+(cls?" "+cls:"")),h=el("div","pj-ch");h.appendChild(el("div","pj-sl",l));d.appendChild(h);if(v!=null)d.appendChild(el("div","pj-sv",v));pane.appendChild(d);return d};
const tone=card("Tone",TL,"tap");tone.querySelector(".pj-ch").insertAdjacentHTML("beforeend",CV);tone.onclick=()=>dlgIns(p);
const has=!!(p.ins&&p.ins.trim());const ins=card("Instructions",has?p.ins.trim():"No instructions set for this project");ins.querySelector(".pj-sv").classList.toggle("ph",!has);
const cb=el("button","pj-mini",has?"Edit":"Customize");cb.type="button";cb.onclick=()=>dlgIns(p);ins.querySelector(".pj-ch").appendChild(cb);
const cx=el("div","pj-card pj-cx"),tx=el("div","pj-cxt");tx.append(el("div","pj-sl","Additional Context"),el("div","pj-sv","Include other chats in this project as context"));const sw=el("button","sk-sw");sw.type="button";sw.setAttribute("role","switch");sw.setAttribute("aria-label","Additional Context");sw.setAttribute("aria-checked",p.ctx!==!1?"true":"false");sw.onclick=()=>{p.ctx=p.ctx===!1;API().save();sw.setAttribute("aria-checked",p.ctx!==!1?"true":"false")};cx.append(tx,sw);cx.onclick=e=>{e.target.closest(".sk-sw")||sw.click()};cx.style.cursor="pointer";pane.appendChild(cx);
const fl=el("div","pj-card pj-files");fl.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></svg>';fl.append(el("div","pj-sl","No files uploaded"),el("div","pj-sv","Tambahkan file sebagai bahan rujukan proyek."));const up=el("button","pj-btn pri","Upload files");up.type="button";up.onclick=()=>toast("Unggah file segera hadir");fl.appendChild(up);pane.appendChild(fl)}
}
function dlgIns(p){if(document.querySelector(".pj-dl"))return;let tone=p.tone||"",menu=null;
const bk=el("div","pd-back"),pn=el("div","pd pj-dl");pn.setAttribute("role","dialog");pn.setAttribute("aria-modal","true");pn.setAttribute("aria-label","Instructions");
const x=el("button","pj-dx");x.type="button";x.setAttribute("aria-label","Tutup");x.innerHTML='<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const sel=el("button","pj-sel");sel.type="button";sel.setAttribute("aria-haspopup","listbox");const sd=el("div","pj-sd");
const CV='<svg class="pj-cv2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>';
const lab=()=>{const T=TONES.find(a=>a[0]===tone)||TONES[0];sel.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 3a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.7-1.2A8.5 8.5 0 1 0 12 3z"/><path d="M9 10h.01M15 10h.01M9 14s1 1.5 3 1.5 3-1.5 3-1.5"/></svg>';sel.append(el("span",null,T[1]));sel.insertAdjacentHTML("beforeend",CV);sd.textContent=T[2]};lab();
const hr=el("div","pj-dhr"),l2=el("div","pj-dl1","Additional Instructions"),ta=el("textarea");ta.maxLength=2000;ta.rows=5;ta.value=p.ins||"";ta.placeholder="Be concise, talk in a friendly tone, etc.";
const chips=el("div","pj-chips");CH.forEach(c=>{const b=el("button","pj-chip");b.type="button";b.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';b.append(c[0]);b.onclick=()=>{if(ta.value.includes(c[1]))return;ta.value=(ta.value.trim()?ta.value.trim()+" ":"")+c[1];ta.focus()};chips.appendChild(b)});
const rs=el("button","pj-chip pj-rs");rs.type="button";rs.setAttribute("aria-label","Kosongkan");rs.title="Kosongkan";rs.innerHTML='<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5"/></svg>';rs.onclick=()=>{ta.value="";ta.focus()};chips.appendChild(rs);
const sv=el("button","pj-save","Save");sv.type="button";
const ttl=el("h3","pj-dt","Instructions"),l1=el("div","pj-dl1","Tone");
pn.append(x,ttl,l1,sel,sd,hr,l2,ta,chips,sv);bk.appendChild(pn);document.body.appendChild(bk);
const kd=e=>{if(e.key==="Escape"){e.stopPropagation();menu?cm():end()}};
function end(){document.removeEventListener("keydown",kd,!0);bk.classList.add("out");setTimeout(()=>bk.remove(),180)}
function cm(){if(menu){menu.remove();menu=null;sel.classList.remove("on")}}
sel.onclick=e=>{e.stopPropagation();if(menu)return cm();sel.classList.add("on");menu=el("div","pj-menu");menu.setAttribute("role","listbox");
const row=(T)=>{const b=el("button","pj-mi"+(T[0]===tone?" on":""),T[1]);b.type="button";b.setAttribute("role","option");if(T[0]===tone)b.insertAdjacentHTML("beforeend",'<svg viewBox="0 0 24 24"><path d="m5 12 5 5 9-10"/></svg>');b.onclick=ev=>{ev.stopPropagation();tone=T[0];lab();cm()};return b};
menu.append(el("div","pj-mh","Global Tone"),row(TONES[0]),el("div","pj-mh","Project Tone"),row(TONES[1]),row(TONES[2]),row(TONES[3]));pn.appendChild(menu);const r=sel.getBoundingClientRect(),q=pn.getBoundingClientRect();menu.style.top=(r.bottom-q.top+pn.scrollTop+6)+"px";menu.style.left=(r.left-q.left)+"px";menu.style.width=r.width+"px"};
pn.addEventListener("click",e=>{menu&&!menu.contains(e.target)&&cm()});
x.onclick=end;bk.addEventListener("pointerdown",e=>{e.target===bk&&end()});document.addEventListener("keydown",kd,!0);
sv.onclick=()=>{p.ins=ta.value.trim().slice(0,2000);p.tone=tone;API().save();end();draw();toast("Instruksi disimpan")};setTimeout(()=>ta.focus(),60)}
t0.onclick=()=>{tab=0;draw()};t1.onclick=()=>{tab=1;draw()};
more.onclick=e=>{e.stopPropagation();API().menu(more,[["Delete",()=>{const p=proj();p&&API().del(p)}]])};
head();draw();window.bekkiPrjR&&window.bekkiPrjR()}
window.bekkiPrjOpen=open;
/* segarkan daftar saat chat berubah */
const R0=window.bekkiRender;window.bekkiRender=()=>{R0();if(pg){const p=proj();if(p&&!pg.querySelector(".pj-ed")){const t=pg.querySelector(".pj-tab.on");t&&t.click()}}}})();

/* menu obrolan, arsip, dibagikan */
(()=>{const $=id=>document.getElementById(id);const SB=$("sidebar");if(!SB)return;
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
const chats=()=>window.bekkiChats?window.bekkiChats():[];const sv=()=>{window.bekkiSave&&window.bekkiSave();window.bekkiRender&&window.bekkiRender()};
const toast=m=>{const o=document.querySelector(".at-toast");o&&o.remove();const d=el("div","at-toast",m);document.body.appendChild(d);setTimeout(()=>{d.classList.add("out");setTimeout(()=>d.remove(),300)},2000)};
const I=d=>'<svg viewBox="0 0 24 24"><path d="'+d+'"/></svg>';
const IC={ed:I("M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"),sh:'<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',pin:I("M12 16v5M8 3h8l-1.5 6.5L18 13H6l3.5-3.5z"),ar:I("M3 4h18v4H3zM5 8v12h14V8M10 12h4"),un:I("M3 4h18v4H3zM5 8v12h14V8M12 17v-5M9.5 14.5 12 12l2.5 2.5"),mv:I("M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 10v5M9.5 12.5h5"),del:I("M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"),rt:I("m9 6 6 6-6 6"),bk:I("M19 12H5M12 19l-7-7 7-7"),fo:I("M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"),x:I("M18 6 6 18M6 6l12 12")};
/* popup */
let pop=null,anc=null;
const closePop=()=>{pop&&pop.remove();pop=null;document.removeEventListener("pointerdown",out,!0);document.removeEventListener("keydown",kd,!0)};
const out=e=>{pop&&!pop.contains(e.target)&&!(anc&&anc.contains(e.target))&&closePop()};const kd=e=>{e.key==="Escape"&&closePop()};
function place(){const r=anc.getBoundingClientRect(),w=pop.offsetWidth,h=pop.offsetHeight;let l=Math.max(8,Math.min(innerWidth-w-8,r.right-w)),t=r.bottom+4;if(t+h>innerHeight-8)t=Math.max(8,r.top-h-4);pop.style.left=l+"px";pop.style.top=t+"px"}
function menu(a,items,back){anc=a;if(!pop){pop=el("div","cm-pop");pop.setAttribute("role","menu");document.body.appendChild(pop);setTimeout(()=>{document.addEventListener("pointerdown",out,!0);document.addEventListener("keydown",kd,!0)},0)}
pop.textContent="";
if(back){const b=el("button","cm-it cm-bk");b.type="button";b.innerHTML=IC.bk+"<span>"+back[0]+"</span>";b.onclick=()=>menu(a,back[1]);pop.appendChild(b);pop.appendChild(el("div","cm-sep"))}
items.forEach(it=>{const b=el("button","cm-it"+(it.k?" "+it.k:""));b.type="button";b.setAttribute("role","menuitem");b.innerHTML=it.i||"";const sp=el("span",null,it.t);b.appendChild(sp);if(it.sub)b.insertAdjacentHTML("beforeend",'<em class="cm-rt">'+IC.rt+"</em>");
b.onclick=()=>{if(it.sub){menu(a,it.sub(),["Move to project",items])}else{closePop();it.f()}};pop.appendChild(b)});place()}
/* ganti nama langsung di daftar */
function rename(a,c){const row=a.closest(".hist-row"),bt=row&&row.querySelector(".hist-item");if(!bt)return;const inp=el("input","hist-ren");inp.value=c.title||"";inp.maxLength=80;inp.setAttribute("aria-label","Ganti nama obrolan");bt.replaceWith(inp);inp.focus();inp.select();let done=!1;const fin=ok=>{if(done)return;done=!0;const v=inp.value.trim();if(ok&&v)c.title=v.slice(0,80);sv()};inp.onkeydown=e=>{e.key==="Enter"&&(e.preventDefault(),fin(!0));e.key==="Escape"&&(e.stopPropagation(),fin(!1))};inp.onblur=()=>fin(!0);inp.onclick=e=>e.stopPropagation()}
const prj=()=>{const a=window.bekkiPrjAPI;return a?a.get():[]};
window.bekkiChatMenu=(a,id)=>{const c=chats().find(x=>x.id===id);if(!c)return;
const items=[{i:IC.ed,t:"Rename",f:()=>rename(a,c)},{i:IC.sh,t:"Share",f:()=>window.bekkiShare&&window.bekkiShare(id)},{i:IC.pin,t:c.pin?"Unpin":"Pin",f:()=>{c.pin=!c.pin;sv()}},{i:IC.ar,t:"Archive",f:()=>{c.arc=!0;sv();toast("Obrolan diarsipkan")}}];
if(prj().length)items.push({i:IC.mv,t:"Move to project",sub:()=>{const l=prj().map(p=>({i:'<span class="cm-em">'+(p.icon||"\u{1F4C1}")+"</span>",t:p.name,f:()=>{c.pid=p.id;window.bekkiCur&&window.bekkiCur()===id&&(window.bekkiPid=p.id);sv();toast("Dipindah ke "+p.name)}}));c.pid&&l.push({i:IC.x,t:"Keluarkan dari proyek",f:()=>{delete c.pid;window.bekkiCur&&window.bekkiCur()===id&&(window.bekkiPid=null);sv()}});return l}});
items.push({i:IC.del,t:"Delete",k:"del",f:()=>window.bekkiDel&&window.bekkiDel(id)});menu(a,items)};
/* tampilan Shared / Archived di sidebar */
const sub=el("div","sb-sub");sub.hidden=!0;const ft=SB.querySelector(".sb-foot");ft?SB.insertBefore(sub,ft):SB.appendChild(sub);
let tab=0,shown=!1;
function hide(){shown=!1;SB.classList.remove("sub-open");sub.hidden=!0;sub.textContent=""}
function draw(){if(!shown)return;sub.textContent="";const bk=el("button","sb-back");bk.type="button";bk.innerHTML=IC.bk+"<span>Back</span>";bk.onclick=hide;
const tabs=el("div","pj-tabs"),t0=el("button","pj-tab"+(tab===0?" on":""),"Shared"),t1=el("button","pj-tab"+(tab===1?" on":""),"Archived");t0.type=t1.type="button";t0.onclick=()=>{tab=0;draw()};t1.onclick=()=>{tab=1;draw()};tabs.append(t0,t1);
const ls=el("div","sb-sl");const cs=chats().filter(c=>c.msgs&&c.msgs.length&&(tab===0?c.shared&&!c.arc:c.arc)).sort((a,b)=>(b.u||0)-(a.u||0));
if(!cs.length)ls.appendChild(el("div","prj-em",tab===0?"Belum ada obrolan yang dibagikan":"Belum ada obrolan yang diarsipkan"));
cs.forEach(c=>{const r=el("div","hist-row"),b=el("button","hist-item",c.title),m=el("button","hist-del hist-more");m.type="button";m.setAttribute("aria-label","Menu obrolan");m.innerHTML='<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg>';
b.onclick=()=>{hide();window.bekkiOpen(c.id)};
m.onclick=e=>{e.stopPropagation();const it=tab===0?[{i:IC.x,t:"Stop sharing",f:()=>{delete c.shared;sv()}}]:[{i:IC.un,t:"Unarchive",f:()=>{delete c.arc;sv();toast("Obrolan dikembalikan")}}];it.push({i:IC.del,t:"Delete",k:"del",f:()=>window.bekkiDel&&window.bekkiDel(c.id)});menu(m,it)};r.append(b,m);ls.appendChild(r)});
sub.append(bk,tabs,ls)}
window.bekkiSub=t=>{tab=t;shown=!0;SB.classList.add("sub-open");sub.hidden=!1;draw()};
const R1=window.bekkiRender;window.bekkiRender=()=>{R1();draw()}})();

/* Skills */
(()=>{const $=id=>document.getElementById(id);const main=document.querySelector(".main"),SB=$("sidebar"),inp=$("input"),cw=document.querySelector(".composer-wrap");if(!main||!inp||!cw)return;
window.bekkiSkelCards=(ls,n)=>{ls.textContent="";const b=(c,st)=>{const i=document.createElement("i");i.className="sh-b "+(c||"");st&&(i.style.cssText=st);return i};for(let k=0;k<n;k++){const c=document.createElement("div");c.className="sk-card sh-card";c.setAttribute("aria-hidden","true");const r=document.createElement("div");r.className="sk-row";r.append(b("","width:"+(30+(k*13)%22)+"%;height:16px"),b("sh-sw"));const d1=b("","width:86%;height:12px;margin-top:12px"),d2=b("","width:"+(48+(k*9)%24)+"%;height:12px;margin-top:8px"),bt=document.createElement("div");bt.className="sk-btns";bt.append(b("","width:92px;height:36px;border-radius:10px"),b("","width:64px;height:36px;border-radius:10px"));c.append(r,d1,d2,bt);ls.appendChild(c)}ls.setAttribute("aria-busy","true")};
const KEY="bekki_skills_v1";
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
const toast=m=>{const o=document.querySelector(".at-toast");o&&o.remove();const d=el("div","at-toast",m);document.body.appendChild(d);setTimeout(()=>{d.classList.add("out");setTimeout(()=>d.remove(),300)},2200)};
const BOLT='<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',XI='<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const BI=[
{id:"b1",name:"Ringkas teks",desc:"Ubah teks panjang jadi poin inti yang singkat.",ins:"Ringkas teks yang saya kirim menjadi 3-6 poin inti yang singkat dan jelas, lalu tutup dengan satu kalimat kesimpulan. Jangan menambah informasi yang tidak ada di teks."},
{id:"b2",name:"Penulis esai",desc:"Bantu menyusun esai atau surat yang rapi.",ins:"Bertindaklah sebagai penulis yang rapi. Susun tulisan dengan pembuka yang menarik, isi yang runtut, dan penutup yang kuat. Gunakan bahasa Indonesia baku yang enak dibaca, kecuali saya minta lain."},
{id:"b3",name:"Penerjemah",desc:"Terjemahkan teks dan jaga nuansanya.",ins:"Terjemahkan teks saya ke bahasa yang saya sebutkan (jika tidak disebut: Indonesia <-> Inggris). Jaga nada dan maksudnya, jangan menerjemahkan kata per kata, dan beri catatan singkat kalau ada ungkapan yang punya beberapa arti."},
{id:"b4",name:"Review kode",desc:"Cari bug, celah keamanan, dan saran perbaikan.",ins:"Tinjau kode yang saya kirim. Sebutkan bug, celah keamanan, dan bagian yang sulit dibaca, urut dari yang paling penting. Untuk tiap temuan beri alasan singkat dan contoh perbaikannya."},
{id:"b5",name:"Jelaskan sederhana",desc:"Jelaskan hal rumit dengan analogi mudah.",ins:"Jelaskan topik yang saya tanyakan seolah ke pemula: pakai bahasa sehari-hari, satu analogi yang mudah dibayangkan, dan contoh singkat. Hindari istilah teknis kecuali langsung dijelaskan."}];
let U=[],off=[];try{const j=JSON.parse(localStorage.getItem(KEY)||"{}");U=Array.isArray(j.list)?j.list.filter(s=>s&&s.id&&s.name&&s.ins):[];off=Array.isArray(j.off)?j.off:[]}catch{}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({list:U,off}))}catch{}};
const all=()=>[...U.map(s=>({...s,on:s.on!==!1})),...BI.map(b=>({...b,bi:1,on:!off.includes(b.id)}))];
const find=id=>all().find(s=>s.id===id),enabled=()=>all().filter(s=>s.on);
/* skill aktif (chip di atas kolom chat) */
let active=null;const chip=el("div","sk-act");chip.hidden=!0;cw.insertBefore(chip,cw.firstChild);
function setActive(id){const s=id&&find(id);if(!s||!s.on){active=null;chip.hidden=!0;chip.textContent="";return}active=id;chip.hidden=!1;chip.textContent="";chip.insertAdjacentHTML("beforeend",BOLT);chip.appendChild(el("span",null,s.name));const x=el("button");x.type="button";x.setAttribute("aria-label","Lepas skill");x.innerHTML=XI;x.onclick=()=>{setActive(null);inp.focus()};chip.appendChild(x)}
const P0=window.bekkiPrjCtx;window.bekkiPrjCtx=()=>{const base=P0?P0():"";const s=active&&find(active);if(!s||!s.on)return base;const part="[Skill aktif: "+s.name+"]\n"+s.ins+"\n\n";return base?part+base:part+"[Pesan pengguna]\n"};
/* ketik / untuk memilih skill */
const pop=el("div","sk-pop");pop.hidden=!0;pop.setAttribute("role","listbox");cw.appendChild(pop);let items=[],hi=0;
function upd(){const v=inp.value;if(!/^\/\S*$/.test(v)){pop.hidden=!0;return}const q=v.slice(1).toLowerCase();items=enabled().filter(s=>s.name.toLowerCase().includes(q));pop.textContent="";if(!items.length){pop.hidden=!0;return}hi=Math.min(hi,items.length-1);
items.forEach((s,i)=>{const b=el("button","sk-op"+(i===hi?" hi":""));b.type="button";b.setAttribute("role","option");b.append(el("b",null,"/"+s.name),el("span",null,s.desc||""));b.onmousedown=e=>e.preventDefault();b.onclick=()=>pick(s.id);pop.appendChild(b)});pop.hidden=!1}
function pick(id){setActive(id);inp.value="";inp.dispatchEvent(new Event("input",{bubbles:!0}));pop.hidden=!0;inp.focus()}
inp.addEventListener("input",upd);
inp.addEventListener("keydown",e=>{if(pop.hidden)return;if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();hi=(hi+(e.key==="ArrowDown"?1:-1)+items.length)%items.length;upd()}else if(e.key==="Enter"||e.key==="Tab"){e.preventDefault();e.stopImmediatePropagation();pick(items[hi].id)}else if(e.key==="Escape"){pop.hidden=!0}},!0);
/* halaman Skills */
let pg=null;function closeP(){pg&&(pg.remove(),pg=null)}
const o1=window.bekkiOpen,o2=window.bekkiNew,o3=window.bekkiPrjOpen;
window.bekkiOpen=t=>{closeP();setActive(null);return o1(t)};window.bekkiNew=()=>{closeP();setActive(null);return o2()};window.bekkiPrjOpen=id=>{closeP();o3&&o3(id)};
[$("newChat"),$("hist")].forEach(x=>x&&x.addEventListener("click",e=>{if(x.id==="newChat"||e.target.closest(".hist-item")){closeP();setActive(null)}},!0));
const SVG='<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>';
window.bekkiSkClose=closeP;function openP(){window.bekkiPrjClose&&window.bekkiPrjClose();window.bekkiCnClose&&window.bekkiCnClose();window.bekkiMmClose&&window.bekkiMmClose();window.bekkiGiClose&&window.bekkiGiClose();closeP();if(matchMedia("(max-width:768px)").matches&&SB)SB.classList.add("closed");
pg=el("div","pj");pg.id="skPage";
const top=el("div","pj-top"),tg=el("button","icon-btn");tg.type="button";tg.setAttribute("aria-label","Sidebar");tg.style.color="var(--foreground)";tg.innerHTML=SVG;tg.onclick=e=>{e.stopPropagation();SB&&SB.classList.toggle("closed")};top.appendChild(tg);
const body=el("div","pj-body"),hd=el("div","pj-hd"),ic=el("span","pj-ic");ic.innerHTML=BOLT;ic.classList.add("sk-ic");const nm=el("h2","pj-nm","Skills"),nw=el("button","sk-new","+ Buat skill");nw.type="button";nw.onclick=()=>dlg();hd.append(ic,nm,nw);
const sub=el("p","sk-sub","Skill adalah instruksi siap pakai untuk Bekki. Aktifkan skill, lalu ketik / di kolom chat atau tekan Gunakan.");const ls=el("div","sk-list");body.append(hd,sub,ls);pg.append(top,body);main.appendChild(pg);
window.__skDraw=draw;window.bekkiSkelCards(ls,Math.min(5,Math.max(2,all().length)));setTimeout(()=>{ls.removeAttribute("aria-busy");draw()},450);
function draw(){if(!pg)return;ls.textContent="";all().forEach(s=>{const c=el("div","sk-card"+(s.on?"":" off")),r=el("div","sk-row"),n=el("b","sk-n",s.name);r.appendChild(n);if(s.bi)r.appendChild(el("span","sk-tag","Bawaan"));
const sw=el("button","sk-sw");sw.type="button";sw.setAttribute("role","switch");sw.setAttribute("aria-checked",s.on?"true":"false");sw.setAttribute("aria-label",(s.on?"Matikan ":"Aktifkan ")+s.name);
sw.onclick=()=>{const v=!s.on;if(s.bi){off=v?off.filter(x=>x!==s.id):[...off,s.id]}else{const u=U.find(x=>x.id===s.id);u&&(u.on=v)}save();!v&&active===s.id&&setActive(null);draw()};r.appendChild(sw);
const d=el("p","sk-d",s.desc||s.ins.slice(0,90));const a=el("div","sk-btns");
const use=el("button","sk-btn pri","Gunakan");use.type="button";use.disabled=!s.on;use.onclick=()=>{window.bekkiNew();setActive(s.id);toast("Skill aktif: "+s.name);inp.focus()};a.appendChild(use);
if(!s.bi){const ed=el("button","sk-btn","Edit");ed.type="button";ed.onclick=()=>dlg(U.find(x=>x.id===s.id));const dl=el("button","sk-btn dg","Hapus");dl.type="button";dl.onclick=()=>window.bekkiConfirm("Hapus skill ini?","Skill “"+s.name+"” akan dihapus.","Hapus",()=>{U=U.filter(x=>x.id!==s.id);save();active===s.id&&setActive(null);draw()});a.append(ed,dl)}
else{const iv=el("button","sk-btn","Lihat instruksi");iv.type="button";iv.onclick=()=>dlg(s,!0);a.appendChild(iv)}
c.append(r,d,a);ls.appendChild(c)})}}
/* dialog buat/edit */
function dlg(sk,ro){if(document.querySelector(".sk-dl"))return;const bk=el("div","pd-back"),pn=el("div","pd pj-dl sk-dl");pn.setAttribute("role","dialog");pn.setAttribute("aria-modal","true");
const x=el("button","pj-dx");x.type="button";x.setAttribute("aria-label","Tutup");x.innerHTML=XI;
const t=el("h3","pj-dt",ro?sk.name:sk?"Edit skill":"Buat skill");
const l1=el("div","sk-lb","Nama"),i1=el("input","sk-in");i1.maxLength=40;i1.placeholder="Contoh: Guru matematika";i1.value=sk?sk.name:"";
const l2=el("div","sk-lb","Deskripsi singkat"),i2=el("input","sk-in");i2.maxLength=90;i2.placeholder="Untuk apa skill ini?";i2.value=sk?sk.desc||"":"";
const l3=el("div","sk-lb","Instruksi"),ta=el("textarea");ta.rows=7;ta.maxLength=4000;ta.placeholder="Contoh: Jawab sebagai guru matematika yang sabar. Jelaskan langkah demi langkah dan beri satu soal latihan di akhir.";ta.value=sk?sk.ins:"";
pn.append(x,t);if(ro){const p=el("p","sk-ro",sk.ins);pn.appendChild(p)}else{pn.append(l1,i1,l2,i2,l3,ta);const sv=el("button","pj-save","Simpan");sv.type="button";sv.style.marginTop="22px";sv.onclick=()=>{const n=i1.value.trim(),ins=ta.value.trim();if(!n||!ins){toast("Nama dan instruksi wajib diisi");return}
if(sk){sk.name=n;sk.desc=i2.value.trim();sk.ins=ins}else U.unshift({id:"s"+Date.now().toString(36),name:n,desc:i2.value.trim(),ins,on:!0});save();end();window.__skDraw&&window.__skDraw();toast("Skill disimpan")};pn.appendChild(sv)}
bk.appendChild(pn);document.body.appendChild(bk);
const kd=e=>{e.key==="Escape"&&(e.stopPropagation(),end())};function end(){document.removeEventListener("keydown",kd,!0);bk.classList.add("out");setTimeout(()=>bk.remove(),180)}
x.onclick=end;bk.addEventListener("pointerdown",e=>{e.target===bk&&end()});document.addEventListener("keydown",kd,!0);ro||setTimeout(()=>i1.focus(),60)}
const it=document.querySelector('.ctx-it[data-soon="Skills"]');it&&it.addEventListener("click",e=>{e.stopPropagation();openP()});
window.bekkiSkills=()=>openP()})();

/* Connectors */
(()=>{const $=id=>document.getElementById(id);const main=document.querySelector(".main"),SB=$("sidebar"),inp=$("input");if(!main||!inp)return;
const KEY="bekki_conn_v1",MAXE=8000,MAXT=12000;
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
const toast=m=>{const o=document.querySelector(".at-toast");o&&o.remove();const d=el("div","at-toast",m);document.body.appendChild(d);setTimeout(()=>{d.classList.add("out");setTimeout(()=>d.remove(),300)},2600)};
const XI='<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',PLUG='<svg viewBox="0 0 24 24"><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/></svg>';
const TY={note:"Catatan",gh:"GitHub",wiki:"Wikipedia",web:"Halaman web"};
let C=[];try{const j=JSON.parse(localStorage.getItem(KEY)||"{}");C=Array.isArray(j.list)?j.list.filter(c=>c&&c.id&&c.name&&c.content&&TY[c.type]):[]}catch{}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({list:C}))}catch{}};
/* konteks yang dikirim ke AI */
const P1=window.bekkiPrjCtx;window.bekkiPrjCtx=()=>{const base=P1?P1():"";let t=0,o="";C.filter(c=>c.on).forEach(c=>{const room=MAXT-t;if(room<200)return;const x=c.content.slice(0,room);t+=x.length;o+="[Sumber: "+c.name+" ("+TY[c.type]+")]\n"+x+"\n\n"});if(!o)return base;return "[Konteks tambahan dari sumber yang dipilih pengguna, pakai bila relevan]\n"+o+(base||"[Pesan pengguna]\n")};
/* mengambil isi sumber */
const tfetch=async(u,o)=>{const ac=new AbortController(),t=setTimeout(()=>ac.abort(),15000);try{return await fetch(u,{...o,signal:ac.signal})}finally{clearTimeout(t)}};
async function pull(c){try{let tx="";
if(c.type==="gh"){const m=c.src.trim().replace(/^https?:\/\/(www\.)?github\.com\//i,"").replace(/\.git$/,"").match(/^([\w.-]+)\/([\w.-]+)/);if(!m)throw new Error("Tulis repo seperti owner/nama-repo.");const r=await tfetch("https://api.github.com/repos/"+m[1]+"/"+m[2]+"/readme",{headers:{Accept:"application/vnd.github.raw+json"}});if(r.status===404)throw new Error("Repo tidak ditemukan, bersifat privat, atau tidak punya README.");if(!r.ok)throw new Error("GitHub menolak permintaan (kode "+r.status+"). Coba lagi nanti.");tx=await r.text()}
else if(c.type==="wiki"){for(const lg of["id","en"]){const r=await tfetch("https://"+lg+".wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&redirects=1&format=json&origin=*&titles="+encodeURIComponent(c.src.trim()));if(!r.ok)continue;const j=await r.json();const pg=Object.values((j.query||{}).pages||{})[0];if(pg&&pg.extract){tx=pg.extract;break}}if(!tx)throw new Error("Artikel tidak ditemukan di Wikipedia.")}
else if(c.type==="web"){let u=c.src.trim();if(!/^https?:\/\//i.test(u))u="https://"+u;try{new URL(u)}catch{throw new Error("Alamat web tidak valid.")}const r=await tfetch("https://r.jina.ai/"+u,{headers:{Accept:"text/plain"}});if(!r.ok)throw new Error("Halaman tidak bisa dibaca (kode "+r.status+").");tx=await r.text()}
tx=tx.replace(/\r/g,"").replace(/\n{3,}/g,"\n\n").trim();if(!tx)throw new Error("Isinya kosong.");return tx.slice(0,MAXE)}
catch(e){if(e&&e.name==="AbortError")throw new Error("Terlalu lama merespons. Coba lagi.");if(e instanceof TypeError)throw new Error("Tidak bisa terhubung. Cek internet Anda lalu coba lagi.");throw e}}
const defName=(t,s)=>{s=s.trim();if(t==="gh")return s.replace(/^https?:\/\/(www\.)?github\.com\//i,"").replace(/\.git$/,"").split("/").slice(0,2).join("/");if(t==="web"){try{return new URL(/^https?:\/\//i.test(s)?s:"https://"+s).hostname.replace(/^www\./,"")}catch{return s}}return s};
/* halaman */
let pg=null;function closeP(){pg&&(pg.remove(),pg=null)}window.bekkiCnClose=closeP;
const o1=window.bekkiOpen,o2=window.bekkiNew,o3=window.bekkiPrjOpen,o4=window.bekkiSkills;
window.bekkiOpen=t=>{closeP();return o1(t)};window.bekkiNew=()=>{closeP();return o2()};window.bekkiPrjOpen=id=>{closeP();o3&&o3(id)};window.bekkiSkills=()=>{closeP();o4&&o4()};
[$("newChat"),$("hist")].forEach(x=>x&&x.addEventListener("click",e=>{(x.id==="newChat"||e.target.closest(".hist-item"))&&closeP()},!0));
const SVG='<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>';
const fmt=n=>n.toLocaleString("id-ID"),LD=new Set();
function openP(){window.bekkiPrjClose&&window.bekkiPrjClose();window.bekkiSkClose&&window.bekkiSkClose();window.bekkiMmClose&&window.bekkiMmClose();window.bekkiGiClose&&window.bekkiGiClose();closeP();if(matchMedia("(max-width:768px)").matches&&SB)SB.classList.add("closed");
pg=el("div","pj");pg.id="cnPage";
const top=el("div","pj-top"),tg=el("button","icon-btn");tg.type="button";tg.setAttribute("aria-label","Sidebar");tg.style.color="var(--foreground)";tg.innerHTML=SVG;tg.onclick=e=>{e.stopPropagation();SB&&SB.classList.toggle("closed")};top.appendChild(tg);
const body=el("div","pj-body"),hd=el("div","pj-hd"),ic=el("span","pj-ic sk-ic");ic.innerHTML=PLUG;const nm=el("h2","pj-nm","Connectors"),nw=el("button","sk-new","+ Tambah");nw.type="button";nw.onclick=()=>dlg();hd.append(ic,nm,nw);
const sub=el("p","sk-sub","Hubungkan Bekki ke sumber informasi. Isi sumber yang aktif ikut dikirim sebagai konteks di setiap pesan, jadi matikan yang tidak dipakai.");const warn=el("p","cn-warn");warn.hidden=!0;const ls=el("div","sk-list");body.append(hd,sub,warn,ls);pg.append(top,body);main.appendChild(pg);window.__cnDraw=draw;if(C.length){window.bekkiSkelCards(ls,Math.min(4,C.length));setTimeout(()=>{ls.removeAttribute("aria-busy");draw()},450)}else draw();
function draw(){if(!pg)return;ls.textContent="";const tot=C.filter(c=>c.on).reduce((a,c)=>a+c.content.length,0);warn.hidden=tot<=MAXT;warn.textContent="Total sumber aktif ("+fmt(tot)+" karakter) melebihi batas "+fmt(MAXT)+". Sebagian isi akan dipotong; matikan sumber yang tidak perlu.";
if(!C.length){const em=el("div","pj-em");em.innerHTML=PLUG;em.append(el("div","pj-et","Belum ada sumber"),el("div","pj-es","Tambahkan catatan, repo GitHub, artikel Wikipedia, atau halaman web agar Bekki bisa menjawab berdasarkan isinya."));ls.appendChild(em);return}
C.forEach(c=>{if(LD.has(c.id)){const t=document.createElement("div");window.bekkiSkelCards(t,1);while(t.firstChild)ls.appendChild(t.firstChild);return}const k=el("div","sk-card"+(c.on?"":" off")),r=el("div","sk-row");r.appendChild(el("b","sk-n",c.name));r.appendChild(el("span","sk-tag",TY[c.type]));
const sw=el("button","sk-sw");sw.type="button";sw.setAttribute("role","switch");sw.setAttribute("aria-checked",c.on?"true":"false");sw.setAttribute("aria-label",(c.on?"Matikan ":"Aktifkan ")+c.name);sw.onclick=()=>{c.on=!c.on;save();draw()};r.appendChild(sw);
const d=el("p","sk-d",(c.type==="note"?"":c.src+" · ")+fmt(c.content.length)+" karakter"+(c.u?" · "+new Date(c.u).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):""));const a=el("div","sk-btns");
if(c.type==="note"){const ed=el("button","sk-btn","Edit");ed.type="button";ed.onclick=()=>dlg(c);a.appendChild(ed)}
else{const rf=el("button","sk-btn","Segarkan");rf.type="button";rf.onclick=async()=>{LD.add(c.id);draw();try{c.content=await pull(c);c.u=Date.now();save();toast("Diperbarui")}catch(e){toast(e.message)}LD.delete(c.id);draw()};a.appendChild(rf)}
const dl=el("button","sk-btn dg","Hapus");dl.type="button";dl.onclick=()=>window.bekkiConfirm("Hapus sumber ini?","“"+c.name+"” akan dihapus dari Connectors.","Hapus",()=>{C=C.filter(x=>x.id!==c.id);save();draw()});a.appendChild(dl);k.append(r,d,a);ls.appendChild(k)})}}
/* dialog */
function dlg(ed){if(document.querySelector(".cn-dl"))return;let type=ed?ed.type:"note";const bk=el("div","pd-back"),pn=el("div","pd pj-dl cn-dl");pn.setAttribute("role","dialog");pn.setAttribute("aria-modal","true");
const x=el("button","pj-dx");x.type="button";x.setAttribute("aria-label","Tutup");x.innerHTML=XI;pn.append(x,el("h3","pj-dt",ed?"Edit catatan":"Tambah sumber"));
const chips=el("div","pj-chips");const fm=el("div","cn-fm");let busy=!1;
const fields=()=>{fm.textContent="";chips.querySelectorAll(".pj-chip").forEach(b=>b.classList.toggle("on",b.dataset.t===type));
const lab=(t)=>fm.appendChild(el("div","sk-lb",t));const mk=(ph,v)=>{const i=el("input","sk-in");i.placeholder=ph;i.value=v||"";fm.appendChild(i);return i};
if(type==="note"){lab("Nama");var n1=mk("Contoh: Catatan kuliah",ed?ed.name:"");n1.maxLength=40;lab("Isi catatan");var ta=el("textarea");ta.rows=8;ta.maxLength=MAXE;ta.placeholder="Tempel teks yang ingin dijadikan sumber.";ta.value=ed?ed.content:"";fm.appendChild(ta);fm._g=()=>({name:n1.value.trim(),src:"",text:ta.value.trim()});fm._f=n1}
else{const cfg={gh:["Repo GitHub publik","owner/nama-repo atau tautan github.com/..."],wiki:["Judul artikel Wikipedia","Contoh: Algoritma Dijkstra"],web:["Alamat halaman web","https://..."]}[type];lab(cfg[0]);var i1=mk(cfg[1]);i1.inputMode=type==="web"?"url":"text";lab("Nama (opsional)");var n2=mk("Otomatis dari sumber");n2.maxLength=40;fm._g=()=>({name:n2.value.trim(),src:i1.value.trim()});fm._f=i1;
const hint=el("p","cn-hint",{gh:"Hanya README dari repo publik yang diambil.",wiki:"Isi artikel diambil dari Wikipedia (Indonesia, lalu Inggris jika tidak ada).",web:"Isi halaman dibaca lewat layanan r.jina.ai, jadi alamat ini dikirim ke pihak ketiga tersebut. Jangan pakai halaman yang privat."}[type]);fm.appendChild(hint)}};
if(!ed)Object.keys(TY).forEach(k=>{const b=el("button","pj-chip",TY[k]);b.type="button";b.dataset.t=k;b.onclick=()=>{if(busy)return;type=k;fields()};chips.appendChild(b)});
const sv=el("button","pj-save",ed?"Simpan":"Tambahkan");sv.type="button";sv.style.marginTop="22px";
sv.onclick=async()=>{if(busy)return;const g=fm._g();
if(type==="note"){if(!g.name||!g.text){toast("Nama dan isi wajib diisi");return}if(ed){ed.name=g.name;ed.content=g.text.slice(0,MAXE);ed.u=Date.now()}else C.unshift({id:"c"+Date.now().toString(36),type:"note",name:g.name,src:"",content:g.text.slice(0,MAXE),on:!0,u:Date.now()});save();end();window.__cnDraw&&window.__cnDraw();toast("Disimpan");return}
if(!g.src){toast("Isi sumbernya dulu");return}busy=!0;sv.disabled=!0;sv.textContent="Mengambil…";
try{const c={id:"c"+Date.now().toString(36),type,name:g.name||defName(type,g.src),src:g.src,on:!0,u:Date.now()};c.content=await pull(c);C.unshift(c);save();end();window.__cnDraw&&window.__cnDraw();toast("Sumber ditambahkan")}catch(e){toast(e.message);busy=!1;sv.disabled=!1;sv.textContent="Tambahkan"}};
if(!ed)pn.appendChild(chips);pn.append(fm,sv);fields();bk.appendChild(pn);document.body.appendChild(bk);
const kd=e=>{e.key==="Escape"&&(e.stopPropagation(),end())};function end(){document.removeEventListener("keydown",kd,!0);bk.classList.add("out");setTimeout(()=>bk.remove(),180)}
x.onclick=end;bk.addEventListener("pointerdown",e=>{e.target===bk&&end()});document.addEventListener("keydown",kd,!0);setTimeout(()=>fm._f&&fm._f.focus(),60)}
const it=document.querySelector('.ctx-it[data-soon="Connectors"]');it&&it.addEventListener("click",e=>{e.stopPropagation();openP()})})();

/* keyboard: kolom chat ikut naik di chat; di halaman New chat tetap diam */
(()=>{const vv=window.visualViewport;if(!vv)return;const r=document.documentElement;let raf=0,full=window.innerHeight,fw=window.innerWidth;
const home=()=>!!document.querySelector(".main.home");
const clr=()=>{["--vvh","--vvt","--hfix"].forEach(k=>r.style.removeProperty(k));r.classList.remove("kb","kb-home")};
const upd=()=>{raf=0;if(window.innerWidth!==fw){fw=window.innerWidth;full=Math.max(window.innerHeight,vv.height)}
const kb=vv.height<full-120;
if(!kb){clr();if(window.innerHeight>full-60)full=Math.max(full,window.innerHeight);return}
if(home()){r.classList.remove("kb");r.style.removeProperty("--vvh");r.style.removeProperty("--vvt");r.style.setProperty("--hfix",full+"px");r.classList.add("kb-home")}
else{r.classList.remove("kb-home");r.style.removeProperty("--hfix");r.style.setProperty("--vvh",Math.round(vv.height)+"px");r.style.setProperty("--vvt",Math.round(vv.offsetTop)+"px");r.classList.add("kb")}
window.scrollTo(0,0)};
const sch=()=>{raf||(raf=requestAnimationFrame(upd))};vv.addEventListener("resize",sch);vv.addEventListener("scroll",sch);window.addEventListener("resize",sch);window.addEventListener("orientationchange",()=>setTimeout(()=>{full=window.innerHeight;upd()},400));
document.addEventListener("focusin",e=>{e.target&&e.target.matches&&e.target.matches("textarea,input")&&setTimeout(upd,250)});
const mn=document.querySelector(".main");mn&&new MutationObserver(sch).observe(mn,{attributes:!0,attributeFilter:["class"]})})();

/* skeleton muncul sebentar saat kembali ke website */
(()=>{let t0=0,tm=0;const r=document.documentElement,MIN=2000,SHOW=900;
const hide=()=>{t0=Date.now()};
const back=()=>{if(!t0||Date.now()-t0<MIN||!r.classList.contains("auth-ok"))return;t0=0;try{window.__sklFit&&window.__sklFit(window.bekkiCur&&window.bekkiCur())}catch{}r.classList.add("skl-on");clearTimeout(tm);tm=setTimeout(()=>r.classList.remove("skl-on"),SHOW)};
document.addEventListener("visibilitychange",()=>document.hidden?hide():back());
window.addEventListener("pagehide",hide);window.addEventListener("pageshow",e=>{e.persisted&&back()})})();

/* Memori */
(()=>{const $=id=>document.getElementById(id);const main=document.querySelector(".main"),SB=$("sidebar");if(!main)return;
const KEY="bekki_mem_v1",MAXI=300,MAXN=50,MAXC=2000;
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
const toast=m=>{const o=document.querySelector(".at-toast");o&&o.remove();const d=el("div","at-toast",m);document.body.appendChild(d);setTimeout(()=>{d.classList.add("out");setTimeout(()=>d.remove(),300)},2200)};
const XI='<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',BR='<svg viewBox="0 0 24 24"><path d="M9.5 3A3.5 3.5 0 0 0 6 6.5v.2A3.5 3.5 0 0 0 4 10a3.5 3.5 0 0 0 1.3 2.7A3.5 3.5 0 0 0 6 17a3.5 3.5 0 0 0 3.5 3A2.5 2.5 0 0 0 12 17.5V5.5A2.5 2.5 0 0 0 9.5 3zM14.5 3A3.5 3.5 0 0 1 18 6.5v.2A3.5 3.5 0 0 1 20 10a3.5 3.5 0 0 1-1.3 2.7A3.5 3.5 0 0 1 18 17a3.5 3.5 0 0 1-3.5 3 2.5 2.5 0 0 1-2.5-2.500"/></svg>';
let M={on:!0,list:[]};try{const j=JSON.parse(localStorage.getItem(KEY)||"{}");M.on=j.on!==!1;M.list=Array.isArray(j.list)?j.list.filter(x=>x&&x.id&&x.t):[]}catch{}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(M))}catch{}};
/* konteks yang dikirim ke AI */
const P2=window.bekkiPrjCtx;window.bekkiPrjCtx=()=>{const base=P2?P2():"";if(!M.on||!M.list.length)return base;let n=0,o="";for(const x of [...M.list].sort((a,b)=>(b.u||0)-(a.u||0))){const ln="- "+x.t+"\n";if(n+ln.length>MAXC)break;n+=ln.length;o+=ln}if(!o)return base;return "[Memori tentang pengguna, pakai bila relevan]\n"+o+"\n"+(base||"[Pesan pengguna]\n")};
/* halaman */
let pg=null;function closeP(){pg&&(pg.remove(),pg=null)}window.bekkiMmClose=closeP;
const o1=window.bekkiOpen,o2=window.bekkiNew,o3=window.bekkiPrjOpen,o4=window.bekkiSkills;
window.bekkiOpen=t=>{closeP();return o1(t)};window.bekkiNew=()=>{closeP();return o2()};window.bekkiPrjOpen=id=>{closeP();o3&&o3(id)};window.bekkiSkills=()=>{closeP();o4&&o4()};
[$("newChat"),$("hist")].forEach(x=>x&&x.addEventListener("click",e=>{(x.id==="newChat"||e.target.closest(".hist-item"))&&closeP()},!0));
const SVG='<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>';
const dts=u=>u?new Date(u).toLocaleDateString("id-ID",{day:"numeric",month:"short"}):"";
function skel(ls,n){ls.textContent="";ls.setAttribute("aria-busy","true");const b=(st,c)=>{const i=document.createElement("i");i.className="sh-b "+(c||"");i.style.cssText=st;return i};for(let k=0;k<n;k++){const c=el("div","sk-card sh-card");c.setAttribute("aria-hidden","true");const bt=el("div","sk-btns");bt.append(b("width:64px;height:36px;border-radius:10px"),b("width:64px;height:36px;border-radius:10px"));c.append(b("width:92%;height:13px"),b("width:"+(40+(k*17)%40)+"%;height:13px;margin-top:9px"),bt);ls.appendChild(c)}}
function openP(){window.bekkiPrjClose&&window.bekkiPrjClose();window.bekkiSkClose&&window.bekkiSkClose();window.bekkiCnClose&&window.bekkiCnClose();window.bekkiGiClose&&window.bekkiGiClose();closeP();if(matchMedia("(max-width:768px)").matches&&SB)SB.classList.add("closed");
pg=el("div","pj");pg.id="mmPage";
const top=el("div","pj-top"),tg=el("button","icon-btn");tg.type="button";tg.setAttribute("aria-label","Sidebar");tg.style.color="var(--foreground)";tg.innerHTML=SVG;tg.onclick=e=>{e.stopPropagation();SB&&SB.classList.toggle("closed")};top.appendChild(tg);
const body=el("div","pj-body"),hd=el("div","pj-hd"),ic=el("span","pj-ic sk-ic");ic.innerHTML=BR;const nm=el("h2","pj-nm","Memori"),nw=el("button","sk-new","+ Tambah");nw.type="button";nw.onclick=()=>dlg();hd.append(ic,nm,nw);
const sub=el("p","sk-sub","Bekki mengingat hal-hal yang Anda simpan di sini dan memakainya di setiap chat. Data hanya tersimpan di browser ini.");
const sw=el("div","pj-card pj-cx"),tx=el("div","pj-cxt");tx.append(el("div","pj-sl","Gunakan memori"),el("div","pj-sv","Matikan untuk sementara tanpa menghapus isinya."));const sb=el("button","sk-sw");sb.type="button";sb.setAttribute("role","switch");sb.setAttribute("aria-label","Gunakan memori");const sync=()=>sb.setAttribute("aria-checked",M.on?"true":"false");sync();sb.onclick=()=>{M.on=!M.on;save();sync();draw()};sw.append(tx,sb);sw.onclick=e=>{e.target.closest(".sk-sw")||sb.click()};sw.style.cursor="pointer";
const ls=el("div","sk-list");body.append(hd,sub,sw,ls);pg.append(top,body);main.appendChild(pg);window.__mmDraw=draw;
if(M.list.length){skel(ls,Math.min(4,M.list.length));setTimeout(()=>{ls.removeAttribute("aria-busy");draw()},450)}else draw();
function draw(){if(!pg)return;sync();ls.textContent="";const L=[...M.list].sort((a,b)=>(b.u||0)-(a.u||0));
if(!L.length){const em=el("div","pj-em");em.innerHTML=BR;em.append(el("div","pj-et","Belum ada memori"),el("div","pj-es","Tambahkan hal yang perlu Bekki ingat, misalnya: “Nama saya Orbit” atau “Saya suka jawaban singkat dan santai”."));ls.appendChild(em);return}
L.forEach(x=>{const c=el("div","sk-card"+(M.on?"":" off")),t=el("p","mm-t",x.t),m=el("p","sk-d",dts(x.u)),a=el("div","sk-btns");
const ed=el("button","sk-btn","Edit");ed.type="button";ed.onclick=()=>dlg(x);const dl=el("button","sk-btn dg","Hapus");dl.type="button";dl.onclick=()=>{M.list=M.list.filter(y=>y.id!==x.id);save();draw();toast("Memori dihapus")};a.append(ed,dl);c.append(t,m,a);ls.appendChild(c)});
const all=el("button","pj-btn mm-all","Hapus semua memori");all.type="button";all.onclick=()=>window.bekkiConfirm("Hapus semua memori?","Semua "+L.length+" memori akan dihapus dan tidak bisa dikembalikan.","Hapus",()=>{M.list=[];save();draw()});ls.appendChild(all)}}
function dlg(ed){if(document.querySelector(".mm-dl"))return;if(!ed&&M.list.length>=MAXN){toast("Maksimal "+MAXN+" memori. Hapus yang lama dulu.");return}
const bk=el("div","pd-back"),pn=el("div","pd pj-dl mm-dl");pn.setAttribute("role","dialog");pn.setAttribute("aria-modal","true");
const x=el("button","pj-dx");x.type="button";x.setAttribute("aria-label","Tutup");x.innerHTML=XI;
const ta=el("textarea");ta.maxLength=MAXI;ta.placeholder="Contoh: Nama saya Orbit, saya pelajar yang suka coding Python.";ta.value=ed?ed.t:"";
const cnt=el("div","mm-cnt"),upd=()=>{cnt.textContent=ta.value.length+" / "+MAXI};ta.oninput=upd;upd();
const sv=el("button","pj-save",ed?"Simpan":"Tambahkan");sv.type="button";sv.style.marginTop="18px";
sv.onclick=()=>{const v=ta.value.replace(/\s+/g," ").trim();if(!v){toast("Isi memorinya dulu");return}if(ed){ed.t=v.slice(0,MAXI);ed.u=Date.now()}else M.list.push({id:"m"+Date.now().toString(36),t:v.slice(0,MAXI),u:Date.now()});save();end();window.__mmDraw&&window.__mmDraw();toast("Memori disimpan")};
pn.append(x,el("h3","pj-dt",ed?"Edit memori":"Tambah memori"),ta,cnt,sv);bk.appendChild(pn);document.body.appendChild(bk);
const kd=e=>{e.key==="Escape"&&(e.stopPropagation(),end())};function end(){document.removeEventListener("keydown",kd,!0);bk.classList.add("out");setTimeout(()=>bk.remove(),180)}
x.onclick=end;bk.addEventListener("pointerdown",e=>{e.target===bk&&end()});document.addEventListener("keydown",kd,!0);setTimeout(()=>ta.focus(),60)}
const it=document.querySelector('.ctx-it[data-soon="Memori"]');it&&it.addEventListener("click",e=>{e.stopPropagation();openP()})})();

/* Instruksi umum */
(()=>{const $=id=>document.getElementById(id);const main=document.querySelector(".main"),SB=$("sidebar");if(!main)return;
const KEY="bekki_gi_v1",MAXI=1500;
const el=(t,c,x)=>{const e=document.createElement(t);c&&(e.className=c);x!=null&&(e.textContent=x);return e};
const toast=m=>{const o=document.querySelector(".at-toast");o&&o.remove();const d=el("div","at-toast",m);document.body.appendChild(d);setTimeout(()=>{d.classList.add("out");setTimeout(()=>d.remove(),300)},2200)};
const TN=[["","Default","Seimbang dan natural."],["professional","Profesional","Rapi, presisi, terstruktur."],["empathetic","Empatik","Hangat dan suportif."],["direct","Langsung","Singkat dan jelas."]];
const TI={professional:"Jawab dengan nada profesional, rapi dan presisi.",empathetic:"Jawab dengan nada empatik, hangat dan suportif.",direct:"Jawab langsung, jelas dan ringkas."};
const EX=[["Singkat","Jawab singkat dan to the point."],["Santai","Pakai bahasa santai dan ramah."],["Beri contoh","Sertakan contoh bila membantu."],["Bahasa Indonesia","Selalu jawab dalam Bahasa Indonesia."]];
let G={tone:"",ins:""};try{const j=JSON.parse(localStorage.getItem(KEY)||"{}");G.tone=TI[j.tone]?j.tone:"";G.ins=typeof j.ins==="string"?j.ins.slice(0,MAXI):""}catch{}
const persist=()=>{try{localStorage.setItem(KEY,JSON.stringify(G))}catch{}};
const P2=window.bekkiPrjCtx;window.bekkiPrjCtx=()=>{const base=P2?P2():"";let o="";if(G.tone&&!base.includes("[Nada jawaban]"))o+="[Nada jawaban]\n"+TI[G.tone]+"\n\n";if(G.ins.trim())o+="[Instruksi umum dari pengguna]\n"+G.ins.trim()+"\n\n";if(!o)return base;return o+(base||"[Pesan pengguna]\n")};
let pg=null;function closeP(){pg&&(pg.remove(),pg=null)}window.bekkiGiClose=closeP;
const o1=window.bekkiOpen,o2=window.bekkiNew,o3=window.bekkiPrjOpen,o4=window.bekkiSkills;
window.bekkiOpen=t=>{closeP();return o1(t)};window.bekkiNew=()=>{closeP();return o2()};window.bekkiPrjOpen=id=>{closeP();o3&&o3(id)};window.bekkiSkills=()=>{closeP();o4&&o4()};
[$("newChat"),$("hist")].forEach(x=>x&&x.addEventListener("click",e=>{(x.id==="newChat"||e.target.closest(".hist-item"))&&closeP()},!0));
const SVG='<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>';
const IC='<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h13"/><circle cx="19" cy="12" r="1.6"/></svg>';
function openP(){window.bekkiPrjClose&&window.bekkiPrjClose();window.bekkiSkClose&&window.bekkiSkClose();window.bekkiCnClose&&window.bekkiCnClose();window.bekkiMmClose&&window.bekkiMmClose();closeP();if(matchMedia("(max-width:768px)").matches&&SB)SB.classList.add("closed");
pg=el("div","pj");pg.id="giPage";let tone=G.tone;
const top=el("div","pj-top"),tg=el("button","icon-btn");tg.type="button";tg.setAttribute("aria-label","Sidebar");tg.style.color="var(--foreground)";tg.innerHTML=SVG;tg.onclick=e=>{e.stopPropagation();SB&&SB.classList.toggle("closed")};top.appendChild(tg);
const body=el("div","pj-body"),hd=el("div","pj-hd"),ic=el("span","pj-ic sk-ic");ic.innerHTML=IC;hd.append(ic,el("h2","pj-nm","Instruksi umum"));
const sub=el("p","sk-sub","Berlaku untuk semua chat. Instruksi di dalam proyek tetap diutamakan untuk chat proyek itu. Data hanya tersimpan di browser ini.");
const card=el("div","pj-card gi-card");
card.append(el("div","pj-dl1","Nada jawaban"));
const tw=el("div","gi-tones"),tdesc=el("div","pj-sd");
const mark=()=>{[...tw.children].forEach((b,i)=>{const on=TN[i][0]===tone;b.classList.toggle("on",on);b.setAttribute("aria-checked",on?"true":"false")});tdesc.textContent=(TN.find(a=>a[0]===tone)||TN[0])[2]};
TN.forEach(a=>{const b=el("button","gi-tone",a[1]);b.type="button";b.setAttribute("role","radio");b.onclick=()=>{tone=a[0];mark();chk()};tw.appendChild(b)});tw.setAttribute("role","radiogroup");
const l2=el("div","pj-dl1","Instruksi tambahan");l2.style.marginTop="18px";
const ta=el("textarea");ta.maxLength=MAXI;ta.value=G.ins;ta.placeholder="Contoh: Panggil saya Orbit. Jawab singkat dan santai.";
const chips=el("div","pj-chips");EX.forEach(c=>{const b=el("button","pj-chip");b.type="button";b.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';b.append(c[0]);b.onclick=()=>{if(ta.value.includes(c[1]))return;ta.value=((ta.value.trim()?ta.value.trim()+" ":"")+c[1]).slice(0,MAXI);ta.dispatchEvent(new Event("input"));ta.focus()};chips.appendChild(b)});
const rs=el("button","pj-chip pj-rs");rs.type="button";rs.setAttribute("aria-label","Kosongkan");rs.title="Kosongkan";rs.innerHTML='<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5"/></svg>';rs.onclick=()=>{ta.value="";ta.dispatchEvent(new Event("input"));ta.focus()};chips.appendChild(rs);
const cnt=el("div","mm-cnt");
const sv=el("button","pj-save","Simpan");sv.type="button";sv.style.marginTop="16px";
function chk(){cnt.textContent=ta.value.length+" / "+MAXI;sv.disabled=tone===G.tone&&ta.value===G.ins;sv.style.opacity=sv.disabled?".45":""}
ta.oninput=chk;sv.onclick=()=>{G.tone=tone;G.ins=ta.value.trim();ta.value=G.ins;persist();chk();toast("Instruksi umum disimpan")};
card.append(tw,tdesc,l2,ta,chips,cnt,sv);body.append(hd,sub,card);pg.append(top,body);main.appendChild(pg);mark();chk()}
const it=document.querySelector('.ctx-it[data-soon="Instruksi umum"]');it&&it.addEventListener("click",e=>{e.stopPropagation();openP()})})();
