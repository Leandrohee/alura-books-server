//CONTROLADORES
const fs = require('fs')
const { getTodosLivros , getLivroPorId, insereLivro, modificaLivro} = require('../servicos/livros')


function getLivros(req, res) {                                       //Criando a funcao HTTP Get da APi para pegar todos os livros
    try {
        const livros = getTodosLivros()
        res.send(livros)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {                                       //Criando a funcao HTTP Get da APi para pegar somente o livro especifico
    try {
        const id = req.params.id                                    //Pega o id da url digitado
        const livro = getLivroPorId(id)
        res.send(livro)
    }
    catch (error) {
        res.status(500)                                             //Atribuindo um erro http numero 500
        res.send(error.message)                                     //Enviando msg de erro
    }
}

function postLivros(req, res) {                                      //Criando a funcao HTTP post da APi
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)                                      //Enviando o livro novo para a funcao insereLivro                    
        res.status(201)
        res.send("Livro inserido com sucesso")
    }
    catch (error) {
        res.status(500)                                             //Atribuindo um erro http numero 500
        res.send(error.message)                                     //Enviando msg de erro
    }
}

function patchLivros(req, res) {                                     //Criando a funcao HTTP path da APi
    try {
        const modificacao = req.body
        const id = req.params.id                                    //Pega o id da url digitado
        modificaLivro(modificacao,id)
        res.send("Livro modificado com sucesso")

    }
    catch (error) {
        res.status(500)                                             //Atribuindo um erro http numero 500
        res.send(error.message)                                     //Enviando msg de erro
    }
}

function deleteLivros(req, res) {                                    //Criando a funcao HTTP delete da APi
    res.send("ola delete Leandro")
}


module.exports = {                                                  //exportando a funcao getlivros
    getLivros,
    getLivro,
    postLivros,
    patchLivros,
    deleteLivros
}