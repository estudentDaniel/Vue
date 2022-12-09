const { v4: uuid } = require('uuid');
const jimp = require('jimp');
const Category = require('../models/categorias');
const State = require('../models/estado');
const User = require('../model/user');
const Ad = require('../models/anuncio');

// Função para ajustar a imagem... obter imagem --> buffer de bytes
//definir nome, cortar imagem, comprimir a imagem, salvar as alterações

const addImage = async (buffer) => {
    let newName = `${uuid()}.jpg`;
    let tmpImage = await jimp.read(buffer); //leu a imagem
    tmpImage.cover(500, 500).quality(75).write(`./assets/${newName}`);
    return newName;
}
module.exports = {
    addAction: async (req, res) => {
        // enviar imagens
        let { titulo, preco,  token, categ, descricao } = req.body;
        const user = await User.findOne({ token: token }).exec();

        if (!titulo || !categ || !descricao) {
            res.json({ error: 'Titulo ou categoria ou descrição não preenchido' });
            return;
        }
        if (preco) {
            preco = price.replace('.', '').replace(',', '.').replace('R$', '');
            preco = parseFloat(preco);
        } else {
           preco = 0;
        }
        
        const newAd = new Ad();
        newAd.idUser = user._id;
        newAd.state = user.state;
        newAd.category = cat;
        newAd.dateCreated = Date.now();
        newAd.title = title;
        newAd.price = price;
        newAd.description = desc;
        newAd.status = true;

        console.log(req.files.img);
        if (req.files && req.files.img) {
            if (req.files.img.length != 0) {
                //definir formatos da imagem e guardar em disco
                if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
                    let url = await addImage(req.files.img.data);
                    newAd.images.push({
                        url,
                        default: false
                    })
                }
            } else {
                for (let i = 0; i < req.files.img.length; i++) {
                    if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)) {
                        let url = await addImage(req.files.img.data);
                        newAd.images.push({
                            url,
                            default: false
                        })
                    }
                }
            }
        }

        const novo = await newAd.save();
        res.json({
            id: novo._id
        });
    },

    getList: async (req, res) => {

    },

    getItem: async (req, res) => {

    },

    editAction: async (req, res) => {

    },

    getCategoria: async (req, res) => {
        const categorias = await Category.find();
        let categoria = [];
        for (let i in categorias) {
            categoria.push({
                ...cats[i].name
            });
        }
        res.json({ categoria });
    }
}
