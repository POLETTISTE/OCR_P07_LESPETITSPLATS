async function displayCards(recipes) {
    
  recipes.forEach((recipe) => {
    const recipeModel = Recipe(recipe);
    const recipeCardDOM = recipeModel.getRecipeCard();
    recipesSection.appendChild(recipeCardDOM);
  });
}

async function displayIngredients(recipes) {
    
  recipes.forEach((ingredient) => {
    const ingredientModel = Recipe(ingredient);
    const ingredientCardDOM = ingredientModel.getIngredients();
    ingredientUl.appendChild(ingredientCardDOM);
  });
}

