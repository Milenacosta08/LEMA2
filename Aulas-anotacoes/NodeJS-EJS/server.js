// importando o express
const express = require('express')

// instanciando o express
const app = express()

// falar ao express como ele vai renderizar
app.set("view engine", "ejs")

// criando uma rota
app.get("/", function (req, res) {
    const items = [
        {title:'D',
        message: 'esenvolvedor também sofre'},
        {title:'E',
        message: 'JS usa JavaScript para renderizar HTML'},
        {title:'M',
        message: 'uito fácil de usar'},
        {title:'A',
        message: 'morzinho'},
        {title:'I',
        message: 'nstall EJS'},
        {title:'S',
        message: 'intaxe simples'}
    ]

    const subtitle = 'Uma linguagem de modelagem para criação de página HTML'
    res.render("pages/index", { qualitys : items, subtitle : subtitle })
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

// Rodar (porta)
app.listen(8080)
console.log('Rodando')