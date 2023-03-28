//variavel protegida no escopo da função e não no global
// executar meuEscopo()
// IIFE

function meuEscopo (){
    const form = document.querySelector('.form'); // selecionar pela tag, class, id
    const resultado = document.querySelector('.resultado')

//let contador = 1
function recebeEventoForm(evento){
    evento.preventDefault() // previne oq era para acontecer por padrão = não envia o form
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    console.log(nome.value)


    // evento.preventDefault() // previne oq era para acontecer por padrão = não envia o form
    // console.log(`Não enviado ${contador}`)
    // contador++
}
    form.addEventListener('submit', recebeEventoForm) 
}
meuEscopo()