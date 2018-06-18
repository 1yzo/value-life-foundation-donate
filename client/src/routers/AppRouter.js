import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import DonatePage from '../components/DonatePage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Header />
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route path="/donate" component={DonatePage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;