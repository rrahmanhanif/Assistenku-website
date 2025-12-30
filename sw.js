/* sw.js — Assistenku PWA (safe static caching) */
const CACHE_VERSION = "assistenku-web-v1";
const STATIC_CACHE = `${CACHE_VERSION}-static`;

// Core assets yang aman di-cache untuk website
const CORE = [
  "/",
  "/styles.css",
  "/script.js",
  "/logo.png",
  "/manifest.webmanifest",
  "/offline.html",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png"
];

// OPTIONAL: tambah halaman utama agar cepat tersedia offline setelah pernah dibuka
const PAGES = [
  "/",
  "/index.html",
  "/profil.html",
  "/layanan.html",
  "/karir.html",
  "/kontak.html",
  "/kompro.html",
  "/serviceofferings.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll([...new Set([...CORE, ...PAGES])]))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== STATIC_CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // only same-origin
  if (url.origin !== self.location.origin) return;

  // Navigasi halaman: network-first, fallback cache, lalu offline
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(STATIC_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cache = await caches.open(STATIC_CACHE);
          return (await cache.match(req)) || (await cache.match("/")) || (await cache.match("/offline.html"));
        })
    );
    return;
  }

  // Asset statis: cache-first
  const isStatic =
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".webmanifest") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.startsWith("/assets/icons/") ||
    url.pathname.endsWith(".pdf");

  if (isStatic) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(STATIC_CACHE).then((c) => c.put(req, copy));
          return res;
        });
      })
    );
  }
});
