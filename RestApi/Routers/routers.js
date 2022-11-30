const express =  require('express')
const router  = express.Router();
const AuthController = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')
const AnuncioController = require('../controllers/AuncioContrller')
const AuthMiddel= require('../middleware/middLeware')
// router.get('/teste', (req, res) =>{
//     res.json({msg: true})
// })

//Info estado
router.get('/states', AuthMiddel.private, UserController.getStates)

//login USER
router.post('/user/signin', AuthController.signin)
router.post('/user/signup', AuthController.signup)

//Info USER, rota, private, middleware e  token
router.get('/user/use', AuthMiddel.private, UserController.info) // SO acessa quem for cadastrado
router.put('/user/use', AuthController.editAction) //editAction

//categoria
router.get('/categoria', AnuncioController.getCategoria)

//auncio
router.post('/anuncio/add', AnuncioController.addAnuncio)
router.get('/user/list', AnuncioController.getList)
router.post('/user/item', AnuncioController.getItem)
router.put('/user/:id', AnuncioController.editAction) //editAction
router.delete('/user/:id', AnuncioController.delete)

module.exports = router