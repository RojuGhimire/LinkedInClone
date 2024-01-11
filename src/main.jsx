import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter or HashRouter here
import { router } from './Routes';
import { app } from './FirebaseConfig';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider router={router} /> {/* Replace RouterProvider with BrowserRouter or HashRouter */}
    </BrowserRouter>
  </React.StrictMode>
);
