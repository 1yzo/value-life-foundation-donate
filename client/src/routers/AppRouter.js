import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../components/Main';
import Header from '../components/Header/index';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.linksPageRef = React.createRef();
    }

    render() {
        return (
            <BrowserRouter>
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingTop:'10vh' }}>
                    <Header />
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
