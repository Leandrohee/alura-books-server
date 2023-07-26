const {Router} = require("express")                                 //Importando a Router do Express
const router = Router()

router.get("/", (req,res)=>{
    res.send("ola Leandro")
})


module.exports = router                                             //Essa eh a forma de importar no backend