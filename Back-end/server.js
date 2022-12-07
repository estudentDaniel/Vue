const app =  require('./app')
const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});
mongoose.connect(process.env.BANCODB)


app.set('port',process.env.PORT || 8080)
const server = app.listen(3000, ()=>{
    console.log('listening on port '+ server.address().port )
});
