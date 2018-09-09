import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import qs from 'qs';
import '../styles/donate.css';

class PaymentCheckout extends React.Component {
    onToken = (token) => {
        fetch('https://mlink.info/charge.php', {
            method: 'POST',
            mode: 'cors',
            body: qs.stringify({
                token: 'tok_visa',
                amount: this.props.amount,
                description: this.props.programOption
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            }
        });
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
