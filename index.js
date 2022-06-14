fs = require("fs").promises

//executando função de inicio
inicio()

//função criada para executar outras funções ao rodar o código
async function inicio(){ // criando função inicio de forma assícrona
 criarArquivos() //ao iniciar executar a função criarArquivos

}

async function criarArquivos(){ //essa função criará os arquivos que armazenarão os estados e as cidades importadas 
    let dados = await fs.readFile("./importado/Estados.json") // recebendo valores do arquivo exportado: Estados.json

    //console.log(dados) //verificando 

    const estados = JSON.parse(dados) //convertendo os dados recebidos em forma legível

    //console.log(estados) //verificando

    //aqui irei repetir o mesmo processo porém para as cidades
    dados = await fs.readFile("./importado/Cidades.json")
    const cidades = JSON.parse(dados)
    
    //console.log(cidades) //verificando

    for (estado of estados) {
        const cidadesEstado = cidades.filter(cidade => cidade.Estado === estado.ID) 
        await fs.writeFile(`./estados/${estado.Sigla}.json`, JSON.stringify(cidadesEstado))
    }
}
