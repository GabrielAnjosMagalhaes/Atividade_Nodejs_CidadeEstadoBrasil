fs = require("fs").promises

//executando função de inicio
listarCapitais()    

//função criada para executar outras funções ao rodar o código
async function inicio(){ // criando função inicio de forma assícrona
 criarArquivos() //ao iniciar executar a função criarArquivos
 listarCapitais() //ao iniciar executar a função listarCapitais
 MaisCidades()//ao iniciar executar a função estadoMaisCidades
 capitais()//ao iniciar executa a função capitais que irá buscar a capital dos estados 
}   

async function criarArquivos(){ //essa função criará os arquivos que armazenarão os estados e as cidades importadas 
    let dados = await fs.readFile("./importado/Estados.json") // recebendo dados do arquivo exportado: Estados.json

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

async function contadorM(_uf){//função para retornar a quantidade de cidades baseado no estado selecionado (como por exemplo MG)
//aqui irei repetir de certo modo o comando utilizado na função criarArquivos 
const dados = await fs.readFile(`./estados/${_uf}.json`) //lendo dados da pasta criada: "estados" baseado em seu UF
const cidades = JSON.parse(dados) //convertendo dados para forma legível
console.log(`${_uf} tem ${cidades.length} cidades`) // imprimindo o numero de cidades encontradas nos estados
return cidades.length // retornando o numero de cidades
}

async function MaisCidades(mais) {//criando função para obter os estados com mais cidades 
    const estados = JSON.parse(await fs.readFile("./importado/Estados.json")); //lendo arquivo e convertendo seu conteudo para legivel    
    const lista = []; // criando um array para ser usado como lista 

    
   for (estado of estados) { // criando um for para utilizar a função de contagem já criada para adicionar elementos a lista
        const contagem = await contadorM(estado.Sigla); //criando variável para receber as siglas dos estados 
        lista.push({ _uf: estado.Sigla, contagem });//adicionando na array lista SIGLA - CONTAGEM
        console.log(contagem)//mostrando o array com os Estados + Contagem de cidades 
    }
    
 
    lista.sort((a, b) => { //colocando dados da lista em ordem alfabética
        if (a.contagem < b.contagem) return 1;
        else if (a.contagem > b.contagem) return -1;
        else return 0;
    });

    const resultado = [];
    if (mais) {
        lista.slice(0, 5).forEach(item => resultado.push(item._uf + " - " + item.contagem));
    } else {
        lista.slice(-5).forEach(item => resultado.push(item._uf + " - " + item.contagem));
    }

    console.log(resultado);
}
    
//atividade continuação 

async function listarCapitais (){
//criando pasta com as capitais 
let dados = await fs.readFile("./importado/capitais.json")
const capitais = JSON.parse(dados)
//console.log(capitais )

for(y of capitais) {
    const capitalEstado = capitais.filter(y => y.capitais === capitais.Sigla) 
    await fs.writeFile(`./capitais/${capitais.Sigla}.json`, JSON.stringify(capitalEstado))
    console.log(capitalEstado)
}



}


/*
async function criarArquivos(){ //essa função criará os arquivos que armazenarão os estados e as cidades importadas 
    let dados = await fs.readFile("./importado/Estados.json") // recebendo dados do arquivo exportado: Estados.json

  for (estado of estados) { // criando um for para criar arquivo com as os estados e as cidades pertencentes a ele
        const cidadesEstado = cidades.filter(cidade => cidade.Estado === estado.ID) //definindo variavel das cidades do estado(cidadeEstado) para filtrar as cidades por meio do id dos estados
        await fs.writeFile(`./estados/${estado.Sigla}.json`, JSON.stringify(cidadesEstado)) //criando arquivos na pasta estados
    }
    //console.log(dados) //verificando 

    const estados = JSON.parse(dados) //convertendo os dados recebidos em forma legível

    //console.log(estados) //verificando

    //aqui irei repetir o mesmo processo porém para as cidades
    dados = await fs.readFile("./importado/Cidades.json")
    const cidades = JSON.parse(dados)
    
    //console.log(cidades) //verificando

  
}

async function contadorM(_uf){//função para retornar a quantidade de cidades baseado no estado selecionado (como por exemplo MG)
    //aqui irei repetir de certo modo o comando utilizado na função criarArquivos 
    const dados = await fs.readFile(`./estados/${_uf}.json`) //lendo dados da pasta criada: "estados" baseado em seu UF
    const cidades = JSON.parse(dados) //convertendo dados para forma legível
    console.log(`${_uf} tem ${cidades.length} cidades`) // imprimindo o numero de cidades encontradas nos estados
    return cidades.length // retornando o numero de cidades
    }
    

*/