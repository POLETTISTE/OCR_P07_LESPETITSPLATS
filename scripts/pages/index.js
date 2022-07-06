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
const RecipesSection = document.querySelector('.recipes');


async function init() {
  const { recipes, ingredients } = await getRecipes();
  displayCards(recipes);
}

init();
