// Porgramação Orientada a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    // A # FAZ COM QUE ESSE MÉTODO NÃO SEJA VISTO LÁ FORA
    #calcularArea() {
        return this.altura * this.largura
    }
}

let poligono = new Poligono(50, 60)
console.log(poligono.area)


// HERANÇA

// Class pai
class Veiculo {
    rodas = 4;

    mover(direcao) {}
    virar(direcao) {}
}

// Class filha
class Moto extends Veiculo {
    constructor() {
        super() // Puxar atributos e métodos do pai
        this.rodas = 2
    }
}


// POLIFORMISMO

// CLASS
class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if(this.peso <= 50) {
            this.categoria = 'Infantil'
        }
        else if(this.peso <= 65) {
            this.categoria = 'Juvenil'
        }
        else {
            this.categoria = 'Adulto'
        }
    }
}

// SUB-CLASS
class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if(this.peso <= 54) {
            this.categoria = 'Pluma'
        }
        else if(this.peso <= 60) {
            this.categoria = 'Leve'
        }
        else if(this.peso <= 75){
            this.categoria = 'Meio-leve'
        }
        else {
            this.categoria = 'Pesado'
        }
    }
}


// ABSTRAÇÃO

// Superclasse - Abstrata
class Parafuso {
    constructor() {
        if(this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada')
    }

    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'Fenda'
    }
}

class Phillips extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'Phillips'
    }
}

class Allen extends Parafuso {}

// CRIAR E USAR
try{
    new Parafuso() // CRIANDO ABSTRATA NÃO PODE SER INSTANCIADA
}
catch(erro) {
    console.log(erro.message)
}

let fenda = new Fenda()
let phillips = new Phillips()
let allen = new Allen()
console.log(fenda.tipo, phillips.tipo)

try{
    console.log(allen.tipo) // MÉTODO "GET TIPO()" PRECISA SER IMPLEMENTADO
}
catch(erro) {
    console.log(erro.message)
}


