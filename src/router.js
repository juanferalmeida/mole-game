import { Router } from '@vaadin/router';
import './components/views/game-page/game-page.js'
import './components/views/login-page/login-page.js';

export function initRouter(container) {
  const router = new Router(container);
  router.setRoutes([
    { path: '/', component: 'login-page' },
    { path: '/game', component: 'game-page' },
    { path: '(.*)', redirect: '/' } 
  ]);
}

