alert('Mensagem')
window.alert('Minha primeira mensagem') //mensagem apenas
window.confirm('Deseja realmente apagar?') //janela com botão ok e cancelar
window.prompt('Qual é seu nome?') //perguntar nome e campo para responder

//dentro do objeto window
// sem o window

var n1 = Number(window.prompt('Digite um número: ')) //string
var n2 = Number(window.prompt('Digite outro número: ')) //string
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`) //concatenação

// const num1 = Number(prompt('Digite um número'))
// const num2 = prompt('Digite um número')

//const resultado = num1 + num 2
// o resultado foi