const {validationResult, matchedData} = require('express-validator');
const { v4: uuid } = require('uuid');
const jimp = require('jimp');

//referencia models
const categoria = require('../models/categorias');
const State = require('../models/estado');
const User = require('../models/user');
const Anuncio = require('../models/anuncio');


module.exports = {
    addAnuncio: async (req, res) => {
        let { titulo, preco,  token, descricao, views } = req.query;

      const user = await User.findOne({ token: token }).exec();

         if (!titulo || !descricao) {
               res.json({erro: 'nao veio nada ' });
               return;
           }
//opcioanl -image
           if (req.files && req.files.img) {
               if (req.files.img.length != 0) {
                   if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
                       let url = await addImage(req.files.img.data);
                       anuncio.images.push({
                           url,
                           default: false
                       })
                   }
               } else {
                   for (let i = 0; i < req.files.img.length; i++) {
                       if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
                           let url = await addImage(req.files.img.data);
                           anuncio.images.push({
                               url,
                               default: false
                           })
                       }
                   }
               }
           }
        var anuncio = new Anuncio() 
           anuncio.idUser = user._id;
          
           anuncio.dateCreated = new Date();
           anuncio.titulo = titulo;//
           anuncio.preco = preco;//
           anuncio.descricao = descricao;//
           anuncio.views= 0;//
           anuncio.images = null,

        
          res.json({
            anuncio: anuncio
          });
          await anuncio.save();
//       },
    //    const anuncio = new Anuncio()
    //     let { titulo, preco, descricao } = req.body;
    //     anuncio.titulo = titulo;
    //     anuncio.preco = preco;
    //     anuncio.descricao = descricao;
        
    //     const info = await anuncio.save();
    //     res.json({ info });
         
    },
    getCategoria: async (req, res) => {
                  let cat = await categoria?.find()
                  res.json({ cat});
              },
    getList: async (req, res) => {
                let list = await User.find()
                res.json({list: list})
              }
}