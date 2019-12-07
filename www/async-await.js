"use strict";

const sumaDiferidaPromise = function(a, b) {
  return new Promise((resolve, reject) => {
    if (a > 100) {
      setTimeout(function() {
        reject(new Error("no se sumar numeros mayores a 100"));
      }, 4000);
    }

    if (isNaN(a) || isNaN(b)) {
      reject(new Error("Sólo puedo sumar números"));
    }

    setTimeout(function() {
      resolve(a + b);
    }, 5000);
  });
};

async function process() {
  try {
    const resultado = await sumaDiferidaPromise(150, 20);
    console.log(resultado);
  } catch (error) {
    console.warn(error.message);
  } finally {
    console.log("acabé");
  }
}

process();

// const processAll = async valores => {
//   try {
//     const resultado = valores.map(valor =>
//       sumaDiferidaPromise(valor[0], valor[1])
//     );

//     console.log(resultado);
//     console.log(await Promise.all(resultado));
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// const valores = [
//   [1, 4],
//   [3, 110],
//   [2, 5],
//   [22, 12]
// ];

// processAll(valores);
