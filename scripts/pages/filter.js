

// INPUTS

// SEARCH IN MAIN INPUT
function searchInput1Datas(data){
  let resultIng = (item) => formatText(item.ingredient).includes(formatText(actualValueInput1));

  result = data.filter(element => {
    return formatText(element.name).includes(formatText(actualValueInput1)) || 
           formatText(element.description).includes(formatText(actualValueInput1)) ||
           element.ingredients.some(resultIng);
  })
  filteredRecipes=result;

  return filteredRecipes;
}

function searchInputBar(){


  //LORSQU'IL Y A MOINS DE 3 CARACTERES
  if (inputForm1.value.length <= 2 && tags.length===0){
    filteredRecipes = recipes.filter(recipe => recipe);
  }
  else if (inputForm1.value.length <= 2 && tags.length!==0){
    filteredRecipes = filteredRecipes.filter(recipe => recipe);
  }

  // LORSQU'IL Y A PLUS DE 2 CARACTERES
  else if (inputForm1.value.length > 2 && tags.length===0){
    
    searchInput1Datas(recipes);
    if (filteredRecipes.length === 0){
      errorMessage.style.display = "flex";
      recipesSection.style.display = "none";
      // inputForm1.value="";
      // inputForm1.select();
      init();
    }
  } else if (inputForm1.value.length > 2 && tags.length!==0){

    searchInput1Datas(filteredRecipes);
    // filteringRecipeswithTags(filteredRecipes)
  }

  displayCards(filteredRecipes);
}


// RECHERCHE PAR INPUT SECONDAIRE
// MET LA LISTE A JOUR DES ELEMENTS QUI CORRESPONDENT A LA SAISIE DANS L'INPUT
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

  if(tags.length ===0 && inputForm1.value===""){
    filteredRecipes = recipes.filter(recipe => recipe);

  }
  else if(tags.length ===0 && inputForm1.value!=="") {
    filteredRecipes = filteredRecipes.filter(recipe => recipe);

  }
  else if (tags.length ===1 && inputForm1.value===""){
    filteredRecipes = recipes.filter(element => {
      return element.ingredients.some(resultIng)
    })
  }
  else if(tags.length ===1 && inputForm1.value!=="") {
    filteredRecipes = filteredRecipes.filter(element => {
      return element.ingredients.some(resultIng)
    })
  }
  else if (tags.length >1) {
    filteredRecipes = filteredRecipes.filter(element => {
      return element.ingredients.some(resultIng)
    })
  }
  return filteredRecipes
}

function searchWithTagAppliance(clickedAppliance){

  if(tags.length ===0 && inputForm1.value===""){
    filteredRecipes = recipes.filter(recipe => recipe);
  }

  else if (tags.length ===0 && inputForm1.value!=="") {
    filteredRecipes = filteredRecipes.filter(recipe => recipe);
  }
  else if (tags.length ===1 && inputForm1.value===""){
    filteredRecipes = recipes.filter(element => {
      return formatText(element.appliance).includes(formatText(clickedAppliance))
    })
  }
  else if(tags.length ===1 && inputForm1.value!=="") {
    filteredRecipes = filteredRecipes.filter(element => {
      return formatText(element.appliance).includes(formatText(clickedAppliance))
    })
  }

  else if (tags.length >1 ) {
    filteredRecipes = filteredRecipes.filter(element => {
      return formatText(element.appliance).includes(formatText(clickedAppliance))
    })
  }
}

function searchWithTagUstensils(clickedUstensil){
  let resultUst = (item) => formatText(item).includes(formatText(clickedUstensil));

  if(tags.length ===0 && inputForm1.value===""){
    filteredRecipes = recipes.filter(recipe => recipe);
  }
  else if (tags.length ===0 && inputForm1.value!=="") {
    filteredRecipes = filteredRecipes.filter(recipe => recipe);

    }
  else if (tags.length ===1 && inputForm1.value===""){
    filteredRecipes = recipes.filter(element => {
      return element.ustensils.some(resultUst);
    })
  
  }
  else if(tags.length ===1 && inputForm1.value!=="") {
    filteredRecipes = filteredRecipes.filter(element => {
      return element.ustensils.some(resultUst);
    })
  }
  else if (tags.length >1) {
    filteredRecipes = filteredRecipes.filter(element => {
      return element.ustensils.some(resultUst);
    })
  }
}

// FILTRE LES LISTES DES INPUTS SECONDAIRES GRACE A LA SAISIE DANS L'INPUT PRINCIPAL
function filteringListIngredientsWithInputPrincipal(filteredRecipes) {

  filteredListIngredients=[];

  result = filteredRecipes.filter(element => {

    let resultIng = (item) => formatText(item.ingredient).includes(formatText(actualValueInput1));
    element.ingredients.some(resultIng);   
            
    element.ingredients.forEach(element => {

      if (!tagsIngredients.includes(element.ingredient)){
        filteredListIngredients.push(element.ingredient);
      } 
    })
  })
  dataIngredientsFiltered = [...new Set(filteredListIngredients)];
  
  return dataIngredientsFiltered
}

