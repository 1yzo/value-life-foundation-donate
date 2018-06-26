import React from 'react';
import '../styles/page.css';
import '../styles/donate.css';

class DonatePage extends React.Component {
    state = {
        donationMethod: '' // Online, Mail, Wire Transfer, Phone
    };

    handleChooseMethod = (e) => {
        const donationMethod = e.target.attributes.name.value;
        this.setState(() => ({ donationMethod }));
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
                        <i className="material-icons" name="online">payment</i>
                        <i className="material-icons" name="mail">mail</i>
                        <i className="material-icons" name="wireTransfer">account_balance</i>
                        <i className="material-icons" name="phone">phone</i>
                    </form>
                </div>
            </div>
        );
    }
}

export default DonatePage;