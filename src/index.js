import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './Features/userSlice';
import App from './App';
import { Provider } from 'react-redux';

const store=configureStore({
  reducer:{
    users:userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);
