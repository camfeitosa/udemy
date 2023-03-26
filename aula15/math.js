//OBJETO MATH

let num1 = 9.5793849
let num2 = Math.floor(num1) //arredondar p baixo
let num3 = Math.ceil(num1) //arredondar p cima
let num4 = Math.round(num1) //arredondar automaticamente
console.log(num2) 
console.log(num3) 
console.log(num4) 
console.log(Math.max(12,343,-34,24,22,12,223,3)) //maior número da sequência
console.log(Math.min(12,343,-34,24,22,12,223,3)) //menor número da sequência

const aleatório = Math.round(Math.random() * (10 - 5) + 5)
console.log(aleatório) //número aleatório

console.log(Math.PI) // valor de PI
console.log(Math.pow(2, 10)) // número elevado - objeto
console.log(2 ** 10) // número elevado

let num5 = 9
console.log(num5 ** (1/2)) // raiz
console.log(num5 ** 0.5) // raiz

console.log(100 / 0) // infinity - sem erro 