"use strict";

// var lista = [7, 9, 14, 22, 4, 6];

// var resultado1 = lista.reduce(function(total, valor) {
//   return total + valor;
// });
// console.log(resultado1);

// var mayor = lista.reduce(function (resultado, valor) {
//   if (resultado < valor) { resultado = valor };

//   console.log(resultado);

//   return valor;
// }

// console.log(mayor)

const ages = [25, 6, 35, 4, 16];
// Dejamos los adultos
const adult = ages.filter(age => age >= 18);

console.log(adult);

// Contamos con reduce los que han quedado en el array filtrado
const totalAges = ages.reduce((accumulator, actualValue) => {
  return accumulator + actualValue;
});

console.log(totalAges);
