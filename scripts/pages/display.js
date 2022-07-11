async function displayCards(recipes) {
    
  recipes.forEach((recipe) => {
    const recipeModel = Recipe(recipe);
    const recipeCardDOM = recipeModel.getRecipeCard();
    recipesSection.appendChild(recipeCardDOM);
  });
}
async function displayIngredients(dataIngredientsFiltered) {

  dataIngredientsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ingredientLi', 'ingredienTag');
    item.textContent = element;
    ingredientUl.appendChild(item);
  })
}

async function displayAppliances(dataAppliancesFiltered) {

  dataAppliancesFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('applianceLi', 'applianceTag');
    item.textContent = element;
    applianceUl.appendChild(item);
  })
}

async function displayUstensiles(dataUstensilsFiltered) {

  dataUstensilsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ustensilLi', 'ustensilTag');
    item.textContent = element;
    ustensilUl.appendChild(item);
  })
}
