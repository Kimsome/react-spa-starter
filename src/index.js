import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";

import App from './App';
import './index.css';
import AppState from './store/AppState';

ReactDOM.render(<Provider store={AppState}><App /></Provider>,
  document.getElementById('root')
);
