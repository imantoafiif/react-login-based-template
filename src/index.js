import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import Cookies from 'js-cookie';
import { Provider } from 'react-redux';
import store from './store/store';

axios.defaults.baseURL = `${process.env.REACT_APP_API_BASE_URL}`

axios.interceptors.request.use(
  async config => {
    const token = Cookies.get(`auth.token`)
    config.headers = {
      Authorization: (token ? `Bearer ${token}` : null),
      Accept: 'application/json',
    }
    return config
  },
    error => {
      Promise.reject(error)
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
