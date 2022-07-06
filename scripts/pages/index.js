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

async function displayCards(recipes) {
  const RecipesSection = document.querySelector('.recipes');

  recipes.forEach((recipe) => {
    const recipeModel = new Recipe(recipe);
    const recipeCardDOM = recipeModel.getRecipeCard();
    RecipesSection.appendChild(recipeCardDOM);
  });
}

async function init() {
  await getRecipes();
  displayCards(recipes);
}

init();
