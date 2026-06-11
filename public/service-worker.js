// const CACHE_NAME = "a5x-cache-v1";

// // Static files (React build)
// const STATIC_ASSETS = [
//   "/",
//   "/index.html",
//   "/manifest.json",
//   "/A5Xlogo.jpg"
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(STATIC_ASSETS);
//     })
//   );
//   self.skipWaiting();
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((keys) =>
//       Promise.all(
//         keys.map((key) => {
//           if (key !== CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       )
//     )
//   );
//   clients.claim();
// });

// self.addEventListener("fetch", (event) => {
//   // ❌ backend API ko cache mat karo
//   if (event.request.url.includes("onrender.com")) {
//     return;
//   }

//   // ✅ Cache-first strategy
//   event.respondWith(
//     caches.match(event.request).then((cached) => {
//       return cached || fetch(event.request);
//     })
//   );
// });
const CACHE_NAME = "a5x-cache-v3";

// Files that must be available offline
const OFFLINE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/A5Xlogo.jpg"
];

// Install: cache core files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  clients.claim();
});

// Fetch: offline-first for frontend
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // ❌ backend API skip
  if (request.url.includes("onrender.com")) return;

  // ✅ navigation (React routing)
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html"))
    );
    return;
  }

  // ✅ cache-first for assets
  event.respondWith(
    caches.match(request).then((cached) => {
      return (
        cached ||
        fetch(request).then((response) => {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, resClone);
          });
          return response;
        })
      );
    })
  );
});
