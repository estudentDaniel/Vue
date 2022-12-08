const {checkSchema} = require('express-validator')
//middleware entre rota e controle
module.exports = {
    //novo usuario
    signup: checkSchema({
        name:{
           notEmpty: true, //nao pode ficar vazio
           trim: true, //tira espaco
           isLength: {
             options: { min: 2} //tamanho do nome
           }, 
           errorMessage: "O nome precisa de pelo menos 2 caracteres"
        },
        email: {
            isEmail: true, // faz tudo
            normalizeEmail: true, //arruma
            errorMessage: "Erro no email"
        },
        states:{
            notEmpty: true,
            errorMessage: "Erro ao cadastar estado"
        },
        passwordHash: {
            notEmpty: true,
            isLength:{
                options:{min: 2}
            },
            errorMessage: "Erro no password tamanho nao pode ficar vazia"
        },
        

    })
}