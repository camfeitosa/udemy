// função executa uma ação

function saudacao(nome){ // nome do parâmetro - nome da var
   // console.log(`Bom dia ${nome}`)
    return `Bom dia ${nome}` // retorna
}

saudacao('Camila') //executar funcao - valor do parâmetro
saudacao('Lucia') //executar funcao - valor do parâmetro

const variavel = saudacao('Camila')
console.log(variavel) // retorna o return

