import { initRouter } from './src/router.js';
import './src/components/views/game-page/game-page.js';
import './src/components/views/login-page/login-page.js';

window.addEventListener('load', () => {
  initRouter(document.querySelector('#app'));
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-workers.js').then((registration) => {
      console.log('ServiceWorker registered: ', registration);
    }).catch((registrationError) => {
      console.log('ServiceWorker registration failed: ', registrationError);
    });
  });
}