async function displayCards(recipes) {
    
  recipes.forEach((recipe) => {
    const recipeModel = Recipe(recipe);
    const recipeCardDOM = recipeModel.getRecipeCard();
    recipesSection.appendChild(recipeCardDOM);
  });
}

// async function displayIngredients(recipes) {
    
//   recipes.forEach((ingredient) => {
//     const ingredientModel = Recipe(ingredient);
//     const ingredientCardDOM = ingredientModel.getIngredients();
//     ingredientUl.appendChild(ingredientCardDOM);
//   });
// }

async function displayAppareils(recipes) {
    
  recipes.forEach((appareil) => {
    const appareilModel = Recipe(appareil);
    const appareilCardDOM = appareilModel.getAppareils();
    appareilUl.appendChild(appareilCardDOM);
  });
}

async function displayUstensiles() {

  console.log(dataUstensilsFiltrered);

  dataUstensilsFiltrered.forEach((element) => {
    console.log(element);

    let item = document.createElement('li');
    item.classList.add('ustensileLi');
    item.textContent = element;
    ustensileUl.appendChild(item);
  })
}
