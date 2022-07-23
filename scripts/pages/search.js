 function searchInputBar() {
    let result = [];
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
    // recipes.forEach((element) => {
    //   console.log(element.name)
    // })
    
    if (filteredRecipes.length === 0) {
        
        // si on a aucune donnee filtree, on prend recipes
        result = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()) || 
        recipe.description.toLowerCase().includes(actualValueInput.toLowerCase()) ||


        //code filter ingredient marche pas...
        recipe.ingredients.filter(element => {
            return element.ingredient}).includes(actualValueInput.toLowerCase())
        })
      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filter
    } else {
      result = filteredRecipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()) || 
        recipe.description.toLowerCase().includes(actualValueInput.toLowerCase())
      })    
    }
    displayCards(result);
  }
}