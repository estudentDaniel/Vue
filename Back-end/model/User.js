const mongoose = require('mongoose');

const Schema = new mongoose.model('User',{
    nome: {typeof: 'string'},
    email: {typeof: 'string'},
    

})

module.exports = Schema