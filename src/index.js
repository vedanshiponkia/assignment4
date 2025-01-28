
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { CounterProvider } from './context/CounterContext.js';
import './index.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode> 
    <CounterProvider> 
      <App /> 
    </CounterProvider> 
  </React.StrictMode> 
);



