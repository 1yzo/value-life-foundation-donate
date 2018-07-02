import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../styles/modal.css';
import PaymentCheckout from './PaymentCheckout';

class DonateModal extends React.Component {
    state = {
        programOption: '',
        amount: '',
        error: ''
    };

    handleProgramOptionSelect = (e) => {
        const programOption = e.target.id;
        this.setState(() => ({ programOption }));
    }

    focusAmountInput = () => {
        const ref = ReactDOM.findDOMNode(this.amountRef);
        ref.focus();
    }

    handleAmountChange = (e) => {
        const amount = e.target.value;
        if ((amount * 100) < 50) {
            this.setState(() => ({ error: 'amount less than 50₵ not allowed'}));
        } 
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    
    render() {
        return (
            <Modal
                    className="modal"
                    isOpen={this.props.showModal}
                    onRequestClose={this.props.handleCloseModal}
                    contentLabel="Modal"
                    closeTimeoutMS={300}
                    shouldCLoseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    ariaHideApp={false}
                >
                    {this.props.donationMethod === 'online' &&
                        <div>
                            <div className="donate-options-container">
                                <form className="options" onChange={this.handleProgramOptionSelect}>
                                    <div>
                                        <input type="radio" name="option" id="libyanCrisis"/>
                                        <label htmlFor="libyanCrisis">Libyan Crisis</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="needyFamilies"/>
                                        <label htmlFor="needyFamilies">Needy Families</label>
                                        {this.state.programOption === 'needyFamilies' && <div className="info">$100 supports 1 family</div>}
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="charity"/>
                                        <label htmlFor="charity">Charity (Zakat Al Mal)</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="sponsorOrphan"/>
                                        <label htmlFor="sponsorOrphan">Sponsor an Orphan</label>
                                        {this.state.programOption === 'sponsorOrphan' && <div className="info">$35 supports 1 orphan</div>}
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="generalDonation"/>
                                        <label htmlFor="generalDonation">General Donation (Sadaqah)</label>
                                    </div>
                                </form>
                                <div
                                    style={{ display: 'flex', flexDirection: 'column', cursor: 'text' }} 
                                    onClick={this.focusAmountInput}
                                >
                                    <div style={{ borderBottom: '2px solid #50c16f' }} />
                                    <form style={{ display: 'flex', margin: '3rem 0' }}>
                                        <div style={{ background: 'white', color: 'black', display: 'flex', alignItems: 'center' }}>
                                            <i className="material-icons" style={{ color: '#50c16f' }}>
                                                attach_money
                                            </i>
                                        </div>
                                        <input
                                            ref={el => {this.amountRef = el}}
                                            style={{ border: 'none', fontSize: '2rem' }}
                                            type="text"
                                            onChange={this.handleAmountChange}
                                            value={this.state.amount}
                                        />
                                    </form>
                                    <div style={{ borderBottom: '2px solid #50c16f' }} />
                                    {this.state.error && <div className="error-info">{this.state.error}</div>}
                                    <PaymentCheckout amount={this.state.amount * 100}>
                                        <button 
                                            disabled={!this.state.amount || (this.state.amount * 100) < 50} 
                                            onClick={() => this.props.handleCloseModal()}
                                            className="checkout-button">Continue To Checkout
                                        </button>
                                    </PaymentCheckout>
                                </div>
                            </div>
                        </div>
                    }

                    {this.props.donationMethod === 'phone' && 
                        <div>
                            <div className="mini-container">
                                <p>From <strong>USA</strong> (Toll Free)</p>
                                <a href="tel:18774357853">1-877-435-7853</a>
                            </div>
                            <div className="mini-container">
                                <p>From <strong>ELSEWHERE</strong></p>
                                <a href="tel:+9492417659">(+) 949-241-7659</a>
                            </div>
                        </div>
                    }

                    {this.props.donationMethod === 'wireTransfer' &&
                        <div>
                            <div className="bank-container">
                                <p className="bank-name">Bank of America</p>
                                <p className="my-label">Branch</p>
                                <p>La Verne</p>
                                <p className="my-label">Address</p>
                                <p>1399 Foothill blvd. La Verne, CA 91750</p>
                                <p className="my-label">Phone</p>
                                <a href="tel:9098652424">(909) 865-2424</a>
                                <p><strong>Routing No</strong></p>
                                <p className="my-label">122000661</p>
                                <p><strong>Account No</strong></p>
                                <p className="my-label">1127506203</p>
                            </div>
                        </div>
                    }
                </Modal>
        );
    }
}

export default DonateModal;