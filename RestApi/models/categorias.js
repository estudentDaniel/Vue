const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    slogan: String
 })

const modelName = 'categoria'

if (mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName]
}else{
    module.exports = mongoose.connection.models[modelName, Schema]
}