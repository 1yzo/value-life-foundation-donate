import React from 'react';
import Modal from 'react-modal';
import '../styles/modal.css';

class DonateModal extends React.Component {
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
                                <form className="options">
                                    <div>
                                        <input type="radio" name="option" id="libyanCrisis"/>
                                        <label for="libyanCrisis">Libyan Crisis</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="needyFamilies"/>
                                        <label for="needyFamilies">Needy Families</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="charity"/>
                                        <label for="charity">Charity (Zakat Al Mal)</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="sponsorOrphan"/>
                                        <label for="sponsorOrphan">Sponsor an Orphan</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="option" id="generalDonation"/>
                                        <label for="generalDonation">General Donation (Sadaqah)</label>
                                    </div>
                                </form>
                                <form style={{ display: 'flex' }}>
                                    <div style={{ background: 'white', color: 'black', display: 'flex', alignItems: 'center' }}>
                                        <i className="material-icons" style={{ color: '#50c16f' }}>
                                            attach_money
                                        </i>
                                    </div>
                                    <input 
                                        style={{ border: 'none' }}
                                        type="text"
                                    />
                                </form>
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
                                <p className="my-labeldasd">122000661</p>
                                <p><strong>Account No</strong></p>
                                <p className="my-labeldsd">1127506203</p>
                            </div>
                        </div>
                    }
                </Modal>
        );
    }
}

export default DonateModal;