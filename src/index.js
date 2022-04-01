import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GithubProvider } from './context/github/GithubContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>
);
