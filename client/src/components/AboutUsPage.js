import React from 'react';
import '../styles/page.css';

const AboutUsPage = () => (
    <div className="page" id="about-page">
        <div className="page__content about">
            <div>
                <h1 className="page__content__header">Our Vision</h1>
                <p>
                    At VLF, we believe that human life is created with inherent value and purpose.
                    We strive to reduce and eliminate poverty, disease, ignorance, illiteracy, and
                    whatever devalues human lives worldwide. VLF cooperates with individuals and 
                    organizations that share this vision. VLF's founders have lived both here and
                    abroad, which gives our institution an edge in vision, information, and public relations.
                </p>
            </div>
            <div>
                <h1 className="page__content__header">Our Mission</h1>
                <p>
                    Value Life Foundation's mission is two fold:  relief and social development.  VLF's
                    human relief mission is to help the needy, especially those suffering from hardships 
                    and disasters. The social development mission on the other hand is aimed at structuring 
                    and implementing programs that provide needed tools of awareness and education in order to make
                    significant long-term impact on local communities and else where. To accomplish the above objectives,
                    we raise funds by soliciting donations from the public. VLF's founding directors are multicultural,
                    thus facilitating a wider and more versatile network of donors.
                </p>
            </div>
        </div>
        <div className="page__content" style={{ 'paddingTop': '0' }}>
            <h1 className="page__content__header">Our Values</h1>
            <p className="about-value">1. Humanity at large was created by God from a male and a female, and was made into nations that they may know and help one another. Humanity also has the same destiny. So we reject the notion of “Clash of Civilizations”.</p>
            <p className="about-value">2. Values are dictated by God.</p>
            <p className="about-value">3. Human life has value by creation..</p>
            <p className="about-value">4. Poverty, disease, illiteracy, and ignorance are sources of human tragedies and can all be eliminated by mutual understanding, cooperation and hard work</p>
        </div>
    </div>
);

export default AboutUsPage;