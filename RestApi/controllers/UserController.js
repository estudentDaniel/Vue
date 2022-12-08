const State =  require('../models/estado')
module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();
        res.json({ states });
    },
    editAction: async (req, res) => {
        
    },
    info: async (req, res) => {
        
    }
}