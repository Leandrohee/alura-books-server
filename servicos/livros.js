//SERVICOS  -- SERVEM PARA PEGAR OS DADOS DO BANCO DE DADOS  (JSON)
const fs = require("fs")

function getTodosLivros(){                                          //Funcao responsavel por ler todo o arquivo Json e retornar o resultado formado como Json
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrados = livros.filter(livro => livro.id === id)[0]
    return livroFiltrados
}

function insereLivro(livroNovo){
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const listaLivrosNova = [...livrosAtuais, livroNovo]

    fs.writeFileSync("livros.json",JSON.stringify(listaLivrosNova))
}

function modificaLivro(modificacao,id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacao}
    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

module.exports = {                                                  //Exportando a funcao
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro
}