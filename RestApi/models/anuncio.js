const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    idUser: {type: 'String'},
    estado: {type: 'String'},
    status: {type: 'String'},
    images: [Object],
    categoria: {type: 'String'},
    preco: {type: 'String'},
    titulo: {type: 'String'},
    descricao: {type: 'String'},
    visualizacao: {type: Number},
    datacreate: {type: Date}
})
const modelName = 'anuncio';

//criar conexao
if ( mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName]
}else{
    module.exports = mongoose.connection.models[modelName, Schema]
}