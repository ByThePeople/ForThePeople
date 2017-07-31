/* jshint browser: true, devel: true, esversion: 6 */

'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));
