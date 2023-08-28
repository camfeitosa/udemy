/*
entre 0 - 11 = Bom dia 
12 - 17 = boa tarde
18 - 23 = boa noite
*/

const hora = 100

if (hora >= 0 && hora <= 11){
    console.log('bom dia')
} else if (hora >= 12 && hora <= 17){
    console.log('boa tarde')
} else if(hora >= 18 && hora <= 23){
    console.log('boa noite')
} else {
    console.log('[ERRO]Hora não existe')
}

const tenhoDinheiro = false

if(tenhoDinheiro){
    console.log('Vou sair de casa')
}else{
    console.log('Não vou sair de casa')
}