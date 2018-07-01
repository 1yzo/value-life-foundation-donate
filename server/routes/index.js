const express = require('express');
const router = express.Router();
const secrets = require('../../secrets');
const stripe = require('stripe')(secrets.serverKey);

router.post('/charge', (req, res, next) => {
    const { amount, token } = req.body;
    const charge = stripe.charges.create({
        amount,
        currency: 'usd',
        source: token,
    }, (err, charge) => console.log(err));
    res.json(charge);
});

module.exports = router;