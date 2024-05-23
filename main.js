import { initRouter } from './src/router.js';
import './src/components/views/game-page/game-page.js';
import './src/components/views/login-page/login-page.js';
import './src/router.js';

window.addEventListener('load', () => {
  initRouter(document.querySelector('#app'));
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(res => console.log('Service worker registered'))
      .catch(err => console.log('Service worker not registered', err));
  });
}

