const CACHE_NAME = 'anatomy-quiz-v3';

// App shell — pre-cached on install
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './questions.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// Install: cache app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first, but also cache images on first fetch for offline use
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache images automatically as they're loaded
        if (response.ok && event.request.url.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
