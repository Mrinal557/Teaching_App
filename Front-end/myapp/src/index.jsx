import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
const root = ReactDOM.createRoot(document.getElementById('root'));
// prices are written in Subscribe.tsx and SubscriptionController.js
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
