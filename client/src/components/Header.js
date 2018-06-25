import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return <div className="header">
            <h1 className="header-link" onClick={this.scrollToTop}>VLF</h1>
            <div className="links-section">
                <Link className="link" activeClass="link--active" to="programs-page" spy smooth duration={500}>
                    <h4>PROGRAMS</h4>
                </Link>
                <Link className="link" activeClass="link--active" to="current-projects-page" spy smooth duration={500}>
                <h4>CURRENT PROJECTS</h4>
                </Link>
                <Link className="link" activeClass="link--active" to="links-page" spy smooth duration={500}>
                    <h4>LINKS</h4>
                </Link>
                <Link className="link" to="donate-page" spy smooth duration={500}>
                    <h4 className="link--donate">DONATE</h4>
                </Link>
            </div>
        </div>
    }
}

export default Header;