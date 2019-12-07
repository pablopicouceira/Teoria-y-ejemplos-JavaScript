"use strict";
/*
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling"); // este "calling" es lo primero que se muestra
  var result = await resolveAfter2Seconds();
  console.log(result); // result es la promesa de arriba resuelta, es decir, lo que está dentro del resolve
  // expected output: 'resolved'
}

asyncCall();
*/
// -----------------------------------------------------------------------------------------------

let resolveAfter2Seconds = function() {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function() {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

let sequentialStart = async function() {
  console.log("==SEQUENTIAL START==");

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 5 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 15 seconds after 1.
};

// sequentialStart();

// -------------------------------------------------------------------------------------------------------------------------

let concurrentStart = async function() {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter1Second(); // starts timer immediately
  const fast = resolveAfter2Seconds(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
};

// concurrentStart();

// ------------------------------------------------------------------------------------------------------------------

var concurrentPromise = function() {
  console.log("==CONCURRENT START with Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    messages => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    }
  );
};

// concurrentPromise();

var parallel = async function() {
  console.log("==PARALLEL with await Promise.all==");

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))()
  ]);
};

// This function does not handle errors. See warning below!
var parallelPromise = function() {
  console.log("==PARALLEL with Promise.then==");
  resolveAfter2Seconds().then(message => console.log(message));
  resolveAfter1Second().then(message => console.log(message));
};

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

// wait again
setTimeout(parallelPromise, 13000); // same as parallel
