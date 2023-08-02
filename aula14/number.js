// IEEE 754-2008

let num1 = 0.7 //number
let num2 = 0.8 //number

console.log(num1.toString() + num2)
// num1 = num1.toString
console.log(num1.toString(2)) // binário
console.log(typeof num1) //tipo
console.log(num1.toFixed(2)) //adicionar a quantidade de casas decimais

console.log(Number.isInteger(num1)) //retorna se o número é inteiro ou não - true or false

let temp = num1 * 'Olá'
console.log(temp)
console.log(Number.isNaN(temp)) // esse número é NaN ou não

num1 = parseFloat(num1.toFixed(2)) //somar corretamente 
num1 = Number(num1.toFixed(2)) //somar


