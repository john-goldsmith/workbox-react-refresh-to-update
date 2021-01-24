import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import RegisterServiceWorker from './components/RegisterServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RegisterServiceWorker />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
