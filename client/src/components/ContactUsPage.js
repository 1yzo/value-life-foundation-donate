import React from 'react';
import '../styles/page.css';

const ContactUsPage = () => (
    <div className="page" id="contact-page">
        <div className="page__content contact">
            <div>
                <h1 className="page__content__header">Contact Us</h1>
                <p style={{ fontSize: '3rem' }}>
                    Phone Number: <a style={{ color: '#24b24b' }} href="tel:9496643001">(949) 664-3001</a>
                    <br /><br />
                    Email: <a style={{ color: '#24b24b' }} href="mailto:info@valuelife.org">info@valuelife.org</a>
                    <br /><br />
                </p>
            </div>
        </div>
    </div>
);

export default ContactUsPage;