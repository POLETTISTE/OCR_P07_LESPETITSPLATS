// ***** JAVASCRIPT POUR LES ELEMENTS DE LA PAGE INDEX.HTML *****

// import recipe from './data.js';
// import { displayCards } from './display.js';
// import { filteringByNameByDescriptionByIngredients } from './filters.js';




//let dataFiltres = [];
//let tags = [];

// const input = document.getElementById('inputPrincipale');

// input.addEventListener('input', (e)=>{
// //si plus de 3 ...
// })

// displayCards(recipes);

async function getRecipes() {
  await fetch('data/recipes.json')
    .then((res) => res.json())
    .then((data) => {
      recipes = data.recipes;
    })
    .catch((err) => err);

  return { recipes };
}

async function init() {
  const { recipes } = await getRecipes();
  displayCards(recipes);
}

init();
