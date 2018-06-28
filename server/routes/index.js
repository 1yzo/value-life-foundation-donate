const express = require('express');
const router = express.Router();
const braintree = require('braintree');

const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'kxsktmpcqnkfg8dm',
    publicKey: 'hbqhn2cgswc4g8vx',
    privateKey: '01848511508690acda831d564f654ce2'
});

gateway.clientToken.generate({}, function (err, response) {
    var clientToken = response.clientToken
  });

router.get("/client_token", function (req, res) {
    gateway.clientToken.generate({}, function (err, response) {
        res.send(response.clientToken);
    });
});

router.post("/checkout", function (req, res) {
    var nonceFromTheClient = req.body.payment_method_nonce;
    // Use payment nonce here
    gateway.transaction.sale({
        amount: "10.00",
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
      });
});

module.exports = router;