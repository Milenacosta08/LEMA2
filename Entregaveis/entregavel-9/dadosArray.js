/*
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse 
        autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


// Quantidade de categorias
const qtdCategories = booksByCategory.length
console.log('Quantidade de categorias: ', qtdCategories)


// Quantidade de livros por categoria
for(let book of booksByCategory){
    console.log('Livros da categoria:', book.category)
    console.log(book.books.length)
}


// Contar o número de autores
function contAuthors(){
    let authors = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Quantidade de autores: ", authors.length)
}

contAuthors()


// Mostrar livros do Augusto Cury
function booksOfAugustCury(){
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === "Augusto Cury"){
                console.log(book.title)
            }
        }
    }
}
console.log('Livros do autor August Cury')
booksOfAugustCury()


// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
function booksOfAuthor(author) {
    console.log("Livros do autor", author)
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author){
                console.log(book.title)
            }
        }
    }
}

booksOfAuthor("George S. Clason")