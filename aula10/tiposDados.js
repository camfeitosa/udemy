const nome1 = 'Monica' //string
const nome2 = "Monica"//string
const nome3 = `Monica` //string
const numero = 10 //number
const numero2 = 1.90 //number

let aluno; // undefined -> não aponta para local nenhum na memória
const lastname = null; // Nulo -> não aponta pra local nenhum na memória

const aprovado = false; // Boolean = true, false (lógico) 

console.log(typeof nome1)
console.log(typeof numero)
console.log(typeof aluno)
console.log(typeof lastname)
console.log(typeof aprovado)

const a = [1, 2]
const b = a

console.log(a, b)

b.push(3)
console.log(a, b)

