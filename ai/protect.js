/* protect.js: penghalang ringan untuk pintasan "lihat sumber" dan DevTools di keyboard.
   Hanya menyulitkan orang awam, BUKAN pengaman. Jangan taruh rahasia (key/password) di file mana pun
   yang dikirim ke browser. Pasang di halaman mana pun dengan: <script src="protect.js"></script> */
(function () {
  addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase();
    var c = e.ctrlKey || e.metaKey;
    var blok =
      e.key === "F12" ||
      (c && (k === "u" || k === "s")) ||
      (c && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
      (e.metaKey && e.altKey && (k === "i" || k === "j" || k === "u"));
    if (blok) e.preventDefault();
  }, true);
})();
