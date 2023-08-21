
// import {initializeApp} from "firebase-admin/app";
// const functions = require("firebase-functions");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const secretKey="sk_test_51LrP30SB4nFwNrSIDiXujZBgcbE6emlDmGd9ev6o7J2C4fXv66Aee5yiw0YsV3pkWzSmg5c8XGyQwv8S2GVcIHqm00lj35Y4se";
const stripe = require("stripe")(secretKey);


const app = express();


app.use(cors({ origin: true }));
app.use(express.json());

app.get(`/`,(request, response) => response.status(200).send("hello world"))
app.post(`/payment/create`,async(request,response) => {
    const total=request.query.total;
    console.log("Payment request Received Yeeehh!! for this amount >>>",total)
    const paymentIntent =await stripe.paymentIntents.create({
        amount:total,
        currency:"INR",
        payment_method_types: ["card"],
        // payment_method :[card],

        // metadata: { integration_check: "accept_a_payment" },
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


exports.api = functions.https.onRequest(app)

// http://127.0.0.1:5001/e-clone-d2cad/us-central1/api





