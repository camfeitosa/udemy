//variavel protegida no escopo da função e não no global
// executar meuEscopo()
// IIFE

function meuEscopo (){
    const form = document.querySelector('.form'); // selecionar pela tag, class, id
    const resultado = document.querySelector('.resultado')

    const pessoas = []


function recebeEventoForm(evento){
    evento.preventDefault() // previne oq era para acontecer por padrão = não envia o form
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    //console.log(nome.value)
    //console.log(pessoas)
    //p de resultado

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    });

    console.log(pessoas)

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` +
    ` ${peso.value} ${altura.value}</p>`
}
    form.addEventListener('submit', recebeEventoForm) 
}
meuEscopo()