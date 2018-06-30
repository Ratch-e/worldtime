import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'mobx-react';
import Weather from './js/components/Weather/Weather';

import Store from './js/store/store';

const Root = (
  <Provider Store={Store}>
    <Weather />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
