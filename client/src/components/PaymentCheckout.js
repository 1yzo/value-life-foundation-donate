import React from 'react';
import { client } from 'braintree-web';
import { hostedFields } from 'braintree-web';

class PaymentCheckout extends React.Component {
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div className="page" id="dropin-container">
                Checkout
            </div>
        );
    }
}

export default PaymentCheckout;