const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const State =  require('../models/estado')
const User = require('../models/user')
const auncioads = require('../models/anuncio');
const { validationResult, matchedData } = require('express-validator');
module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();
        res.json({ states });
    },
    info: async (req, res) => {

     //indentificar usuario pelo token
     let token = req.query.token //buscando pela query por get
     //encontre um token 
     const user = await User.findOne({ token: token })
     res.json({
         name: user.name,
         email: user.email,
       
      })

    },
    editAction: async (req, res) => {
        const erros =  validationResult(req)// vai me retornar os erros
        if (!erros.isEmpty()){ //se tem erro eu mapeio
             res.json({error: erros.mapped()
            })
            return;
        }
        const data = matchedData(req)

        let update = {} // aqui o cara podera escolher oque editar

        // se o cara quiser auterar o nome 
            if (data.name){
                update.name = data.name
            }
            if (data.email){
                
                const emailCheck = await User.findOne({email: data.email})
                if (emailCheck){
                    res.json({erros: 'Email atualizo '})
                    return;
                }
                update.email = data.email
            }
             if (data.states) {
                if (mongoose.Types.ObjectId.isValid(data.id)) {
                    const statesCheck = await State.findById(data.id);
                    if (!statesCheck) {
                        res.json({ error: 'Estado não existe' });
                        return;
                    }
                updates.states = data.states;
                    } else {
                        res.json({ error: 'Código do estado em formato inválido' });
                        return;
                    }
            }
            if (data.passwordHash){
                
                update.passwordHash = await bcrypt.hash(data.passwordHash, 10);   
            }
            //aguarda meu brother  que vou te atualizo
            await User.findByIdAndUpdate({token: data.token}, {$set: update});

            res.json({erros: 'Deu certo bill'});


    },
    delete: async (req, res) => {
        let data = await User.deleteOne({id: req.params.id});
        res.json({data: data});
    }
    
}