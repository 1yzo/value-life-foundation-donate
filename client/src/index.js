import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import Main from './components/Main/index';

const jsx = (
    <Main />
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
