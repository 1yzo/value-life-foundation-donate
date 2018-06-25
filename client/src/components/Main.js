import React from 'react';
import '../styles/page.css';
import '../styles/container.css';
import '../styles/header.css';
import WelcomePage from './WelcomePage'
import ProgramsPage from './ProgramsPage';
import CurrentProjectsPage from './CurrentProjectsPage';
import LinksPage from './LinksPage';
import { Link, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll';

class Main extends React.Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log('end', arguments);
        });

        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="header-link" onClick={this.scrollToTop}>VLF</h1>
                    <div className="links-section">
                        <Link className="link" to="programs-page" spy smooth duration={500}>
                            Programs
                        </Link>
                        <Link className="link" to="links-page" spy smooth duration={500}>
                            Links
                        </Link>
                        <Link className="link" to="current-projects-page" spy smooth duration={500}>
                            Current Projects
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <WelcomePage />
                    <Element name="programs-page">
                        <ProgramsPage />
                    </Element>
                    <Element name="current-projects-page">
                        <CurrentProjectsPage />
                    </Element>
                    <Element name="links-page">
                        <LinksPage />
                    </Element>
                </div>
            </div>
        );

    }
}

export default Main;

