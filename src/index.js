import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BrowserRoute from './BrowserRoutes/BrowserRoute.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRoute>
        <App />
    </BrowserRoute>
    
);