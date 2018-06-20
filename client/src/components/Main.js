import React from 'react';
import '../styles/page.css';
import '../styles/container.css';
import AboutPage from './AboutPage'
import ProgramsPage from './ProgramsPage';
import CurrentProjectsPage from './CurrentProjectsPage';
import LinksPage from './LinksPage';

const Main = () => (
    <div className="container">
        <AboutPage />
        <ProgramsPage />
        <CurrentProjectsPage />
        <LinksPage />
    </div>
);

export default Main;