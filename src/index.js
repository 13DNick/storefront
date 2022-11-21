import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//vercel audience analytics
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
