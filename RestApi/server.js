const express = require('express');
require('dotenv').config({path: '.env'})
const cors = require('cors')
const fileupload = require('express-fileupload')
const apiRouter = require('./Routers/routers') //importando minhas routas

const server = express(); // inicializando meu express


//conexao com banco
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATA_BASE,{useNewUrlParser: true, useUnifiedTopology: true, })
.then(()=>{
     console.log("Banco conectado")
})
mongoose.connection.on('error', err => console.log('erro de conexao'))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

//fileupload
server.use(fileupload());
server.use('/', apiRouter) // inicializando com minha rota raiz

//conexao com a porta

server.listen( process.env.PORT, ()=> {
console.log(`servidor rodano na porta: ${process.env.PORT}`)
})