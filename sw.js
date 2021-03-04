self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/WEBAPP_KMMD/',
      '/WEBAPP_KMMD/index.html',
      '/WEBAPP_KMMD/index.js',
      '/WEBAPP_KMMD/estilo.css',
      '/WEBAPP_KMMD/images/img1.jpg',
      '/WEBAPP_KMMD/images/img2.jpg',
      '/WEBAPP_KMMD/images/img3.jpg',
      '/WEBAPP_KMMD/images/img4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}
                     );
