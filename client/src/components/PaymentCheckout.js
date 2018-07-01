import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import '../styles/donate.css';
import secrets from  '../secrets';

class PaymentCheckout extends React.Component {
    onToken = (token) => {
        console.log(token);
        fetch('/api/charge', {
            method: 'POST',
            body: JSON.stringify({
                token: 'tok_visa',
                amount: 2000
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    
    render() {
        return (
            <div className="page">
                <StripeCheckout
                    token={this.onToken}
                    stripeKey={secrets.clientKey}
                    description="Testing"
                />
            </div>
        );
    }
}

export default PaymentCheckout;