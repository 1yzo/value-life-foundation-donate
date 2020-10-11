import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import '../styles/header.css';
import FloatingMenu from './FloatingMenu';

class Header extends React.Component {
    state = {
        donateClicked: false
    }
    
    scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    handleDonateClick = (x) => {
        this.setState(() => ({ donateClicked : true }));
    }

    resetDonateClicked = () => {
        this.setState(() => ({ donateClicked: false }));
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="placeholder"/>
                    <h1 className="header-link" onClick={this.scrollToTop}>VLF</h1>
                    <div className="links-section">
                        <Link className="link desktop-only" activeClass="link--active" to="about-us-page" spy smooth duration={500} offset={-70}>
                            <h4>ABOUT US</h4>
                        </Link>
                        <Link className="link desktop-only" activeClass="link--active" to="programs-page" spy smooth duration={500} offset={-70}>
                            <h4>PROGRAMS</h4>
                        </Link>
                        <Link className="link desktop-only" activeClass="link--active" to="current-projects-page" spy smooth duration={500} offset={-70}>
                            <h4>CURRENT PROJECTS</h4>
                        </Link>
                        <Link className="link desktop-only" activeClass="link--active" to="links-page" spy smooth duration={500} offset={-70}>
                            <h4>LINKS</h4>
                        </Link>
                        <Link className="link desktop-only" activeClass="link--active" to="contact-us-page" spy smooth duration={500} offset={-70}>
                            <h4>CONTACT</h4>
                        </Link>
                        <Link onClick={this.handleDonateClick} className="link"  style={{ paddingRight: 0} } to="donate-page" spy smooth duration={500} offset={-70}>
                            <h4 className="link--donate">DONATE</h4>
                        </Link>
                    </div>
                    <div className="placeholder"/>
                </div>
                <FloatingMenu resetDonateClicked={this.resetDonateClicked} donateClicked={this.state.donateClicked}/>
            </div>
        );
    }
}

export default Header;