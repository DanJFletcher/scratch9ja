import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './styles/tailwind/index.scss';
import './styles/index.scss';
import '@trendmicro/react-tooltip/dist/react-tooltip.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['DM Serif Display', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
