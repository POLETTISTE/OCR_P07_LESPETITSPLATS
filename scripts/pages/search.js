function formatText(string){
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,"")
    .toLowerCase();
}

// INPUTS

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



// MISE A JOUR DE LA LISTE DES RECETTES APRES AJOUT D'UN TAG
//ok------------------fonctionne bien
function searchWithTagIngredient(clickedIngredient){
  let resultIng = (item) => formatText(item.ingredient).includes(formatText(clickedIngredient));

  if(tags.length ===0){
    filteredRecipes = recipes.filter(recipe => recipe);
    console.log(filteredRecipes);
    console.log(dataIngredientsFiltered);
  }
  else if (tags.length ===1){
    
    filteredRecipes = recipes.filter(element => {
      return element.ingredients.some(resultIng)
    })
    console.log(filteredRecipes); // OK 
  }
  else if (tags.length >1){
    filteredRecipes = filteredRecipes.filter(element => {
      return element.ingredients.some(resultIng)
    })
    console.log(filteredRecipes); //ok

  }
}

function searchWithTagAppliance(clickedAppliance){

  if(tags.length ===0){
    filteredRecipes = recipes.filter(recipe => recipe);
  }
  else if (tags.length ===1){
    filteredRecipes = recipes.filter(element => {
      return formatText(element.appliance).includes(formatText(clickedAppliance))

    })
  }else if(tags.length >1) {
    filteredRecipes = filteredRecipes.filter(element => {
      return formatText(element.appliance).includes(formatText(clickedAppliance))
    })
  }
}

function searchWithTagUstensils(clickedUstensil){
  let resultUst = (item) => formatText(item).includes(formatText(clickedUstensil));

  if(tags.length ===0){
    filteredRecipes = recipes.filter(recipe => recipe);
  }
  else if (tags.length ===1){
    filteredRecipes = recipes.filter(element => {
      return element.ustensils.some(resultUst);

    })
  }else if(tags.length >1) {
    filteredRecipes = filteredRecipes.filter(element => {
      return element.ustensils.some(resultUst);
    })
  }
}


// a revoir tri en fonction du tag entré-------------------

function filteringListWithTagsIngredients(tagsIngredients){
  console.log(filteredListIngredients);
    tagsIngredients.forEach(tag => {

      
      result = filteredRecipes.filter(element => {
        let resultIng = (item) => formatText(item.ingredient).includes(formatText(tag));
        element.ingredients.forEach(element => {
          filteredListIngredients.push(element.ingredient);
        })
        
        
        element.ingredients.some(resultIng);        
      })
      dataIngredientsFiltered = [...new Set(filteredListIngredients)];
      console.log(dataIngredientsFiltered);
    })
    
  return dataIngredientsFiltered
  
}

