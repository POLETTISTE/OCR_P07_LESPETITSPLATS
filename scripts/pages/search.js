

// INPUTS

function searchInput1Datas(data) {
  let resultIng = (item) => formatText(item.ingredient).includes(formatText(actualValueInput1));
// let newArray = [];

// for (let i = 0; i < data.length; i++) {
//   data[i]
//   if (formatText(data[i].name).includes(formatText(actualValueInput1)) || 
//   formatText(data[i].description).includes(formatText(actualValueInput1)) ||
//   data[i].ingredients.some(resultIng)) {
// newArray.push(data[i]);

//   }
// }
// console.log(newArray);

  result = data.filter(element => {
    return formatText(element.name).includes(formatText(actualValueInput1)) || 
           formatText(element.description).includes(formatText(actualValueInput1)) ||
           element.ingredients.some(resultIng)
  })
  return filteredRecipes=result
}

function searchInputBar() {


  //MOINS DE 3 CARACTERES
  if (inputForm1.value.length <= 2) {
    
    // si on a aucune donnee filtree, on prend recipes
    if (tags.length === 0) {
      filteredRecipes = recipes.filter(recipe => recipe);

      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filtrer
    } else {
      filteredRecipes = filteredRecipes.filter(recipe => recipe);
    }
    displayCards(filteredRecipes);
  }

  // PLUS DE 2 CARACTERES
  else if (inputForm1.value.length > 2) {
    
    searchInput1Datas(recipes);
    // si on a aucune donnee filtree, on prend recipes
    if (filteredRecipes.length === 0) {
      // inputForm1.value='Aucune recette ne correspond à votre critère...vous pouvez chercher "tarte aux pommes", "poisson", etc';
      // displayError();
      errorMessage.style.display = "flex";
      recipesSection.className = "";
      
      inputForm1.value="";
      inputForm1.select();

      let essai = document.querySelectorAll('.tag');
      for (const element of essai) {
        console.log(element);
        element.remove();
        tagsIngredients=[];
        tagsAppliances=[];
        tagsUstensils=[];

        
      }
      init();
      filteredRecipes = recipes;
      // displayCards(filteredRecipes);
      // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filtrer
    }else  {
      searchInput1Datas(filteredRecipes);

    }
  displayCards(filteredRecipes)
    


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

function filteringListIngredientsWithInputPrincipal(filteredRecipes) {

  filteredListIngredients=[];

    result = filteredRecipes.filter(element => {

      let resultIng = (item) => formatText(item.ingredient).includes(actualValueInput1);
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
      let resultUst = (item) => formatText(item).includes(actualValueInput1);
      element.ustensils.some(resultUst);   

      element.ustensils.forEach(el => {
        if (!tagsUstensils.includes(CapitalizeFirstLetterText(el))) {
          filteredListUstensils.push(el);
        }
      })
    })
    dataUstensilsFiltered = [...new Set(filteredListUstensils)];

  return dataUstensilsFiltered

}









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

      console.log(element);
      
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
          filteredListUstensils.push(el)
        }
      })
    })

  dataUstensilsFiltered = [...new Set(filteredListUstensils)];
  return dataUstensilsFiltered
  
}


// when remove a tag

function filteringRecipeswithTags(filteredRecipes) {

  let tempArray=[];


  result = filteredRecipes.filter(element => {

    element.ingredients.forEach(el => {
      tagsIngredients.forEach(tag => {
        if (el.ingredient.includes(tag) ) {
            tempArray.push(element);
        }
      })
    })
  })
  

  result = filteredRecipes.filter(element => {
    tagsAppliances.forEach(tag => {
      if (element.appliance.includes(tag)){
        console.log(element);

        tempArray.push(element)
      }
    })
  })

  result = filteredRecipes.filter(element => {
    element.ustensils.forEach(el => {
      tagsUstensils.forEach(tag => {
        if (el.includes(tag)){
          console.log(el);
          tempArray.push(el)
          // return (el)
        }
      })
    })
  })

  console.log(tempArray);

  
  filteredRecipes = [...new Set(tempArray)];

  return filteredRecipes

}
