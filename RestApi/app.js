const express = require('express');
const mustache = require('mustache-express');
const router = require('./Routers/index')
const app = express();
app.use('/', router)

app.engine('mst',()=> mustache( __dirname + '/views', '.mst')); //motor de vissualizacao
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');


module.exports = app

