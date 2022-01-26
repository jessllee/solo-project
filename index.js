import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';


render(
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
