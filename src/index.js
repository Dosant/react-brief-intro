import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data/data';

ReactDOM.render(
  <App users={data}/>,
  document.getElementById('root')
);
