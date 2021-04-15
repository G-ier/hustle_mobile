const { response } = require("express");
const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_51IeTZzJZwZ6AjU7yQnTOXnPfTOvJAfDc0ZxZkniaow4JRskXO9QyvFKvIR8YodaVBWSHkQmDQyxLp0d8KVmWgyzV00Td55mEbh");
const cors = require('cors')({origin: true});
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
