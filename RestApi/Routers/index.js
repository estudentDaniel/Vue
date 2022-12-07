const express = require('express');
const router = express.Router();

//Templete enginee -- Layout
router.get("/", (req, res)=> {
    let obj = {
        nome: req.query.nome,
        idade: req.query.idade,
        mostrar: false,
        alunos: [
            {aluno: 'daniel', nota: 10}
        ]
    }
    res.render('home.mst', obj)
})





module.exports = router