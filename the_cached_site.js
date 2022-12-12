let cacheVersion = 1
let cacheName = "web-workr-cache-"+cacheVersion
const pageToSave = "index.html"

// Installing service worker
this.addEventListener('install', event => {
    console.log("Installing service worker");
  
    event.waitUntil(caches.open(cacheName)
    .then((openCache) => {
        return openCache.add(pageToSave)
    })
    .catch(err => console.log(err)))
})





self.addEventListener('activate', e => {
console.log('Activation!');
});
