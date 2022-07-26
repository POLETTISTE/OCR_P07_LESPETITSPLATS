function formatText(string){
  return string
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g,"")
  .toLowerCase();
}

function searchInput1Datas(data) {
  let resultIng = (item) => formatText(item.ingredient).includes(formatText(actualValueInput1));

  result = data.filter(element => {
    return formatText(element.name).includes(formatText(actualValueInput1)) || 
           formatText(element.description).includes(formatText(actualValueInput1)) ||
           element.ingredients.some(resultIng)
  })
}


function searchInputBar() {

  //MOINS DE 3 CARACTERES
  if (inputForm1.value.length < 3) {
    
    // si on a aucune donnee filtree, on prend recipes
    if (tags.length === 0) {
      result = recipes.filter(recipe => recipe);

      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filtrer
    } else {
      result = filteredRecipes.filter(recipe => recipe);
    }
    displayCards(result);
  }

  // PLUS DE 2 CARACTERES
  if (inputForm1.value.length > 2) {
    
    // si on a aucune donnee filtree, on prend recipes
    if (filteredRecipes.length === 0) {
      searchInput1Datas(recipes);
      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filtrer
    }else {
      searchInput1Datas(filteredRecipes);

    }
    displayCards(result);
  }
}

function searchInputIngredient(dataIngredientsFiltered) {
  filteredListIngredients = dataIngredientsFiltered.filter(element => {
    return formatText(element).includes(formatText(actualValueInput2))
  });
}

function searchInputAppliance(dataAppliancesFiltered) {
  filteredListAppliances = dataAppliancesFiltered.filter(element => {
    return formatText(element).includes(formatText(actualValueInput3))
  });
}

function searchInputUstensil(dataUstensilsFiltered) {
  filteredListUstensils = dataUstensilsFiltered.filter(element => {
    return formatText(element).includes(formatText(actualValueInput4))
  });
}