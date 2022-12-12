// Registering. Should be in the JS file contained in the html files.
window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('../worker.js')
    .then(_ => console.log('Registered service worker'))
    .catch(e => console.log('Error registering: ',e));
});
