const data = new Date()
const diaSemana = data.getDay()
let texto;

if (diaSemana === 0) {
    texto = 'Domingo'
} else if (diaSemana === 1){
    texto = 'Segunda'
}

console.log(diaSemana)