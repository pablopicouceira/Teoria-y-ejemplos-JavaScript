"use strict";

function div(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n2 === 0) {
        // MAL!!!: return reject('Can not divide by zero');
        // Esto de a continuación, es bien :)
        return reject(new Error("Can not divide by zero")); // Jose los pone, pero los return no son necesarios
      }

      const resultDiv = n1 / n2;
      return resolve(resultDiv);
    }, 3000);
  });
}

// function mostrarResultado(result) {
//   console.log(`Resul div: ${result}`);
// }

// function mostrarError(err) {
//   console.error(`Hubo un error: ${err.message}`);
// }

// div(6, 2)
//   .then(mostrarResultado)
//   .catch(mostrarError);
// div(6, 0)
//   .then(mostrarResultado)
//   .catch(mostrarError);

async function mostrarResultado() {
  try {
    const resultado = await div(8, 4);
    console.log(resultado);
  } catch (e) {
    console.error(e);
  }
}

mostrarResultado();
