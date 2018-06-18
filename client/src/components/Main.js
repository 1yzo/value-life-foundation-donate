import React from 'react';
import AboutPage from './AboutPage'
import ProgramsPage from './ProgramsPage';
import '../styles/page.css';
import '../styles/container.css';

const Main = () => (
    <div className="container">
        <AboutPage />
        <ProgramsPage />
    </div>
);

export default Main;