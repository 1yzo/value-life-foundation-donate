import React from 'react';
import '../styles/page.css';
import '../styles/donate.css';

class DonatePage extends React.Component {
    state = {
        showModal: false,
        donationMethod: '' // Online, Mail, Wire Transfer, Phone
    };

    handleChooseMethod = (e) => {
        if (e.target.attributes.name) {
            const donationMethod = e.target.attributes.name.value;
            this.setState(() => ({ donationMethod }));
        }
    }

    handleOpenModal = () => {
        this.setState(() => ({ showModal: true }));
    }

    handleCloseModal = () => {
        this.setState(() => ({ donationMethod: undefined, showModal: false}));
    }

    componentDidMount() {
        window.addEventListener('message', (e) => {
            if (e.data && e.data.type === 'contentHeight') {
                var targetFrame = {
                    // prayers: prayersFrame,
                    donations: document.getElementById('donations-frame'),
                    // events: eventsFrame,
                }[e.data.page];
                if (targetFrame) {
                    targetFrame.style.height = e.data.height + 'px';
                }
            }
        });
    }

    render() {
        return (
            <div className="page donate">
                <div
                    className="page__content"
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <h1 className="page__content__header">Donate Now</h1>
                    <iframe
                        title="Donate Now"
                        id="donations-frame"
                        src="https://themasjidapp.net/masjids/vlf/donations?stylesheetPath=https://noitidart.github.io/value-life-foundation-donate/donations.css"
                        style={{ width: '100%'}}
                        frameborder="0"
                    />
                </div>
            </div>
        );
    }
}

export default DonatePage;
