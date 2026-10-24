/* protect.js: penghalang ringan (bukan pengaman). Menutup pintasan "lihat sumber"/DevTools dan zoom layar,
   serta memulihkan tema gelap/terang lebih awal supaya layar tidak berkedip. */
(function () {
  try {
    var t = localStorage.getItem("bekki_tema");
    var d = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", d);
  } catch (e) {}

  addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase();
    var c = e.ctrlKey || e.metaKey;
    var blok =
      e.key === "F12" ||
      (c && (k === "u" || k === "s")) ||
      (c && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
      (e.metaKey && e.altKey && (k === "i" || k === "j" || k === "u")) ||
      (c && (k === "+" || k === "=" || k === "-" || k === "_" || k === "0"));
    if (blok) e.preventDefault();
  }, true);

  addEventListener("wheel", function (e) {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });

  ["gesturestart", "gesturechange", "gestureend"].forEach(function (n) {
    addEventListener(n, function (e) { e.preventDefault(); });
  });

  addEventListener("touchmove", function (e) {
    if (e.touches && e.touches.length > 1) e.preventDefault();
  }, { passive: false });
})();
