// service-worker.js

const CACHE_NAME = '2023-11-27-lab files';
const urlsToCache = [
  '/',
  '/index.html',
  '/signin.html',
  '/signup.html',
  '/userInfo.html',
  '/verification.js',
  '/app.js',

];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
