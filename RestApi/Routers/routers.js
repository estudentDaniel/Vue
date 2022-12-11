const express =  require('express')
const router  = express.Router();
const AuthController = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')
const AnuncioController = require('../controllers/AuncioContrller')
const AuthMiddel= require('../middleware/middLeware')
const AuthValidator = require('../validator/validator.js')
const UserValidator = require('../validator/UserValidator')
// router.get('/teste', (req, res) =>{
//     res.json({msg: true})
// })

//Info estado
router.get('/states', UserController.getStates)
//login USER
router.post('/user/signin',AuthValidator.signin, AuthController.signin)//atentica
router.post('/user/signup',AuthValidator.signup, AuthController.signup)//cria novo
//Info USER, rota, private, middleware e  token
router.get('/users/use', AuthMiddel.private, UserController.info) // SO acessa quem for cadastrado/adm

router.put('/user/use',UserValidator.editAction, UserController.editAction) //editAction
//exclusão so com id!
router.delete('/id:',UserController.delete)
//categoria
router.get('/categorias', AnuncioController.getCategoria)
//auncio
router.post('/addAnuncio', AnuncioController.addAnuncio)
router.get('/list', AnuncioController.getList)
//Deve se implementado algo mais

module.exports = router


