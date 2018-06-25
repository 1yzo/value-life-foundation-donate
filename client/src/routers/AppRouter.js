import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import DonatePage from '../components/DonatePage';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                    <Switch>
                        <Route path="/" component={Main} exact />
                        <Route path="/donate" component={DonatePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;