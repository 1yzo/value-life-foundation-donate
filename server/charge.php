<?php

    require_once('stripe-php/init.php');

    $PRODUCTION = false;

    function isParamMissing($param) {
        // http://stackoverflow.com/a/10265207/1828637
        if (!isset($param)) return true;
        if ($param == '') return true;
        return false;
    }

    if ($PRODUCTION) error_reporting(0);

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Content-Type: application/json');

    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    $amount = $_POST['amount'];
    $token = $_POST['token'];
    $description = $_POST['description'];

    if (isParamMissing($amount)) {
        http_response_code(200);
        print json_encode(['error' => 'Missing `amount` param']);
        exit();
    }
    if (isParamMissing($token)) {
        http_response_code(200);
        print json_encode(['error' => 'Missing `token` param']);
        exit();
    }
    if (isParamMissing($description)) {
        http_response_code(200);
        print json_encode(['error' => 'Missing `description` param']);
        exit();
    }

    \Stripe\Stripe::setApiKey('sk_live_YGiw458CbYkZypFDcaGObdX2');

    $charge = \Stripe\Charge::create([
        'amount' => $amount,
        'currency' => 'usd',
        'source' => $token,
        'description' => $description
    ]);

    http_response_code(200);
    print json_encode($charge);
    exit();

?>
