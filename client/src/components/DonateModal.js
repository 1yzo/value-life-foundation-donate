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
        if ((amount * 100) < 50 || (amount * 100) >= 100000000) {
            this.setState(() => ({ error: 'Amount must be in range $0.50 - $999,999'}));
        } else {
            this.setState(() => ({ error: '' }));
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
                                        <input type="radio" name="option" id="Libyan Crisis"/>
                                        <label htmlFor="Libyan Crisis">Libyan Crisis</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="Needy Families"/>
                                        <label htmlFor="Needy Families">Needy Families</label>
                                        {   
                                            this.state.programOption === 'Needy Families' &&
                                            <div className="info">$100 supports 1 family</div>
                                        }
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="Charity"/>
                                        <label htmlFor="Charity">Charity (Zakat Al Mal)</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="Sponsor an Orphan"/>
                                        <label htmlFor="Sponsor an Orphan">Sponsor an Orphan</label>
                                        {
                                            this.state.programOption === 'Sponsor an Orphan' &&
                                            <div className="info">$35 supports 1 orphan</div>
                                        }
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="General Donation"/>
                                        <label htmlFor="General Donation">General Donation (Sadaqah)</label>
                                    </div>
                                </form>
                                <div 
                                    onClick={this.focusAmountInput}
                                    style={{ borderBottom: '2px solid #50c16f', borderTop: '2px solid #50c16f', cursor: 'text', marginBottom: '3rem' }}
                                >
                                    <form className="amount-form" onSubmit={(e) => e.preventDefault()}>
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
                                </div>
                                {this.state.error && <div className="error-info">{this.state.error}</div>}
                                <PaymentCheckout amount={this.state.amount * 100} programOption={this.state.programOption}>
                                    <button 
                                        className="checkout-button"
                                        disabled={!this.state.amount || !!this.state.error || !this.state.programOption} 
                                        onClick={() => {
                                            this.props.handleCloseModal();
                                            this.setState(() => ({ 
                                                programOption: '',
                                                amount: ''
                                            }));
                                        }}
                                    >
                                        Continue To Checkout
                                    </button>
                                </PaymentCheckout>
                            </div>
                        </div>
                    }

                    {this.props.donationMethod === 'phone' && 
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <a style={{ color: '#24b24b', fontSize: '2.5rem' }} href="tel:9496643001">(949) 664-3001</a>
                        </div>
                    }

                    {this.props.donationMethod === 'wireTransfer' &&
                        <div>
                            <div className="bank-container">
                                <p className="my-label"><strong>Bank</strong></p>
                                <p className="bank-name">Bank of America</p>
                                <p className="my-label"><strong>Branch</strong></p>
                                <p>Irvine</p>
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