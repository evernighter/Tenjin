const CACHE_NAME = 'sailor-fukuoka-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;500;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
