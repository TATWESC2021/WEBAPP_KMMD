self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('sponge-store').then((cache) => cache.addAll([
      '/pwa-examples/a2hs/',
      '/pwa-examples/a2hs/index.html',
      '/pwa-examples/a2hs/index.js',
      '/pwa-examples/a2hs/style.css',
      '/pwa-examples/a2hs/imagen/img1.jpg',
      '/pwa-examples/a2hs/imagen/img2.jpg',
      '/pwa-examples/a2hs/imagen/img3.jpg',
      '/pwa-examples/a2hs/imagen/img4.jpg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
