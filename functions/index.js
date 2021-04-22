const { response } = require("express");
const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_51IeTZzJZwZ6AjU7yQnTOXnPfTOvJAfDc0ZxZkniaow4JRskXO9QyvFKvIR8YodaVBWSHkQmDQyxLp0d8KVmWgyzV00Td55mEbh");
const cors = require('cors')({origin: true});
const paypal = require('@paypal/checkout-server-sdk');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

  exports.checkoutStripe = functions.https.onRequest((request, response) => {
       
    cors(request, response, () => {
      stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
        payment_method_types: ['card'],
        line_items: request.body.items,
        mode: 'payment',
      }, function(err, session){
        response.send(session);
        console.log(err);
      });
    });


  }); 
  
  exports.capturePaypal = functions.https.onRequest(async (request, response) => {

    cors(request, response, async () => {

      paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'AfiEGhDW75HGoJvK8PdWKV-BsunzhkTJWi5sCIjW9bU0J9D4ypIvxm6nenlEBVf2-0u7SQa-H9XhRxpd',
        'client_secret': 'ENWUPCSqqsFqYb6xV3_L05X9GnOuQOwe21mvEuaEw1zJHYCx3U5UcP1gd5vibkaolPkQ0vZUjDr85GdS'
      });

      const orderID = req.body.orderID;

      // 3. Call PayPal to capture the order
      const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);
      request.requestBody({});

      try {
        const capture = await payPalClient.client().execute(request);

        // 4. Save the capture ID to your database. Implement logic to save capture to your database for future reference.
        const captureID = capture.result.purchase_units[0]
            .payments.captures[0].id;
      // await database.saveCaptureID(captureID);

      } catch (err) {

        // 5. Handle any errors from the call
        console.error(err);
        return res.send(500);
      }

      // 6. Return a successful response to the client
      res.send(200);
    });

  }); 

  exports.createTransaction = functions.https.onRequest( async (request, response) => {

    cors(request, response, async () => {

      paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'AfiEGhDW75HGoJvK8PdWKV-BsunzhkTJWi5sCIjW9bU0J9D4ypIvxm6nenlEBVf2-0u7SQa-H9XhRxpd',
        'client_secret': 'ENWUPCSqqsFqYb6xV3_L05X9GnOuQOwe21mvEuaEw1zJHYCx3U5UcP1gd5vibkaolPkQ0vZUjDr85GdS'
      });


      const request = new paypal.orders.OrdersCreateRequest();
      request.prefer("return=representation");
      request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '220.00'
          }
        }]
      });
    
      let order;
      try {
        order = await payPalClient.client().execute(request);
      } catch (err) {
    
        // 4. Handle any errors from the call
        console.error(err);
        return res.send(500);
      }
    
      // 5. Return a successful response to the client with the order ID
      res.status(200).json({
        orderID: order.result.id
      });

    });    
  
  }); 
