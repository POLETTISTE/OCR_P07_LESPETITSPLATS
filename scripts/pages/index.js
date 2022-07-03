// ***** JAVASCRIPT POUR LES ELEMENTS DE LA PAGE INDEX.HTML *****
let recipes;

async function getRecipes() {
  await fetch('data/recipes.json')
    .then((res) => res.json())
    .then((data) => {
      recipes = data.recipes;
    })
    .catch((err) => err);

  return { recipes };
}

async function displayData(recipes) {
  const RecipesSection = document.querySelector(".recipes");

  recipes.forEach((recipe) => {
    const recipeModel = new Recipe(recipe);
    const recipeCardDOM = recipeModel.getRecipeCard();
    RecipesSection.appendChild(recipeCardDOM);
  });
}

async function init() {
  await getRecipes();
  await displayData(recipes);
}

init();
