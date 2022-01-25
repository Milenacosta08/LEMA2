/*
    Cadeia de caracteres
    ""  ->  aspas duplas
    ''  ->  apsas simpples
    ``  ->  template literals ou template strings
*/

console.log("Milena")
console.log('milena')
console.log("Milena 'miena'")
console.log(`milena ""  '' 
mult-linhas ${1+1}`)


/*
    Number

   - Números
        33  ->  inteiros
        12.5  -> reais - float
        NaN  -> not a number
        infinity  ->  infinito
*/

console.log(33)
console.log(12.5)
console.log(12.5 + 35)
console.log(12.5 / 3)
console.log(12.5 / "abdc") //vai dar NaN
console.log(12 === Infinity) // vai dar false


/* 
    Boolean

    - somente dois valore
        true  -> verdadeiro
        false  -> falso
*/

console.log(false)
console.log(true)


/*
    Undefine
        - indefinido
    
    Null
        - Nulo
        - Objeto que não possui nada dentro
        - diferente de indefinido
*/

console.log(null === undefined)


/*
 Object
    - objeto
    - propriedades / atributos
    - funcionalidades / métodos

{propriedade: "valor"}
*/

console.log({
    name: "Milena",
    idade: 20,
    andar: function(){
        console.log('andar')
    }
})

/*
    Array
        - vetores
        - uma lista
        - agrupamento de dado

    ["Milena", 20]
*/

console.log(['macarrão','arroz','feijão'])

/*
    Data types
        * primitive / primitive value
        * strictural
        * strutural primitive
    
    PRIMITIVOS
        - string "asv" "abc"
        - number
        - boolean
        - undefined
        - symbol
        - bigInt
    
        Estruturais
            - Object
                * array
                * map
                * set
                * date
                * ...
            
            - Function

        PRIMITIVO ESTRUTURAL / STRUCTTRAL ROOT PRIMITIVE
            - null
*/
