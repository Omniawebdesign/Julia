const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ])
  );
});




self.addEventListener('activate', e => {
console.log('Activation!');
});





// Fetching resource
this.addEventListener('fetch', event => {
    console.log("Fetching with service worker");
    if(event.request.mode === 'navigate'){
        event.respondWith(
            fetch(event.request.url)
            .catch(_ => {
                return caches.match(pageToSave)
            })
        )
    }
})
