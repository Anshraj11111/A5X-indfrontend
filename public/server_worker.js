self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Backend API (Render) ko touch mat karo
  if (event.request.url.includes("onrender.com")) {
    return;
  }
});
