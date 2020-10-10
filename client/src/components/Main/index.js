import React from 'react';
import { Element } from 'react-scroll';

import { getWeekBackgroundStyles } from './utils';

import AboutUsPage from '../AboutUsPage';
import CurrentProjectsPage from '../CurrentProjectsPage';
import DonatePage from '../DonatePage';
import Header from '../Header';
import LinksPage from '../LinksPage';
import ProgramsPage from '../ProgramsPage';
import WelcomePage from '../WelcomePage';

import '../../styles/container.css';
import '../../styles/header.css';
import '../../styles/page.css';

class Main extends React.Component {
    render() {

        const { topBackgroundStyle, midBackgroundStyle, botBackgroundStyle } = getWeekBackgroundStyles();

        return (
            <div>
                <Header />
                <div className="container">
                    <WelcomePage backgroundStyle={topBackgroundStyle} />
                    <Element name="donate-page">
                        <DonatePage />
                    </Element>
                    <Element name="about-us-page">
                        <AboutUsPage />
                    </Element>
                    <Element name="programs-page">
                        <ProgramsPage backgroundStyle={midBackgroundStyle} />
                    </Element>
                    <Element name="current-projects-page">
                        <CurrentProjectsPage />
                    </Element>
                    <Element name="links-page">
                        <LinksPage backgroundStyle={botBackgroundStyle} />
                    </Element>
                </div>
            </div>
        );

    }
}

export default Main;
