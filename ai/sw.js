/* Bekki service worker: selalu ambil versi terbaru dari server (network-first).
   Cache hanya dipakai kalau sedang offline. */
const C = "bekki-cache";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return; /* Supabase, font, logo: biarkan langsung ke jaringan */
  e.respondWith(
    fetch(r, { cache: "no-store" })
      .then((res) => {
        if (res && res.ok) {
          const cp = res.clone();
          caches.open(C).then((c) => c.put(r, cp)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(r).then((m) => m || caches.match("./")))
  );
});
