const numero  = Number(prompt('Digite um número: ') )
const titulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

titulo.innerHTML = numero //altera o numero do titulo do doc
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é interio: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arrendondando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`