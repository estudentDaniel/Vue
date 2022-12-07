import mongoose from "mongoose";
require('dotenv').config({path: 'variabel.env'})
mongoose.Promisse = global.Promise;

const Schema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    token: {type: String,}
});

// const Userdb = 'login';

// if (mongoose.connection && mongoose.connection.models[Userdb]){
//     module.exports = mongoose.connection.models[Userdb];
// }else{
//     module.exports = mongoose.connection.model[Userdb, Schema]
// }
mongoose.connect("mongodb://localhost:27017",({ useNewUrlParser: true, useUnifiedTopology: true }))
.then(()=>{
    console.log("Conectado")
})
.catch(err=>console.log("erro ao conectar"+ err))

export default Schema