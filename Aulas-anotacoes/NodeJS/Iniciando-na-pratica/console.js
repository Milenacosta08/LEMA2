/*
    global  ->  variáveis globais
    __dirname  ->  caminho até o diretório onde estou
    __filename  ->  caminho até o arquivo onde estou
*/
console.log(global)
console.log(__dirname)
console.log(__filename)


/*  CHAMAR MÓDULOS NATIVOS DO NODEJS
    require  ->  chama módulos que já existem
        - precisa de um argumento
    * basename  ->  nome base do arquivo
        - função que precisa de argumento
*/
const path = require('path')
console.log(path.basename(__filename))


/* CHAMAR MEUS MÓDULOS
    require  
        * com o caminho do módulo
 */
const myModule = require('./exports')
console.log(myModule)