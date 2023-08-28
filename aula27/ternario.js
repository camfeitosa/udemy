// ? :

const pontuacaoUsuario = 20

const vip = pontuacaoUsuario >= 100 ? console.log("Vip") : console.log('Não é VIP')

const idade = 18

const festa = idade >= 18 ? 'Pode entrar na festa' : 'Não pode entrar'
console.log(festa)

const corUsuario = null //falsy
const corPadrao = corUsuario || 'Preto'
console.log(corPadrao)
