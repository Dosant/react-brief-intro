import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { getArticles, getAuthors } from './services/data';

ReactDOM.render(<App articles={getArticles()} authors={getAuthors()} />, document.getElementById('root'));
