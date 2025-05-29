import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const originalDefine = window.customElements.define;
window.customElements.define = function (name, constructor, options) {
  if (!customElements.get(name)) {
    originalDefine.call(this, name, constructor, options);
  } else {
    console.info(`Custom element ${name} already defined, skipping registration`);
  }
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
