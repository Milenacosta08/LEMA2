/*
    - EXPORTAR UMA FUNÇÃO CHAMADA getFlag QUE RECEBERÁ UMA STRING
    - ESSA FUNÇÃO DEVERÁ BUSCAR DENTRO DO ARRAY PROCESS.ARGV A FLAG DESEJADA E RETORNAR O VALOR DA FLAG
*/

module.exports = function getFlag(str) {
    const index = process.argv.indexOf(str)
    return process.argv[index + 1]
}
