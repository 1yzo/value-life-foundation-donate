import React from 'react';
import { Element } from 'react-scroll';

import { getWeekImagePaths } from './utils';

import AboutUsPage from '../AboutUsPage';
import CurrentProjectsPage from '../CurrentProjectsPage';
import DonatePage from '../DonatePage';
import Header from '../Header';
import LinksPage from '../LinksPage';
import ProgramsPage from '../ProgramsPage';
import QuickDonate from '../QuickDonate';
import WelcomePage from '../WelcomePage';

import '../../styles/container.css';
import '../../styles/header.css';
import '../../styles/page.css';

class Main extends React.Component {
    render() {

        const { topImagePath, midImagePath, botImagePath } = getWeekImagePaths();

        return (
            <div>
                <Header />
                <div className="container">
                    <WelcomePage backgroundImagePath={topImagePath} />
                    <Element name="about-us-page">
                        <AboutUsPage />
                    </Element>
                    <Element name="programs-page">
                        <ProgramsPage backgroundImagePath={midImagePath} />
                    </Element>
                    <Element name="current-projects-page">
                        <CurrentProjectsPage />
                    </Element>
                    <Element name="links-page">
                        <LinksPage backgroundImagePath={botImagePath} />
                    </Element>
                    <Element name="donate-page">
                        <DonatePage />
                    </Element>
                </div>
            </div>
        );

    }
}

export default Main;

