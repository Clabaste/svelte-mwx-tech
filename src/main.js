import './app.scss'
import App from './App.svelte'

import { worker } from './mocks/browser';
if (import.meta.env.DEV) {
  worker.start();
}

const app = new App({
  target: document.getElementById('app'),
})


export default app
