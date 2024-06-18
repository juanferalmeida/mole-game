import { initRouter } from './src/router.js';
import './src/components/views/game-page/game-page.js';
import './src/components/views/login-page/login-page.js';

window.addEventListener('load', () => {
  initRouter(document.querySelector('#app'));
});

