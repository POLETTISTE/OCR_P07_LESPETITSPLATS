function formatText(string){
  return string
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g,"")
  .toLowerCase();
}

function searchInputDatas(data) {
  let resultIng = (item) => formatText(item.ingredient).includes(formatText(actualValueInput));

  result = data.filter(element => {
    return formatText(element.name).includes(formatText(actualValueInput)) || 
           formatText(element.description).includes(formatText(actualValueInput)) ||
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
      searchInputDatas(recipes);
      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filtrer
    }else {
      searchInputDatas(filteredRecipes);

    }
    displayCards(result);
  }
}

function searchInput234(list) {
  
  // filtrer dataIngredientsFiltered suivant input
}