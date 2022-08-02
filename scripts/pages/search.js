

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
function searchWithTagIngredient(clickedIngredient){
  let resultIng = (item) => formatText(item.ingredient).includes(formatText(clickedIngredient));

  if(tags.length ===0){
    filteredRecipes = recipes.filter(recipe => recipe);
  }
  else if (tags.length ===1){
    
    filteredRecipes = recipes.filter(element => {
      return element.ingredients.some(resultIng)
    })
  }
  else if (tags.length >1){
    filteredRecipes = filteredRecipes.filter(element => {
      return element.ingredients.some(resultIng)
    })

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

function filteringListWithTagsIngredients(filteredRecipes){

  filteredListIngredients=[];

  tagsIngredients.forEach(tag => {
    result = filteredRecipes.filter(element => {

      let resultIng = (item) => formatText(item.ingredient).includes(formatText(tag));
      element.ingredients.some(resultIng);   
            
      element.ingredients.forEach(element => {

        if (!tagsIngredients.includes(element.ingredient)){
          filteredListIngredients.push(element.ingredient);
        } 
      })
    })
    dataIngredientsFiltered = [...new Set(filteredListIngredients)];
  })
  return dataIngredientsFiltered
}

function filteringListWithTagsAppliances(filteredRecipes){

  filteredListAppliances=[];

  tagsAppliances.forEach(tag => {
    result = filteredRecipes.filter(element => {
      element.appliance.includes(formatText(tag))

      if (!tagsAppliances.includes((element.appliance))){

        filteredListAppliances.push(element.appliance);
      } 
    })
    dataAppliancesFiltered = [...new Set(filteredListAppliances)];
  })
  return dataAppliancesFiltered
}

function filteringListWithTagsUstensils(filteredRecipes){

  filteredListUstensils=[];

  tagsUstensils.forEach(tag => {
    
    result = filteredRecipes.filter(element => {
      let resultUst = (item) => formatText(item).includes(formatText(tag));
      element.ustensils.some(resultUst);   

      element.ustensils.forEach(el => {
        if (!tagsUstensils.includes(CapitalizeFirstLetterText(el))) {
          filteredListUstensils.push(el);
        }
      })
    })
    dataUstensilsFiltered = [...new Set(filteredListUstensils)];
  })
  return dataUstensilsFiltered

}

function filteringListIngredientsWhenClickOnAnotherTag(filteredListIngredients) {
  filteredListIngredients=[];
  result = filteredRecipes.filter(element => {

    let resultIng = (item) => formatText(item.ingredient).includes((element));
    element.ingredients.some(resultIng);   
          
    element.ingredients.forEach(el => {
      filteredListIngredients.push(el.ingredient)
    })
  })
  dataIngredientsFiltered = [...new Set(filteredListIngredients)];

  return dataIngredientsFiltered
}

function filteringListAppliancesWhenClickOnAnotherTag(filteredListAppliances) {
  filteredListAppliances=[];

    result = filteredRecipes.filter(element => {
        filteredListAppliances.push(element.appliance);
    })

  dataAppliancesFiltered = [...new Set(filteredListAppliances)];
  console.log(dataAppliancesFiltered);
  return dataAppliancesFiltered

}

function filteringListustensilssWhenClickOnAnotherTag(filteredListUstensils) {
  
}