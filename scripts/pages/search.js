

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

function filteringListWithTagsIngredients(filteredRecipes){

  console.log(filteredListIngredients);
  filteredListIngredients=[];

    tagsIngredients.forEach(tag => {
      result = filteredRecipes.filter(element => {

        let resultIng = (item) => formatText(item.ingredient).includes(formatText(tag));
        element.ingredients.some(resultIng);   
             
        element.ingredients.forEach(element => {

          //IF ELEMENT EST DANS TAGINGREDIENT ALORS ON ENLEVE
          console.log(tagsIngredients);
          
          if (tagsIngredients.includes(element.ingredient)){
            
              console.log(`${element.ingredient} déja dans la liste`);
              
                // const index = filteredListIngredients.indexOf(formatText(tag));
                // if (index > -1) { // only splice array when item is found
                  // filteredListIngredients.splice(index, 1); // 2nd parameter means remove one item only
                // }
          }
          else {
            console.log(`on rajoute ${element.ingredient} dans la liste`);
            filteredListIngredients.push(element.ingredient);
            console.log(filteredListIngredients)
          } 
        })
      })
      dataIngredientsFiltered = [...new Set(filteredListIngredients)];
      console.log(dataIngredientsFiltered);

    })
  return dataIngredientsFiltered
}

function filteringListWithTagsAppliances(filteredRecipes){

  console.log(filteredListAppliances);
  filteredListAppliances=[];

    tagsAppliances.forEach(tag => {
      result = filteredRecipes.filter(element => {
        element.appliance.includes(formatText(tag))
        //IF ELEMENT EST DANS TAGAPPLIANCE ALORS ON ENLEVE

        if (tagsAppliances.includes((element.appliance))){
          console.log('deja dans la liste');
          
            // const index = filteredListAppliances.indexOf(formatText(tag));
            // if (index > -1) { // only splice array when item is found
            // filteredListAppliances.splice(index, 1); // 2nd parameter means remove one item only
            // }
          } else {
          console.log(`on rajoute ${element.appliance} dans la liste`);
          filteredListAppliances.push(element.appliance);
        } 
      })
      dataAppliancesFiltered = [...new Set(filteredListAppliances)];
      console.log(dataAppliancesFiltered);
      console.log(tagsAppliances);
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
          console.log(el)
          console.log(tag)
          // console.log(formatText(el));
          // console.log(formatText(tag))
          //IF ELEMENT EST DANS TAGINGREDIENT ALORS ON ENLEVE
          console.log(tagsUstensils);

          // if (tagsAppliances.includes((element.appliance))){

          //   if (tagsIngredients.includes(element.ingredient)){
            
          //     console.log('deja dans la liste');
              
          //       const index = filteredListIngredients.indexOf(formatText(tag));
          //       // if (index > -1) { // only splice array when item is found
          //         filteredListIngredients.splice(index, 1); // 2nd parameter means remove one item only
          //       // }
          // }

          if (tagsUstensils.includes(CapitalizeFirstLetterText(el))){
            
            console.log(tagsUstensils);
              console.log(`${el} deja dans la liste`);
                // const index = filteredListUstensils.indexOf(formatText(tag));
                // if (index > -1) { // only splice array when item is found
                // filteredListUstensils.splice(index, 1); // 2nd parameter means remove one item only
                // }
          }








          else {
            console.log(`on rajoute ${el} dans la liste`);
            filteredListUstensils.push(el);
          }
        })
      })
      dataUstensilsFiltered = [...new Set(filteredListUstensils)];
      console.log(dataUstensilsFiltered);

    })
    return dataUstensilsFiltered

}

function filteringAllListsWhenClickOnATag(filteredRecipes, ListItems) {
  console.log(filteredListIngredients);
  // filteredListIngredients=[];

  ListItems.forEach(listItem => {
    console.log(listItem)
  })


}
