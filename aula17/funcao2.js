function soma(x = 1, y = 2){
    const resultado = y + x
    return resultado // nada mais será executado após return
}

console.log(soma(2, 2))
//console.log(resultado) não consegue alterar nada da função fora dela

const resultado = soma(2, 2)
console.log(resultado)

const resultado2 = soma() //VALOR QUE X E Y ASSUMIRAM
console.log(resultado2)



