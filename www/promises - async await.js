/**
 * ###############################
 * #### S E T   T I M E O U T ####
 * ###############################
 */
/*
const first = () => {
  console.log("¡Hola, soy la primera función!");
  second();
  console.log("Se ha acabado.");
};

const second = () => {
  setTimeout(() => {
    console.log("¡Yo soy la segunda función!");
  }, 2000);
};

first();
*/
/**
 * ###################################
 * #### B A S E   D E   D A T O S ####
 * ####  (promises y async/await) ####
 * ###################################
 */

const recipesBD = [
  {
    publisher: "Pablo",
    recipes: [
      { title: "Pizza margarita" },
      { title: "Macarrones a la putanesca" }
    ]
  },
  {
    publisher: "Sara",
    recipes: [{ title: "Ensalada escalibada" }, { title: "Ensalada de pasta" }]
  },
  {
    publisher: "Lucía",
    recipes: [{ title: "Hamburguesa vegana" }, { title: "Dorada al horno" }]
  }
];

/**
 * ###########################
 * ####  P R O M I S E S  ####
 * ###########################
 */

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Leemos la base de datos de recetas.
    resolve(recipesBD);
    reject("Error");
  }, 1500);
});

const getRecipe = recipeID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      recipe => {
        resolve(`${recipe.publisher}: ${recipe.recipes[1].title}`);
        reject("Error");
      },
      1500,
      recipeID
    );
  });
};

// Con "then/catch"  manejamos los datos almacenados en
// la promesa creada anteriormente.
getIDs
  .then(recipesID => {
    console.log(recipesID);
    return getRecipe(recipesID[0]);
  })
  .then(recipe => {
    console.log(recipe);
  })
  .catch(error => {
    console.log(error);
  });

/**
 * #################################
 * ####  A S Y N C / A W A I T  ####
 * #################################
 */
/*
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Solicitamos acceso a la base de datos.
    resolve(recipesBD);
  }, 1500);
});

const getRecipe = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      publish => {
        resolve(publish.recipes[0]);
      },
      1500,
      publisher
    );
  });
};

// "await" solo puede ser usado en una función "async"
async function getRecipesAW() {
  const recipesIDs = await getIDs;
  console.log(recipesIDs);
  const recipe = await getRecipe(recipesIDs[0]);
  console.log(recipe);

  return "Devuélveme algo";
}

/**
 * Si tratamos de recuperar el `return` que nos devuelve la función asíncrona almacenando el valor de la función en una constante de la
 * forma habitual no funcionará. Recordad que la función asíncrona esperará a tener toda la información antes de devolver algo.
 *
 * El siguiente código es síncrono, por tanto se ejecutará antes de que a la función asíncrona le de tiempo a descargar toda la información.
 */

// const rec = getRecipesAW();
// console.log(rec);

/**
 * Podemos recuperar el `return` empleando el `.then` que hemos visto en el apartado de promesas. Esto es debido a que la función asíncrona
 * devuelve una nueva promesa.
 */

//getRecipesAW(); //.then(data => console.log(data));
