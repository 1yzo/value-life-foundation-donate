import React from 'react';
import '../styles/page.css';
import '../styles/container.css';
import WelcomePage from './WelcomePage'
import ProgramsPage from './ProgramsPage';
import CurrentProjectsPage from './CurrentProjectsPage';
import LinksPage from './LinksPage';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <WelcomePage />
                <ProgramsPage />
                <CurrentProjectsPage />
                <LinksPage />
            </div>
        );
      
    }
}

export default Main;