import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartContext } from './context/CartContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB1qAi5NSM9yiJSt45wDHV47g1cUSWas30",
  authDomain: "offside-3e506.firebaseapp.com",
  projectId: "offside-3e506",
  storageBucket: "offside-3e506.appspot.com",
  messagingSenderId: "439777658852",
  appId: "1:439777658852:web:f236ff9a3d024db91569f1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContext>
      <App />
    </CartContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
