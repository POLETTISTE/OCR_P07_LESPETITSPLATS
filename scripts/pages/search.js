 function searchInputBar() {

    //MOINS DE 3 CARACTERES
  if (inputForm1.value.length < 3) {
    
    // si on a aucune donnee filtree, on prend recipes
    if (tags.length === 0) {
      result = recipes.filter(recipe => recipe);
      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filter
    } else {
      result = filteredRecipes.filter(recipe => recipe);
    }
    displayCards(result);
  }

  // PLUS DE 2 CARACTERES
  if (inputForm1.value.length > 2) {
    
    if (filteredRecipes.length === 0) {

        // si on a aucune donnee filtree, on prend recipes
        
        resultIng = (item) => item.ingredient.toLowerCase().includes(actualValueInput.toLowerCase());
        
        result = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()) || 
               recipe.description.toLowerCase().includes(actualValueInput.toLowerCase()) ||
               recipe.ingredients.some(resultIng);

      })
      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filter
    }else {
      result = filteredRecipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()) || 
        recipe.description.toLowerCase().includes(actualValueInput.toLowerCase())
      })    
    }
    displayCards(result);
    console.log(result)
  }
}