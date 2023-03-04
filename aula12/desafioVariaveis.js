let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const vart = varA
varA = varB
varB = varC
varC = vart

console.log(varA, varB, vart)

/*
[varA, varB, varC] =[varB, varC, varA]
console.log(varA, varB, varC)
*/