function filteringListAppliancesWithInputPrincipal(filteredRecipes) {
  filteredListAppliances=[];

  result = filteredRecipes.filter(element => {
    element.appliance.includes(actualValueInput1)

    if (!tagsAppliances.includes((element.appliance))){

      filteredListAppliances.push(element.appliance);
    } 

  })
  dataAppliancesFiltered = [...new Set(filteredListAppliances)];

  return dataAppliancesFiltered
}

function filteringListUstensilsWithInputPrincipal(filteredRecipes) {

  filteredListUstensils=[];
    
  result = filteredRecipes.filter(element => {
    let resultUst = (item) => formatText(item).includes(formatText(actualValueInput1));
    element.ustensils.some(resultUst);   

    element.ustensils.forEach(el => {
      if (!tagsUstensils.includes(CapitalizeFirstLetterText(formatText(el)))) {
        filteredListUstensils.push(el);
      }
    })
  })
  dataUstensilsFiltered = [...new Set(filteredListUstensils)];

  return dataUstensilsFiltered

}

// FILTRE LES LISTES DES RECHERCHES SECONDAIRES GRACE A LA SAISIE DANS L'INPUT SECONDAIRE
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
        if (!tagsUstensils.includes(CapitalizeFirstLetterText(formatText(el)))) {
          filteredListUstensils.push((CapitalizeFirstLetterText(formatText(el))));
        }
      })
    })
    dataUstensilsFiltered = [...new Set(filteredListUstensils)];
  })
  return dataUstensilsFiltered

}

// FILTRE LES LISTES DES RECHERCHES SECONDAIRES AVEC LES TAGS DEJA SELECTIONNES
function filteringListIngredientsWhenClickOnAnotherTag(filteredListIngredients) {
  filteredListIngredients=[];
  result = filteredRecipes.filter(element => {

    let resultIng = (item) => formatText(item.ingredient).includes(element);
    element.ingredients.some(resultIng);   
          
    element.ingredients.forEach(el => {

      if (!tagsIngredients.includes(el.ingredient)){
        filteredListIngredients.push(el.ingredient)
      }
    })
  })
  dataIngredientsFiltered = [...new Set(filteredListIngredients)];

  return dataIngredientsFiltered
}

function filteringListAppliancesWhenClickOnAnotherTag(filteredListAppliances) {
  filteredListAppliances=[];

  result = filteredRecipes.filter(element => {
      
    if (!tagsAppliances.includes(element)){
      filteredListAppliances.push(element.appliance);

    }
  })
  dataAppliancesFiltered = [...new Set(filteredListAppliances)];

  return dataAppliancesFiltered

}

function filteringListUstensilsWhenClickOnAnotherTag(filteredListUstensils){

  filteredListUstensils=[];

  result = filteredRecipes.filter(element => {
    let resultUst = (item) => formatText(item).includes(element);
    element.ustensils.some(resultUst);   

    element.ustensils.forEach(el => {

      if (!tagsUstensils.includes(CapitalizeFirstLetterText(el))){
        filteredListUstensils.push(CapitalizeFirstLetterText(el))
      }
    })
  })

  dataUstensilsFiltered = [...new Set(filteredListUstensils)];
  return dataUstensilsFiltered
  
}


// MISE A JOUR DES RECETTES FILTREES A LA DESTRUCTION D'UN TAG

function filteringRecipeswithTags(recipes) {
  let filteredRecipes=[];
  let ingredients=[];
  let appliances=[];
  let ustensils=[];

  if(tagsIngredients.length>0) {
    recipes.filter(element => {
      element.ingredients.forEach(el => {
        tagsIngredients.forEach(tag => {
          if (formatText(el.ingredient).includes(formatText(tag)) ) {
            // ingredients.push(element);
            filteredRecipes=element;
            return filteredRecipes
          }
        })
      })
    })
    // filteredRecipes = ingredients;
  }else{
    filteredRecipes = recipes
  }

  
  if(tagsAppliances.length>0) {
    filteredRecipes.filter(element => {
      tagsAppliances.forEach(tag => {
        if (formatText(element.appliance).includes(formatText(tag))){
          // appliances.push(element);
          filteredRecipes=element;
          return filteredRecipes
        }
      })
    })
    // filteredRecipes = appliances
  }

  if(tagsUstensils.length>0){
    filteredRecipes.filter(element => {
      element.ustensils.forEach(el => {
        tagsUstensils.forEach(tag => {
          if (formatText(el).includes(formatText(tag))){
            // ustensils.push(element)
            filteredRecipes=element;
            return filteredRecipes
          }
        })
      })
    })
    // filteredRecipes = ustensils

  }

  return filteredRecipes;
}
