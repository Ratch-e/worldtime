import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'mobx-react';
import App from './js/components/App';

import Store from './js/store/store';

const Root = (
  <Provider Store={Store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
