/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

const express = require('express');
const pg = require('pg');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/forthepeople`;
const connectionString = process.env.DATABASE_URL || `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/forthepeople` || `postgres://localhost:5432/forthepeople`;

const client = new pg.Client(connectionString);
client.connect();

client.on('error', err => console.error(err));

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;


// /* nodemailer api language
// ***************************************************/
// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//   host: 'smtp-mail.outlook.com',
//   secureConnection: false, // TLS requires secureConnection to be false
//   port: 587, // port for secure SMTP
//   tls: {ciphers:'SSLv3'},
//   auth: {
//     user: 'bythepeople_forthepeople@outlook.com',
//     pass: `${process.env.OUTLOOK_PASSWORD}`
//   }
// });
//
// // setup email data
// let mailOptions = {
//   from: 'bythepeople_forthepeople@outlook.com', // sender address
//   to: '', // list of receivers
//   subject: 'Hello ✔', // Subject line
//   text: 'Hello world?' // plain text body could instead use 'html: ' with html tags
// };
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message %s sent: %s', info.messageId, info.response);
// });
//
// /* end nodemailer section
// ******************************************************/

//DATABASE LOADERS
//Adapted from codefellows301 lab 13

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    issues (
      id SERIAL PRIMARY KEY,
      issues VARCHAR(255) NOT NULL,
      userdate DATE
    );`
  )
  .catch(console.error);
}

loadDB();

app.post('/issues', function(req, res){
  client.query(`
    INSERT INTO issues
    (issues, userdate) VALUES($1, $2) ON CONFLICT DO NOTHING;`,
    [
      req.body.issues,
      new Date()
    ])
})

// app.get('/issues', function(req, res){
//   client.query(`SELECT issues, userdate FROM issues;`)
// })

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
