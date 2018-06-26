import React from 'react';
import '../styles/page.css';
import '../styles/donate.css';

class DonatePage extends React.Component {
    state = {
        donationMethod: '' // Online, Mail, Wire Transfer, Phone
    };

    handleChooseMethod = (e) => {
        if (e.target.attributes.name) {
            const donationMethod = e.target.attributes.name.value;
            this.setState(() => ({ donationMethod }));
        }
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
                        <div className="icon-container" name="online">
                            <img className="material-icons" name="online" src="/images/credit-card.png" />
                            <label name="online">Pay Online</label>
                        </div>
                        <div className="icon-container" name="mail">
                            <i className="material-icons" name="mail">mail</i>
                            <label name="mail">Mail</label>
                        </div>
                        <div className="icon-container" name="wireTransfer">
                            <i className="material-icons">account_balance</i>
                            <label name="wireTransfer">Wire Transfer</label>
                        </div>
                        <div className="icon-container" name="phone">
                            <i className="material-icons" name="phone">phone</i>
                            <label name="phone">Call Us</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default DonatePage;