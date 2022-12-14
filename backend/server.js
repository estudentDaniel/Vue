const http = require('http');
const app = require('./app')
const server = http.createServer(app)

const {port} = process.env
const portable = process.env.PORT || port;

server.listen(3000,()=>{
    console.log(portable+'servidor rodando'+port)
})