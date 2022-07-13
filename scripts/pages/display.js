// ---------------------------DISPLAY.JS------------------------

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES RECETTES
async function displayCards(filteredData) {
  const recipesSection = document.getElementById('recipes');
  recipesSection.textContent="";
  
  filteredData.forEach((element) => {
    const recipeModel = Recipe(element);
    const recipeCardDOM = recipeModel.getRecipeCard();
    recipesSection.appendChild(recipeCardDOM);
  });
}

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS
async function displayIngredientsAppliancesUstensils(filteredData, classlist, classtag, parent) {
  filteredData.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add(classlist, classtag);
    item.textContent = element;
    parent.appendChild(item);
  })
}



// displayCards avec objets filtres ?
// function displaycards(recipesArray)  ?