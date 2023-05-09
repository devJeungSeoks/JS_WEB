import React from 'react';
import ReactDOM from 'react-dom/client';

import UserDataContext from 'context/store';
import { RouterProvider } from 'react-router-dom';
import router from 'route';
//css
import 'index.css';

//cmponents
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDataContext>
      <RouterProvider router={router}>
      </RouterProvider>
    </UserDataContext>
  </React.StrictMode>
);
