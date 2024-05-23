const CACHE_NAME = 'mole-game-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/css/main.css',
  '/main.js',
  '/src/components/elements/game-counter/game-counter.js',
  '/src/components/elements/level-game/level-game.js',
  '/src/components/elements/link-button/link-button.js',
  '/src/components/elements/menu-bar/menu-bar.js',
  '/src/components/elements/mole-circle/mole-circle.js',
  '/src/components/elements/mole-game/mole-game.js',
  '/src/components/elements/user-form/user-form.js',
  '/src/components/views/game-page/game-page.js',
  '/src/components/views/login-page/login-page.js',
  '/src/router.js',
  '/assets/mouse.png',
  '/assets/logout.png',
  '/assets/burger-bar.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Error al abrir el caché: ', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});