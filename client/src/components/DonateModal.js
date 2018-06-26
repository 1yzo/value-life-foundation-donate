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
                </Modal>
        );
    }
}

export default DonateModal;