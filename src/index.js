import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { Provider } from "mobx-react";

import AppState from './store/AppState';

ReactDOM.render(<Provider store={AppState}><App /></Provider>,
  document.getElementById('root')
);
