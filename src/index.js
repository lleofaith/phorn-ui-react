import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PhotoContextProvider } from './context/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhotoContextProvider>
      <App />
    </PhotoContextProvider>
  </React.StrictMode>
);

