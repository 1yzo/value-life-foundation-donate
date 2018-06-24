import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import DonatePage from '../components/DonatePage';
import Header from '../components/Header';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <Header tempRef={this.state.ref}/>
                    <Switch>
                        <Route path="/" render={(props) => <Main storeRef={this.storeRef}/>} exact={true} />
                        <Route path="/donate" component={DonatePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;