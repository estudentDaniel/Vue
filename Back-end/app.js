
const express = require('express')
const router = express.Router();
const app = express();
router.get("/",(req, res)=>{

   res.json({msg: "esta top"})
})


app.use(express.json())