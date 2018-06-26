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
                            <p>From USA, dial Toll Free     1-877-HELP-VLF</p>
                            <p>From ELSEWHERE, dial         (+) 949-241-7659</p>
                        </div>
                    }
                </Modal>
        );
    }
}

export default DonateModal;