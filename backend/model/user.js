const mongoose = require('mongoose');
Promisse = global.Promise;

const modelShema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: {type: String},
    token: {type: String}
});

// const modelName = 'anuncios'
// if (connection && connection.models[modelName]){
//     module.exports = connection.models[modelName];
// }else{
//     module.exports = model[modelName, modelShema]
// }
