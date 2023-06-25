const form = document.querySelector('#form')

form.addEventListener('submit', function(e){ //e = event
    e.preventDefault();
    console.log('Evento previnido')
});

function setResultado(msg){
    const Resultado = document
}