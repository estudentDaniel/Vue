const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    idUser: String,
    categoria: String,
    dateCreated: Date,
    titulo: String, 
    preco: String,
    descricao: String,
    views: Number,
    images: [Object],
    
})
const modelName = 'anuncios';

//criar conexao
if ( mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName]
}else{
    module.exports = mongoose.connection.models[modelName, Schema]
}