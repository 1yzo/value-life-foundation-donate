// @flow

import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import ScrollToSection from './ScrollToSection'
import { animateScroll } from 'react-scroll'

import HeaderLink from './HeaderLink'

import './index.css'

class Header extends React.Component {
    componentDidMount() {
        const pathname = window.location.pathname;
        if (pathname !== '/') {
            setTimeout(() => {
                console.log('pathname:', pathname);
                animateScroll.scrollTo(pathname);
            }, 5000);
        }
    }

    render() {
        return (
            <div className="header">
                <HeaderLink to="/">
                    <h1>VLF</h1>
                </HeaderLink>
                <div className="links-section">
                    <HeaderLink to="/about">ABOUT US</HeaderLink>
                    <HeaderLink to="/programs">PROGRAMS</HeaderLink>
                    <HeaderLink to="/projects">CURRENT PROJECTS</HeaderLink>
                    <HeaderLink to="/links">LINKS</HeaderLink>
                    <HeaderLink to="/donate">DONATE</HeaderLink>
                </div>
                <Switch>
                    <Route path="/" component={props => <ScrollToSection {...props} />} exact />
                    <Route path="/about" component={props => <ScrollToSection {...props} />} exact />
                    <Route path="/programs" component={props => <ScrollToSection {...props} />} exact />
                    <Route path="/projects" component={props => <ScrollToSection {...props} />} exact />
                    <Route path="/links" component={props => <ScrollToSection {...props} />} exact />
                    <Route path="/donate" component={props => <ScrollToSection {...props} />} exact />
                </Switch>
            </div>
        );
    }
}

export default Header;
