const express = require('express');
const mustache = require('mustache-express');
const router = require('./Routers/index')
const app = express();
app.use('/', router)




module.exports = app

