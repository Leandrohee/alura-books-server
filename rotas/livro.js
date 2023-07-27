//ROTAS

const {Router} = require("express")                                     //Importando a Router do Express
const {getLivros, postLivros, patchLivros, deleteLivros} = require("../controladores/livros.js")
const router = Router()

router.get("/", getLivros)                                              //Roteando para a funcao GET

router.post("/", postLivros)

router.patch("/", patchLivros)

router.delete("/", deleteLivros)

module.exports = router                                             //Essa eh a forma de importar no backend