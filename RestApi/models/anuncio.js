const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    idUser: String,
    state: String,
    images: [Object],
    categoria: String,
    preco: String,
    titulo: String,
    descricao: String,
    views: Number,
    datacreate: Date
})
const modelName = 'anuncio';

//criar conexao
if ( mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName]
}else{
    module.exports = mongoose.connection.models[modelName, Schema]
}