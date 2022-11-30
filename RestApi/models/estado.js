const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Configurações globais

const modelShema = new mongoose.Schema({
    name: String,
});

const modelName = 'states';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
}else{
    module.exports = mongoose.model(modelName, modelShema);
}
