import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import UserDataContext from 'context/store';

import 'index.css';
import reportWebVitals from 'reportWebVitals';

import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDataContext>
        <App />
      </UserDataContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
