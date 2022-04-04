import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import store from './store'
import { Provider } from 'react-redux'
import { authGenerate } from './utils/OAuth';
import { deleteStorage, setStorage } from './utils/storage';
(() => {
  try {
    const {token} = authGenerate();
    setStorage('token',token)
  } catch (error) {
    deleteStorage()
  }
})()
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <Provider store={store}>
    <App />
  </Provider>,
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
