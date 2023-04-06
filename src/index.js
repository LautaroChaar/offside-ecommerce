import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartContext } from './context/CartContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyAMNKRVEPx7025fnaG5QMc3-IJTWxA1kl4",
  authDomain: "off-side-proyect.firebaseapp.com",
  projectId: "off-side-proyect",
  storageBucket: "off-side-proyect.appspot.com",
  messagingSenderId: "1068554320571",
  appId: "1:1068554320571:web:660ac6544f6e39d585c79e"
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
