import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

const store = configureStore();

const jsx = (
    <Provider  store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
