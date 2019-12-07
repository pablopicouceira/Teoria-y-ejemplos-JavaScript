"use strict";

function promiseGenerator() {
  const randomNumber = Math.random() * 10000;
  return new Promise(resolve => {
    console.log("Espero ->", randomNumber);
    setTimeout(() => {
      console.log("Resolviendo ->", randomNumber);
      resolve(randomNumber);
    }, randomNumber);
  });
}
/*
const allPromises = [];
allPromises.push(promiseGenerator());
allPromises.push(promiseGenerator());
allPromises.push(promiseGenerator());

console.log(allPromises);

Promise.all(allPromises).then(allData => {
  console.log(allData);
});

console.log(allPromises);
*/
//---------------------------------------------------------------------------------------

// async function oneFunction() {
//   let aValue1 = await promiseGenerator();
//   console.log("AWAIT1", aValue1);
//   const aValue2 = await promiseGenerator();
//   console.log("AWAIT2", aValue2);
//   const aValue3 = await promiseGenerator();
//   console.log("AWAIT3", aValue3);
// }

// oneFunction();

// El mismo código con then es bastante menos legible

function otherFunction() {
  promiseGenerator().then(aValue1 => {
    console.log("AWAIT1", aValue1);
    const aValue2 = promiseGenerator().then(aValue2 => {
      console.log("AWAIT2", aValue2);
      const aValue3 = promiseGenerator().then(aValue3 => {
        console.log("AWAIT3", aValue3);
      });
    });
  });
}

otherFunction();
