import React from 'react';
import '../styles/page.css';
import Carousel from './Carousel';

const CurrentProjectsPage = () => {
    return (
        <div className="page page--fixed">
            <Carousel switchColor="#3e434d" items={[
                <div className="page__content">
                    <h1 className="page__content__header">Orphan Support</h1>
                    <p>
                        In this project, donations are collected to support orphans that have no care taker
                        . This project will allow the donors to have a special relationship with the supported orphans. 
                        For more information on the OS, contact VLF.
                    </p>
                </div>,
                <div className="page__content">
                    <h1 className="page__content__header">Needy Families</h1>
                    <p>
                        This project is structured to help qualified families in need.  To qualify for 
                        VLF help, feel free to contact us.
                    </p>
                </div>,
                <div className="page__content">
                    <h1 className="page__content__header">Zakat and Qurban Management</h1>
                    <p>
                        This project takes care of collection and distributaries of Zakat (Alms) as well as the 
                        Qurban (Feast sacrifice). ZQM is designed for the Muslim community donors.  
                    </p>
                </div>
            ]}/>
        </div>
    );
}

export default CurrentProjectsPage;