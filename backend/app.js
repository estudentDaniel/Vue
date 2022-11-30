require('dotenv').config();
const db = require('./database');
const User = require('./model/user')

const express = require('express');
const app = express();

app.get("/app",(req,res)=>{
    res.json({msg: "esta funcionado"})
})

app.post('/register', async (req, res)=>{
    try {
        const { email, password} = req.body;

        if (! (email && password)) {
            res.status(400).send('Campo obrigatorio')
        }

        const novoUser = await User.findOne({ email: email})

        if(novoUser){
            return res.status("409").send("usuario ja existente")
        }

        encryptedPass = await bcrypt.hash(password, 10)

        //criando usuario no banco

        const user = await User.create({
            email: email,
            password: encryptedPass
        });
        const token = jwt.sign(
            { user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

            user.token = token;

            res.status(201).json({user})


    } catch (error) {
        console.log(err)
    }
})



module.exports = app;