/*
false
FALSY - valores avaliados em falso 
0
" "
null / undefined
NaN


|| -> false || true 


*/

console.log('Luiz' && null && 'Maria')

//Condição para executar ou não
function falaOi(){
    return 'Oi'
}

let vaiExecutar = 'joana'

console.log(vaiExecutar && falaOi())


console.log(0|| false || null|| 'Luiz'|| true) //retorna o primeiro valor verdadeiro

//Usar cor que usuario selecionou, caso contrario usar cor padrao
const corUser = null
const corPadrao = corUser || 'preto' //primeiro valor true encontrado

console.log(corPadrao)

//a ultima falsa é retornada caso todas sejam falsas

