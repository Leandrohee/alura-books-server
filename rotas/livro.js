const {Router} = require("express")                                     //Importando a Router do Express
const {getLivros} = require("../controladores/livros.js")
const router = Router()

router.get("/", getLivros)                                              //Roteando para a funcao GET

router.post("/", (req,res)=>{                                           //Roteando para a funcao GET
    res.send("Acesso pelo metodo POST")
})

router.patch("/", (req,res)=>{                                          //Roteando para a funcao PATCH
    res.send("Acesso pelo metodo PATCH")
})

router.delete("/", (req,res)=>{                                         //Roteando para a funcao DELET
    res.send("Acesso pelo metodo DELET")
})

module.exports = router                                             //Essa eh a forma de importar no backend