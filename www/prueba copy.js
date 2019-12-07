"use strict";

let p = new Promise((resolve, reject) => {
  reject("Fallo");
  //resolve("Hola");
});

p.then(resultado => {
  console.log(resultado);
}).catch(e => {
  console.log("REsultado fallido: " + e);
});

let dv = (D, d) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (D, d) => {
        if (d != 0) {
          resolve(D / d);
        } else {
          reject("Division por 0");
        }
      },
      3000,
      D,
      d
    );
  });
};

dv(10, 5)
  .then(r => {
    console.log("Cociente: " + r);
  })
  .catch(r => {
    console.log("La division no se pudo realizar por: " + r);
  });

for (let i = 0; i < 1000; i++) {
  console.log(i);
}
