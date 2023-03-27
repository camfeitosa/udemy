// Função que retorna objeto = factory
function criaPessoa (nome, sobrenome, idade){ //parâmetro
    return { nome, sobrenome, idade
        /*nome: nome,
        sobrenome: sobrenome,
        idade: idade*/
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25) //argumento = valor passado para o parâmetro
const pessoa2 = criaPessoa('Monica', 'Gueller', 25) //argumento = valor passado para o parâmetro
const pessoa3 = criaPessoa('Rachel', 'Green', 25) //argumento = valor passado para o parâmetro
const pessoa4 = criaPessoa('Clarisse', 'Logan', 25) //argumento = valor passado para o parâmetro
console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade, pessoa4)