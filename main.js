// Make sure SW are supported//
if
('serviceWorker' in navigator){
    window.addEventListener('load', ()=> {
        navigator.serviceWorker
        .register('/the_cached_site.js') 
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log('Service Worker: Error:${err}'))
      });
}
