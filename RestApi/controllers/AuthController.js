const {validationResult, matchedData} = require('express-validator');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/user')
const State = require('../models/estado')
module.exports = {
    signin: async (req, res)=>{
        const erros =  validationResult(req)// vai me retornar os erros
        if (!erros.isEmpty()){ //se tem erro eu mapeio
             res.json({error: erros.mapped()
            })
            return;
        }
        const data = matchedData(req)
//verifica se o email existe no banco
       const user = await User.findOne({email: data.email})//buscanco meu email
        if (!user){ //se nao veio
            res.json({error: "Email não está cadastrado."});
            return;
        }
        
//verifica se a senha existe no banco
//aqui vou verificar se a senha e o email é do mesmo usuario
    const match = await bcrypt.compareSync(data.passwordHash, user.passwordHash);
 
    if (!match) {
    res.json({ error: 'Email ou senha não corresponde' });
    return;
        }
    const padraoToken = (Date.now + Math.random()).toString();
    const token = await bcrypt.hash(padraoToken, 10);
    user.token = token;
    await user.save();

    res.json({ token, email: data.email });
    },
    signup: async (req, res)=>{
        const erros =  validationResult(req)
        if (!erros.isEmpty()){ 
             res.json({error: erros.mapped()
            })
            return;
        }
        const data = matchedData(req)
        const user = await User.findOne({email: data.email})
         if (user) {
             res.json({
                 error: { email: { mgs: "Email ja existe"}}
             })
             return;

         }else{
            res.json({msg: 'cadastrado'})
         }
         if(mongoose.Types.ObjectId.isValid(data.states)){
             const stateItem = await State.findById(data.states)
          if (!stateItem) {
              res.json({
                  error:{ states: {msg: 'esatdo inesistente'}}
              })
              return;
             }else{
                 res.json({
                     error: "ObjectId invalido ..."
                   
                 })
                 return;
             } 
         }
        
        const passwordHash = await bcrypt.hash(data.passwordHash, 10) //encriptitando minha senha
        const geraNumerpParaToken = (Date.now() + Math.random()).toString(); //gera numero para token
        const token = await bcrypt.hash(geraNumerpParaToken, 10) //gerei o token

        //gravar no banco

        const NewUser = new User({
            name: data.name,
            email: data.email,
            states: data.states,
            passwordHash,
            token: token

        })
        //res.send().status(200).json({token})
        await NewUser.save()
        
        
    },
    editAction: async (req, res)=>{
        
    }
}