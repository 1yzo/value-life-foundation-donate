import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import configureStore from './store/configureStore';
import Main from './components/Main';

const store = configureStore();

const jsx = (
    <Provider  store={store}>
        <Main />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
