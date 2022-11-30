const mongoose = require('mongoose')

const {DATABASE} = process.env



mongoose.connect('mongodb://localhost:27017').then(
    ()=>{console.log("MongoDB connected"); }
).catch(err=>{console.log(err+ "Erro ao conectar ")})

module.exports = DATABASE
//  exports.connect = mongoose.connect(DATABASE,
//      {
//          useNewUrlParser: true,
//          useUnifiedTopology: true,
//          useCreateIndexe: true,//obs
//          useFindAndAndModify: false,
//      }
//      )
//      .then(()=>{console.log("MongoDB connectado") } )
//      .catch(err=>{console.log(err+ "Erro ao conectar ")})