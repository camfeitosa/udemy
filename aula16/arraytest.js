const nomes = ['Camila', 'Murilo', 'Aki']
console.log(nomes)

// adiciona no começo
nomes.unshift('Agatha') 
console.log(nomes)

// adiciona no final
nomes.push('Muriel') 
console.log(nomes)

//remove do final
const remover = nomes.pop()
console.log('O nome removido foi: ' + remover)
console.log(nomes)

//remove do começo
const remover1 = nomes.shift()
console.log('O nome removido foi: ' + remover1)
console.log(nomes)
