const CACHE_NAME = "a5x-cache-v1";

// Static files (React build)
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/A5Xlogo.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  clients.claim();
});

self.addEventListener("fetch", (event) => {
  // ❌ backend API ko cache mat karo
  if (event.request.url.includes("onrender.com")) {
    return;
  }

  // ✅ Cache-first strategy
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
