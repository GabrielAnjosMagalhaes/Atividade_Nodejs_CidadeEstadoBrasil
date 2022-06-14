# Atividade NodeJs CidadesEstadoBrasil

Criando seguinte atividade proposta em sala:



Exercitar os seguintes conceitos trabalhados:
Criação de um projeto Node.js
Manipulação de arquivos
Manipulação de objetos JSON

O aluno deverá baixar os arquivos Cidades.json e Estados.json do seguinte link
(https://github.com/felipefdl/cidades-estados-brasil-json) e coloca-los dentro do seu projeto.
O arquivo Estados.json possui uma listagem com todos os estados do Brasil, cada um
representado por um ID.
No arquivo Cidades.json estão listadas todas as cidades do Brasil, com seu respectivo estado
representando pelo ID fazendo referência ao arquivo Estados.json.

1. Criar uma função que irá criar um arquivo JSON para cada estado representado no
arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a
aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o
UF do estado, por exemplo: MG.json.

2. Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do
arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.

3. Criar um método que imprima no console um array com o UF dos cinco estados que
mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode
usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF -
74”, “UF - 72”, “UF - 65”]
