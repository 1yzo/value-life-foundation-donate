import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
    <div className="header">
        <Link className="header-link" to="/">
            <h1>VLF</h1>
        </Link>
        <div className="links-section">
            <h4 className="link">ABOUT US</h4>
            <h4 className="link">PROGRAMS</h4>
            <h4 className="link">CURRENT PROJECTS</h4>
            <h4 className="link">LINKS</h4>
            <Link className="link link--donate" to="/donate">
                <h4>DONATE</h4>
            </Link>
        </div>
    </div>
);

export default Header;