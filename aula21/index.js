/* 
Operadores de comparação

> maior que
>= maior que ou igual a 
< menor que
<= menor que ou igual a 
== igualdade (valor) ***
=== igualdade estrita (valor e tipo)
!= diferente (valor) ***
!== diferente estrito (valor e tipo)

*/
const exp = 10 > 5;
console.log(exp)
console.log(10>5) //boolean

const n1 = 10
const n2 = '10'
const comp = n1==n2
console.log(comp)

const n3 = 10
const n4 = '10'
const compa = n3===n4
console.log(compa)
