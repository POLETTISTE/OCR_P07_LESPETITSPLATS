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

async function displayAppareils(recipes) {
    
  recipes.forEach((appareil) => {
    const appareilModel = Recipe(appareil);
    const appareilCardDOM = appareilModel.getAppareils();
    appareilUl.appendChild(appareilCardDOM);
  });
}

async function displayUstensiles(recipes) {
    
  recipes.forEach((ustensile) => {
    const ustensileModel = Recipe(ustensile);
    const ustensileCardDOM = ustensileModel.getUstensiles();
    ustensileUl.appendChild(ustensileCardDOM);
  });
}

