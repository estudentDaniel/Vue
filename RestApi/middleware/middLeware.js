//referenciar o model user, criar model, verifica token (query e body)
//verifica token vazio,  e valido ou invalido o token
 const User = require('../models/user');

module.exports = {
    private: async (req, res, next) => {
// existe token?
    if (!req.query.token && !req.body.token){
                 res.json({ logado: false  })
                return;
            }
//verifica token na query
        if ( req.query.token ){
            token = req.query.token;
        } 
// verifica token no body
        if ( req.body.token ){
            token = req.body.token;
        }
        
// verifica token vazio
        if ( token == '' ) {
             res.json({ notallowed : true }) // nao pode acessar
             return; 
         }
 // buscando token
    const user = await User.findOne({ token: token })
 //verifica se trouxe
    if(!user){
                res.json({logado : false });
                return;
            }
    
    next();
    },
    
 }
