//strings estão indexadas
            // 01234
let st = "Um \"texto\"" 
console.log(st[3])
console.log(st.charAt(6))

//concatenação
console.log(st.concat(' ', 'em', ' ', 'um'))
console.log(st + ' em um lindo dia.')
console.log(`${st} em um lindo dia.`)


console.log(st.indexOf('Um'))
console.log(st.lastIndexOf('m', 3))

let umaString = "O rato roeu a roupa do rei de roma"
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())


