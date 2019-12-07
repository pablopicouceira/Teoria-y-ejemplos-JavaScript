"use strict";

// let p = new Promise((resolve, reject) => {
//   reject("Fallo");
//   //resolve("Hola");
// });

// p.then(resultado => {
//   console.log(resultado);
// }).catch(e => {
//   console.log("REsultado fallido: " + e);
// });

// let dv = (D, d) => {
//   return new Promise((resolve, reject) => {
//     if (d != 0) {
//       resolve(D / d);
//     } else {
//       reject("Division por 0");
//     }
//   });
// };

// dv(10, 0)
//   .then(r => {
//     console.log("Cociente: " + r);
//   })
//   .catch(r => {
//     console.log("La division no se pudo realizar por: " + r);
//   });

function dividirAsync(n1, n2) {
  if (n2 === 0) {
    throw new Error("no se puede dividir por 0");
  }
  return n1 / n2;
}

async function mostrarResultado() {
  try {
    const resultado = await dividirAsync(2, 1);
    console.log(resultado);
  } catch (e) {
    console.error(e);
  }
}

mostrarResultado();
console.log("Hola");
