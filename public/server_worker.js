const CACHE_NAME = "a5x-cache-v5";

// Core files to pre-cache
const OFFLINE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/A5Xlogo.jpg",
];

// Install: pre-cache core files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete ALL old caches (including stale video caches)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Fetch handler
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 1. Skip non-GET requests entirely — POST, PUT, DELETE etc. cannot be cached
  if (request.method !== "GET") return;

  // 2. Skip backend API calls
  if (url.hostname.includes("onrender.com")) return;

  // 3. Skip video files — serve directly from network, never cache
  if (url.pathname.endsWith(".mp4") || url.pathname.endsWith(".webm")) return;

  // 4. Skip external scripts (analytics, clarity, google etc.)
  if (!url.hostname.includes(self.location.hostname) &&
      !url.hostname.includes("localhost")) return;

  // 5. Navigation requests — network first, fallback to index.html
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html"))
    );
    return;
  }

  // 6. Static assets — cache first, update in background
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request).then((response) => {
        // Only cache valid same-origin GET responses
        if (
          response.ok &&
          response.status === 200 &&
          response.type !== "opaque"
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      });
      return cached || networkFetch;
    })
  );
});
