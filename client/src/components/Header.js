import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
    <div className="header">
        <h1>VLF</h1>
        <div className="sections">
            <h4 className="link">ABOUT US</h4>
            <h4 className="link">PROGRAMS</h4>
            <h4 className="link">CURRENT PROJECTS</h4>
            <h4 className="link">LINKS</h4>
            <h4 className="link link--donate">DONATE</h4>
        </div>
    </div>
);

export default Header;