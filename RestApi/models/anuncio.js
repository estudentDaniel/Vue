const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Configurações globais

const modelShema = new mongoose.Schema({
    idUser: String,
    dateCreated:Date,
    titulo: String,
    preco: String,
    descricao: String,
    views: Number,
    images: [Object]

});

const modelName = 'Anuncio';

if (mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelShema);
}