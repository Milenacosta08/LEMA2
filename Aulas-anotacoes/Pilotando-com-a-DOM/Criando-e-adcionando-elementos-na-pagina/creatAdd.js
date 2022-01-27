// Ciando e adicionando elementos na página

// createElement  ->  cria o elemento
const nav = document.createElement('nav')
nav.innerText = 'Menu'

const div = document.createElement('div')
div.innerHTML = 'Meu primeiro <strong>texto</strong>'

const main = document.createElement('main')
main.innerHTML = '<p>Texto do meu main</p>'

// append -> adiciona o elemento depois do último filho
// prepend -> adiciona o elemento antes do primeiro filho
const header = document.querySelector('header')
header.append(div)
header.prepend(nav)


// insertBefore -> adicionar elemento no meio
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(main, script)


// inserir no próximo
body.insertBefore(main, header.nextElementSibling)
