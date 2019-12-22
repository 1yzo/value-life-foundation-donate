import React from 'react';
import '../styles/page.css';
import '../styles/donate.css';
import DonateModal from './DonateModal';

import CreditCardPng from './credit-card.png';

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
                    <h1 className="page__content__header">Donation Method</h1>
                    <form className="options-container" onClick={this.handleChooseMethod}>
                        <div className="icon-container" name="online" onClick={this.handleOpenModal}>
                            <img className="material-icons" name="online" src={CreditCardPng} alt="card-icon"/>
                            <label name="online">Pay Online</label>
                        </div>
                        <a
                            className="icon-container"
                            name="mail"
                            href="http://www.valuelife.org/donatebymail.htm"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="material-icons" name="mail">mail</i>
                            <label name="mail">Mail</label>
                        </a>
                        <div className="icon-container" name="wireTransfer" onClick={this.handleOpenModal}>
                            <i className="material-icons" name="wireTransfer">account_balance</i>
                            <label name="wireTransfer">Wire Transfer</label>
                        </div>
                        <div className="icon-container" name="phone" onClick={this.handleOpenModal}>
                            <i className="material-icons" name="phone">phone</i>
                            <label name="phone">Contact Us</label>
                        </div>
                    </form>
                </div>
                <DonateModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} donationMethod={this.state.donationMethod}/>
            </div>
        );
    }
}

export default DonatePage;
