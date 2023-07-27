//ROTAS
const {Router} = require("express")                                     //Importando a Router do Express
const {getLivros, getLivro, postLivros, patchLivros, deleteLivros} = require("../controladores/livros.js")
const router = Router()

router.get("/", getLivros)                                              //Roteando para a funcao GET para TODOS os livros
router.get("/:id",getLivro)                                             //Roteando para a funcao GET para livros especificos

router.post("/", postLivros)                                            //Roteando para a funcao POST para TODOS os livros

router.patch("/:id", patchLivros)                                       //Roteando para a funcao DELET para TODOS os livros

router.delete("/", deleteLivros)

module.exports = router                                             //Essa eh a forma de importar no backend