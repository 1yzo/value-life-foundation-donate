import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import '../styles/donate.css';
import secrets from  '../secrets';

class PaymentCheckout extends React.Component {
    onToken = (token) => {
        fetch('/api/charge', {
            method: 'POST',
            body: JSON.stringify({
                token: 'tok_visa',
                amount: this.props.amount
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    render() {
        return (
            <StripeCheckout
                token={this.onToken}
                stripeKey={secrets.clientKey}
                description="Testing"
                amount={this.props.amount}
            >
                { this.props.children }
            </StripeCheckout>
        );
    }
}

export default PaymentCheckout;
