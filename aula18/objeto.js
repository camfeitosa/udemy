/*const nome01 = "Luiz"
const sobrenome01 = "Miranda"
const idade01 = 2

const nome02 = "lala" ... */

//colchetes = array, chave = objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Madalena',
    idade: 80,

    //function 
    fala (){
        console.log(`${this.idade}: é a minha idade`)
    },

    incrementaIdade(){
        ++this.idade
    }
};

// this =  dentro do objeto

pessoa2.incrementaIdade()
pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()


console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

