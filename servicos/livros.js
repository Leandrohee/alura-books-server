//SERVICOS  -- SERVEM PARA PEGAR OS DADOS DO BANCO DE DADOS  (JSON)
const fs = require("fs")


function getTodosLivros(){                                          //Funcao responsavel por ler todo o arquivo Json e retornar o resultado formado como Json
    return JSON.parse(fs.readFileSync("livros.json"))
}


module.exports = {                                                  //Exportando a funcao
    getTodosLivros
}