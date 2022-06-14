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

    for (estado of estados) { // criando um for para criar arquivo com as os estados e as cidades pertencentes a ele
        const cidadesEstado = cidades.filter(cidade => cidade.Estado === estado.ID) //definindo variavel das cidades do estado(cidadeEstado) para filtrar as cidades por meio do id dos estados
        await fs.writeFile(`./estados/${estado.Sigla}.json`, JSON.stringify(cidadesEstado)) //criando arquivos na pasta estados
    }
}
