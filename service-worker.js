const CACHE_NAME = 'traza-co2-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  // Si tienes archivos de script o estilo externos (por ejemplo, Chart.js descargado localmente):
  // './TRAZA__CO2 _ KPIs, Normativa y Ayudas de Transporte Sostenible_files/chart.umd.min.js.descarga',
  // Pero en tu HTML ya lo cargas como local './...', así que no hace falta listarlo explícitamente si está en el mismo nivel.
  './icons/icon-192.png',
  './icons/icon-512.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Cacheando archivos principales');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Eliminando cache antigua', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});