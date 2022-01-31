// setTimeOut  ->  Rodar uma função depois de N milissegundos

const timeOut = 2000
const finished = () => console.log('Done!')

//setTimeout(finished, timeOut)
//console.log('Espere 3 segundos')


// clearTimeout  ->  Cancelar um timeOut
let timer = setTimeout(finished, timeOut)

clearTimeout(timer)
console.log('Cancelado')


// setInterval  ->  Irá rodar uma função N vezes (indefinidamente)
// depois de X milessegundos
const checking = () => console.log('Checking!')

let interval = setInterval(checking, timeOut)


// clearInterval  ->  Irá cancelar um setInterval registrado
setTimeout( () => clearInterval(interval), 5000)


