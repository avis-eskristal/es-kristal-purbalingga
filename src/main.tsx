// Safeguard to prevent crashes from third-party polyfills attempting to overwrite window.fetch
try {
  const originalFetch = window.fetch;
  if (originalFetch) {
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: originalFetch
    });
  }
} catch (e) {
  try {
    const proto = Object.getPrototypeOf(window);
    let protoFetch = window.fetch;
    Object.defineProperty(proto, 'fetch', {
      get: () => protoFetch,
      set: (val) => { protoFetch = val; },
      configurable: true
    });
  } catch (err) {
    console.warn('Fetch safeguard failed to apply in React bundle:', err);
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
