const Categoria = require('../models/categorias');
const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');
const jimp = require('jimp');
const State = require('../models/estado');
const User = require('../models/user');
const Anuncio = require('../models/anuncio');


const addImage = async (buffer) => {
    let newName = `${uuid()}.jpg`;
    let tmpImage = await jimp.read(buffer); //leu a imagem
    tmpImage.cover(500, 500).quality(75).write(`./assets/${newName}`);
    return newName;
}
module.exports = {
    
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
    addAnuncio: async (req, res) => {
  
         let { titulo, preco,  token, categ, descricao, views } = req.body;
         const user = await User.findOne({ token: token }).exec();

       if (!titulo || !descricao) {
             res.json({ error: 'CAMPO NAO PREENCHIDO' });
             return;
         }
         if (preco) {
             preco = price.replace('.', '').replace(',', '.').replace('R$', '');
             preco = parseFloat(preco);
         } else {
            preco = 0;
         }
      
         const neWAuncio = new Anuncios();
         neWAuncio.idUser = user.id;
         neWAuncio.Categoria = categ;
         neWAuncio.dateCreated = Date.now();
         neWAuncio.titulo = titulo;
         neWAuncio.preco = preco;
         neWAuncio.descricao = desc;
         neWAuncio.views= views;
         

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

         const novo = await neWAuncio.save();
         res.json({
             id: novo.id
         });
     },

    

    getItem: async (req, res) => {

    }

    

    }


