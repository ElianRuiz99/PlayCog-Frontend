import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Components
import { Navbar } from './components/Navbar';
import { RouterDom } from './RouterDom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterDom />
  </React.StrictMode>
);

