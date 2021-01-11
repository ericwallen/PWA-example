
// only happens once 
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./', 'images/logo-192.png'])
        })
    )
})


self.addEventListener('fetch', e => {
    console.log(`Intercepting fetch request`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})