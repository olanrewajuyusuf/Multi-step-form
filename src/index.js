import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MultiStepForm from './Components/MultiStepForm';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <MultiStepForm />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
