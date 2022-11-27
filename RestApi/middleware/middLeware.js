//referenciar o model user, criar model, verifica token (query e body)
//verifica token vazio,  e valido ou invalido o token
const User = require('../models/user');

module.exports = {
    private: async (req, res, next) => {
// existe token?
        if ( !req.query.token && !req.body.token ) { 
            res.json({
                notallowed: true, // nao é permitido 
            })
            return;
        }
//verifica token na query
        if ( req.query.token ){
            token = req.query.token;
        } 
// verifica token no body
        if ( token.body.token ){
            token = req.body.token;
        }
// verifica token vazio
        if ( token == '' ) {
            res.json({ notallowed : true }) // nao pode acessar
            return; 
        }
// buscando token
        const user = await User.findOne(token);
//verifica se trouxe
        if ( !user ){
            res.json({ notallowed: true}); 
            return; 
        }

         next();
    },
    
}