import React from 'react';
import ReactDOM from 'react-dom/client'; // Bagong import sa React 18
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Gumamit ng createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
