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
        let { titulo, preco,   descricao,  } = req.query;

      //const user = await User.findOne({ token: token }).exec();

         if (!titulo || !descricao) {
               res.json({erro: 'nao veio nada ' });
               return;
           }
          
        //   if (req.files && req.files.img) {
        //       if (req.files.img.length != 0) {
        //           if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
        //               let url = await addImage(req.files.img.data);
        //               anuncio.images.push({
        //                   url,
        //                   default: false
        //               })
        //           }
        //       } else {
        //           for (let i = 0; i < req.files.img.length; i++) {
        //               if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
        //                   let url = await addImage(req.files.img.data);
        //                   anuncio.images.push({
        //                       url,
        //                       default: false
        //                   })
        //               }
        //           }
        //       }
        //   }
          var anuncio = new Anuncio() 
           //anuncio.idUser = user._id;
           //anuncio.Categoria = categ;//
           anuncio.dateCreated = new Date();
           anuncio.titulo = titulo;//
           anuncio.preco = preco;//
           anuncio.descricao = descricao;//
           //anuncio.views= 0;//
           //anuncio.images = null           const info = await anuncio.save();
          res.json({
            anuncio: anuncio
          });
       
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
// const { v4: uuid } = require('uuid');
// const jimp = require('jimp');
// const Anuncio = require('../models/anuncio');
// const Categoria = require('../models/categorias');
// const mongoose = require('mongoose');

// const User = require('../models/user');



// const addImage = async (buffer) => {
//     let imgName = `${uuid()}.jpg`;
//     let tmpImage = await jimp.read(buffer);
//     tmpImage.cover(350, 350).quality(70).write(`./public/assets/${imgName}`);
//     return imgName;
// }
// module.exports = {
    
     
//     addAnuncio: async (req, res) => {
        
//          var { titulo, preco,  token, categ, descricao, views } = req.query;

//         const user = await User.findOne({ token: token }).exec();

//         if (!titulo || !descricao) {
//               res.json({erro: 'nao veio nada ' });
//               return;
//           }
//           if (preco) {
//               preco = preco.replace('.', '').replace(',', '.').replace('R$', '');
//               preco = parseFloat(preco);
//           } else {
//              preco = 0;
//           }
//          if (req.files && req.files.img) {
//              if (req.files.img.length != 0) {
//                  if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
//                      let url = await addImage(req.files.img.data);
//                      anuncio.images.push({
//                          url,
//                          default: false
//                      })
//                  }
//              } else {
//                  for (let i = 0; i < req.files.img.length; i++) {
//                      if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
//                          let url = await addImage(req.files.img.data);
//                          anuncio.images.push({
//                              url,
//                              default: false
//                          })
//                      }
//                  }
//              }
//          }
//          var anuncio = new Anuncio() 
//           anuncio.idUser = user._id;
//           anuncio.Categoria = categ;//
//           anuncio.dateCreated = new Date();
//           anuncio.titulo = titulo;//
//           anuncio.preco = preco;//
//           anuncio.descricao = desc;//
//           anuncio.views= 0;//
//           anuncio.images = null

//           const info = await anuncio.save();
//           res.json({
//               info: info
//           });
       
//       },
//       getCategoria: async (req, res) => {
//          let cat = await Categoria?.find()
//          let categoria = [];
//          for (let i in cat) {
//              categoria.push({...cat[i]._doc,img:` ${process.env.BASE}/assets/${cat[i].slogan}.jpg`.name});
//          }
//          res.json({ categoria});
//      },
//      getList: async (req, res) => {
//         let list = await User.find()
//         res.json({list: list})
//      }
  
// }


