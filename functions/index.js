const functions = require("firebase-functions");
const nodemailer = require ('nodemailer')
const cors = require ('cors') ({
    origin : true 
})

const gmailEmail = functions.config().gmail.email 

const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword, 
    }, 
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
