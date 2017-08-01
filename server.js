/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT || 3000;

// Add connection to Postgres here
// const connectionString = process.env.CONNECTION_STRING || `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/reps`;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
