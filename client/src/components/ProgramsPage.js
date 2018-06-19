import '../styles/page.css';
import React from 'react';

const ProgramsPage = () => (
    <div className="page">
        <div className="page__content page__content--left">
            <h1 className="page__content__header">Programs</h1>
            <p>
                In Value Life foundation two types of programs are structured and implemented: Human Relief Program 
                (HRP) and Social Development Programs (SDP).  The HRPs involve assisting needy victims in hardships 
                or tragedies.  Assistance can be in the form of food supplies, medical aid, shelter, and clothing.  
                The SDPs however cover social and  educational services.  VLF specializes in helping children, the
                elderly, the homeless, and the illiterate.  Programs are carried out through the following projects:
            </p>
        </div>
        <div className="carousel">
                <div className="page__content">
                    <h1 className="page__content__header">Current</h1>
                    <ul>
                        <li>Libyan relief and humanitarian assistance (LR)</li>
                        <li>Needy Families (NF)</li>
                        <li>Orphan Support (OS)</li>
                        <li>Zakat and Qurban Management (ZQM)</li>
                    </ul>
                </div>
        </div>
    </div>
);

export default ProgramsPage;