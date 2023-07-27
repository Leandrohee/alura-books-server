//CONTROLADORES
const fs = require('fs')
const { getTodosLivros } = require('../servicos/livros')


function getLivros(req, res) {                                       //Criando a funcao HTTP Get da APi
    try {
        const livros = getTodosLivros()
        res.send(livros)
    }
    catch (error) {
        console.log(error)
    }
}

function postLivros(req, res) {                                      //Criando a funcao HTTP post da APi
    res.send("ola post Leandro")
}

function patchLivros(req, res) {                                     //Criando a funcao HTTP path da APi
    res.send("ola patch Leandro")
}

function deleteLivros(req, res) {                                    //Criando a funcao HTTP delete da APi
    res.send("ola delete Leandro")
}


module.exports = {                                                  //exportando a funcao getlivros
    getLivros,
    postLivros,
    patchLivros,
    deleteLivros
}