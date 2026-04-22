const CACHE_NAME = 'recipe-app-v1';
const urlsToCache = [
  '/recipe-app/index.html',
  '/recipe-app/manifest.json',
  '/recipe-app/icon-192.png',
  '/recipe-app/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
