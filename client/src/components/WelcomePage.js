import React from 'react';
import '../styles/page.css';

const WelcomePage = () => (
    <div className="page page--first">
        <div style={{ flex: 1 }}>
        </div>
        <div className="page__content">
            <h1 className="page__content__header">Welcome to <br/>  Value Life Foundation</h1>
            <p> 
                Value Life Foundation (VLF) is established in Claremont, California, USA in January 2002
                as a nonprofit, public benefit corporation. It is organized under the nonprofit public benefit
                corporation law for charitable, educational, and scientific purposes.
            </p>
            <p style={{ fontSize: 'smaller'}}>Our US Federal Tax # is: 68-0493506</p>
        </div>
    </div>
);

export default WelcomePage;