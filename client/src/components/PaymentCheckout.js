import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import '../styles/donate.css';

class PaymentCheckout extends React.Component {
    onToken = (token) => {
        fetch('/api/charge', {
            method: 'POST',
            body: JSON.stringify({
                token: 'tok_visa',
                amount: this.props.amount,
                description: this.props.programOption
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    
    render() {
        return (
            <StripeCheckout
                name="Value Life Foundation"
                token={this.onToken}
                stripeKey="pk_test_DPKp8WsiKFfpeqjVoxldGJrF"
                amount={this.props.amount}
                description={this.props.programOption}
            >
                { this.props.children }
            </StripeCheckout>
        );
    }
}

export default PaymentCheckout;
