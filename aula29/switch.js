function getDiaSemana (diaSemana){
    let texto;

    switch(diaSemana){
    case 0: 
        texto = 'Domingo';
          return texto; //return = acaba a função (break) 
    case 1: 
        texto = 'Segunda';
          return texto;
    case 2: 
        texto = 'Terça';
          return texto;
    case 3: 
        texto = 'Quarta';
          return texto;
    case 4: 
        texto = 'Quinta';
          return texto;
    case 5: 
        texto = 'Sexta';
          return texto;
    case 6: 
        texto = 'Sábado';
          return texto;
        default: //else
            texto = ''
    }
}


const data = new Date('2006-07-05 00:00:00')
const diaSemana = data.getDay()
const texto = getDiaSemana(diaSemana)

console.log(diaSemana, texto)


// if (texto === 0) {
//     texto = 'Domingo'
// } else if (texto === 1){
//     texto = 'Segunda'
// } else if (texto === 2){
//     texto = 'Terça'
// } else if (texto === 3){
//     texto = 'Quarta'
// } else if (texto === 4){
//     texto = 'Quinta'
// } else if (texto === 5){
//     texto = 'Sexta'
// }

