const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    // Thêm các tệp khác nếu cần
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
