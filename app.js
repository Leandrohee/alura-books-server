const express = require("express")
const rotaLivro = require("./rotas/livro")
const app = express()
const port = 8000

app.use(express.json())                                                     //Com isso a aplicacao aceita receber bodys do tipo JSON

app.use("/livros", rotaLivro)                                               //importando a rota livros e colocando o nome como "/livros"

app.listen(port,()=>{
    console.log(`Escutando a porta ${port}`)
})