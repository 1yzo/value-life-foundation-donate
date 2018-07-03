import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import '../styles/header.css';

class Header extends React.Component {
    scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    render() {
        return (
            <div className="header">
                <div className="placeholder"/>
                <h1 className="header-link" onClick={this.scrollToTop}>VLF</h1>
                <div className="links-section">
                    <Link className="link" activeClass="link--active" to="about-us-page" spy smooth duration={500} offset={-70}>
                        <h4>ABOUT US</h4>
                    </Link>
                    <Link className="link" activeClass="link--active" to="programs-page" spy smooth duration={500} offset={-70}>
                        <h4>PROGRAMS</h4>
                    </Link>
                    <Link className="link" activeClass="link--active" to="current-projects-page" spy smooth duration={500} offset={-70}>
                        <h4>CURRENT PROJECTS</h4>
                    </Link>
                    <Link className="link" activeClass="link--active" to="links-page" spy smooth duration={500} offset={-70}>
                        <h4>LINKS</h4>
                    </Link>
                    <Link className="link"  style={{ paddingRight: 0} } to="donate-page" spy smooth duration={500} offset={-70}>
                        <h4 className="link--donate">DONATE</h4>
                    </Link>
                    <div className="placeholder"/>
                </div>
            </div>
        );
    }
}

export default Header;