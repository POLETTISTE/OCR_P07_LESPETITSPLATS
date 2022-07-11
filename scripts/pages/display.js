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
    item.classList.add('ustensileLi', 'ustensileTag');
    item.textContent = element;
    ingredientUl.appendChild(item);
  })
}

async function displayAppliances(dataAppliancesFiltered) {

  dataAppliancesFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('appareilLi', 'applianceTag');
    item.textContent = element;
    appareilUl.appendChild(item);
  })
}

async function displayUstensiles(dataUstensilsFiltered) {

  dataUstensilsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ustensileLi', 'ustensileTag');
    item.textContent = element;
    ustensileUl.appendChild(item);
  })
}
