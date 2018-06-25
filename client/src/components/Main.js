import React from 'react';
import '../styles/page.css';
import '../styles/container.css';
import '../styles/header.css';
import { Link, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll';
import WelcomePage from './WelcomePage'
import ProgramsPage from './ProgramsPage';
import CurrentProjectsPage from './CurrentProjectsPage';
import Header from './Header';
import LinksPage from './LinksPage';
import DonatePage from './DonatePage';
import AboutUsPage from './AboutUsPage';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <WelcomePage />
                    <Element name="about-us-page">
                        <AboutUsPage />
                    </Element>
                    <Element name="programs-page">
                        <ProgramsPage />
                    </Element>
                    <Element name="current-projects-page">
                        <CurrentProjectsPage />
                    </Element>
                    <Element name="links-page">
                        <LinksPage />
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

