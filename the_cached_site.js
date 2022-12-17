let cacheVersion = 1
let cacheName = "web-workr-cache-"+cacheVersion
const pageToSave = ['juliacontact.html','stylesjulia.css','core-styles.css', 'index.html'];

// Installing service worker
this.addEventListener('install', event => {
    console.log("Installing service worker");
  
    event.waitUntil(caches.open(cacheName)
    .then((openCache) => {
        return openCache.addAll(pageToSave)
    })
    .catch(err => console.log(err)))
})

     


     
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


// On install, cache some stuff
self.addEventListener('install', function (event) {

	// Activate right away
	self.skipWaiting();

	// Cache your core stuff...
	event.waitUntil(caches.open(coreID).then(function (cache) {
		cache.add(new Request('/offline/'));
		// ...
		return cache;
	}));

});

