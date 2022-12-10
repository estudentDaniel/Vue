const Anuncio = require('../models/anuncio');
const Categoria = require('../models/categorias');
const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');
const jimp = require('jimp');
const User = require('../models/user');



const addImage = async (buffer) => {
    let newName = `${uuid()}.jpg`;
    let tmpImage = await jimp.read(buffer);
    tmpImage.cover(500, 500).quality(75).write(`./assets/${newName}`);
    return newName;
}
module.exports = {
    
     
    addAnuncio: async (req, res) => {
  
         var { titulo, preco,  token, categ, descricao, views } = req.body;

         const user = await User.findOne({ token: token }).exec();

       if (!titulo || !descricao) {
             res.json({ titulo: titulo, preco: preco });
             return;
         }
         if (preco) {
             preco = preco.replace('.', '').replace(',', '.').replace('R$', '');
             preco = parseFloat(preco);
         } else {
            preco = 0;
         }
      
        var anuncio = new Anuncio();   
         anuncio.idUser = user._id;
         anuncio.Categoria = categ;
         anuncio.dateCreated = new Date();
         anuncio.titulo = titulo;
         anuncio.preco = preco;
         anuncio.descricao = desc;
         anuncio.views= 0;

        const info = await neWAuncio.save();
         res.json({
             id: info._id
         });
        // console.log(req.files.img);
        // if (req.files && req.files.img) {
        //     if (req.files.img.length != 0) {
        //         //definir formatos da imagem e guardar em disco
        //         if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
        //             let url = await addImage(req.files.img.data);
        //             newAd.images.push({
        //                 url,
        //                 default: false
        //             })
        //         }
        //     } else {
        //         for (let i = 0; i < req.files.img.length; i++) {
        //             if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
        //                 let url = await addImage(req.files.img.data);
        //                 newAd.images.push({
        //                     url,
        //                     default: false
        //                 })
        //             }
        //         }
        //     }
        // }

         
     },
     getCategoria: async (req, res) => {
        let cat = await Categoria?.find()
        let categoria = [];
        for (let i in cat) {
            categoria.push({
                ...cat[i]._doc,
                img:` ${process.env.BASE}/assets/${cat[i].slogan}.jpg`.name
                
            });
        }
        res.json({ categoria});
    },

    

    }


