// Registering. Should be in the JS file contained in the html files.
window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('../the_cached_site.js')
    .then(_ => console.log('Registered service worker'))
    .catch(e => console.log('Error registering: ',e));
});
