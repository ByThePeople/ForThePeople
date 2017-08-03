/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

const express = require('express');
const pg = require('pg');
const app = express();
const bodyParser = require('body-parser');

const connectionString = process.env.DATABASE_URL || `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/forthepeople` || `postgres://localhost:5432/forthepeople`;

const client = new pg.Client(connectionString);
client.connect();

client.on('error', err => console.error(err));

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

//DATABASE LOADERS
//    Adapted from codefellows301 lab 13

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    issues (
      id SERIAL PRIMARY KEY,
      issues VARCHAR(255) NOT NULL,
      userdate TIMESTAMP
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

app.get('/issues', function(req, res){
  client.query(`SELECT issues, userdate FROM issues ORDER BY userdate DESC LIMIT 5;`)
  .then(result => res.send(result.rows))
  .catch(console.error);
})

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
