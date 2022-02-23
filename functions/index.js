// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")('sk_test_51KVrbDSHmk8dQrF8HsIZzDESbkzlct5tJDSrNpvWF3wrxtk1mvBRszQ7A982S1i1S6eBhoTUcSyabuSAr7LeLaS2003U2l4wS3')

// //API


// //-API config
// const app = express();


// //-Middlewares
// app.use(cors({ origin: true }))
// app.use(express.json());


// //-API routes
// app.get('/', (request, response) => response.status(200).send
// ('hello world'))

// app.post('payments/create', async (request, response) => {
//     const total = request.query.total;

//     console.log('Payment Request Received For This Amount >>>>', total)

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total, //subumits of the currency
//         currency: "usd",
//     });

//     //OK - Created
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     })
// })

// //-Listen command
// exports.api = functions.https.onRequest(app)

// //Example
// //http://localhost:5001/clone-9d8d4/us-central1/api




const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51KVrbDSHmk8dQrF8HsIZzDESbkzlct5tJDSrNpvWF3wrxtk1mvBRszQ7A982S1i1S6eBhoTUcSyabuSAr7LeLaS2003U2l4wS3')
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
 console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

 response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);