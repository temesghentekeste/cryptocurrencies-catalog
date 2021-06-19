/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './components/Rotues';
import reportWebVitals from './reportWebVitals';
import store from './store';
import styles from './index.module.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className={styles.app}>
        <Routes />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
