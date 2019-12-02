const suma = (a, b) => {
  return a + b;
};

// console.log(suma(22, 12));

const sumaDiferida = (a, b) => {
  let resultado;

  setTimeout(() => {
    resultado = a + b;
  }, 1);

  return resultado;
};

// console.log(sumaDiferida(10, 22));

const sumaDiferidaPromise = function(a, b) {
  return new Promise((resolve, reject) => {
    if (a > 100) {
      reject(new Error('no se sumar numeros mayores a 100'));
    }

    if (isNaN(a) || isNaN(b)) {
      reject(new Error('Sólo puedo sumar números'));
    }

    setTimeout(function() {
      resolve(a + b);
    }, 1);
  });
};

const doublePromise = n => {
  return new Promise((resolve, reject) => {
    if (n > 100)
      reject(new Error('sólo se sumar números menores o iguales 100'));
    setTimeout(() => {
      resolve(n * 2);
    }, 1000);
  });
};

const procesaResultado = resultado =>
  console.log(`El resultado es ${resultado}`);

sumaDiferidaPromise(10, 7)
  .then(doublePromise)
  .then(procesaResultado)
  .catch(error => console.error(error.message))
  .finally(() => console.log('sea como sea ya acabé'));

const valores = [[1, 4], [3, 110], [2, 5], [22, 12]];

const sumas = valores.map(valor => sumaDiferidaPromise(valor[0], valor[1]));

Promise.all(sumas)
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error.message));
