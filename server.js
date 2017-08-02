/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

app.use(express.static('./public'));

const PORT = process.env.PORT || 3000;


/* nodemailer api language
***************************************************/
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {ciphers:'SSLv3'},
  auth: {
    user: 'bythepeople_forthepeople@outlook.com',
    pass: `${process.env.OUTLOOK_PASSWORD}`
  }
});

// setup email data
let mailOptions = {
  from: 'bythepeople_forthepeople@outlook.com', // sender address
  to: '', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?' // plain text body could instead use 'html: ' with html tags
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
});

/* end nodemailer section
******************************************************/




// Add connection to Postgres here
// const connectionString = process.env.CONNECTION_STRING || `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/reps`;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
