const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Configurações globais

const Schema = new mongoose.Schema({
    name: {type: 'String'},
    email: {type: 'String', unique: true},
    state: {type: 'String'},
    passwordHash: {type: 'String'},
    token: {type: 'String'}
})

const modelName = 'User';

//criar conexao
if ( mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName]
}else{
    module.exports = mongoose.connection.models[modelName, Schema]
}