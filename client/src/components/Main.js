import React from 'react';
import AboutPage from './AboutPage'
import ProgramsPage from './ProgramsPage';
import '../styles/page.css';
import '../styles/container.css';
import CurrentProjectsPage from './CurrentProjectsPage';

const Main = () => (
    <div className="container">
        <AboutPage />
        <ProgramsPage />
        <CurrentProjectsPage />
    </div>
);

export default Main;