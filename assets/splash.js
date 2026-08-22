/*
  Splash / Loading Screen — file terpisah, dipakai bareng di banyak halaman.

  CARA PAKAI di tiap halaman HTML:
  1. Taruh baris ini PALING ATAS, tepat setelah tag <body>:
       <script src="/assets/splash.js"></script>
  2. Setelah konten halaman itu selesai dimuat (misal setelah fetch data,
     cek login, dsb), panggil:
       hidePageSplash();

  Halaman login & daftar sengaja TIDAK dipasangi ini.
*/
(function () {
  var splash = document.createElement('div');
  splash.id = 'pageSplash';
  splash.style.cssText =
    'position:fixed;inset:0;z-index:999999;background:#000;' +
    'display:flex;align-items:center;justify-content:center;padding:0 24px;' +
    'transition:opacity .35s ease;';

  splash.innerHTML =
    '<div style="width:60%;max-width:320px;text-align:center;">' +
      '<div style="position:relative;width:100%;height:6px;border-radius:999px;overflow:hidden;background:rgba(255,255,255,.15);">' +
        '<div style="position:absolute;top:0;left:0;height:100%;width:60%;border-radius:999px;background:#e5e5e5;animation:_splashLoading 1.7s cubic-bezier(.45,0,.55,1) infinite;will-change:transform;"></div>' +
      '</div>' +
      '<div style="margin-top:20px;color:rgba(255,255,255,.45);font-size:13px;letter-spacing:.3px;">Memuat...</div>' +
    '</div>';

  var style = document.createElement('style');
  style.textContent = '@keyframes _splashLoading{0%{transform:translateX(-100%)}100%{transform:translateX(220%)}}';
  document.head.appendChild(style);
  document.body.appendChild(splash);

  window.hidePageSplash = function () {
    var el = document.getElementById('pageSplash');
    if (!el) return;
    el.style.opacity = '0';
    setTimeout(function () { el.remove(); }, 350);
  };
})();
