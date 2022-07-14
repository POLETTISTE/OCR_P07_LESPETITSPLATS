function Recipe(data) {
  
  const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;
  
  const dataRecipes = data;
  const dataIngredients = ingredients;
  const dataAppliances = appliance;
  const dataUstensils = ustensils;
  
  //PUSH TOUTES LES RECETTES DANS ARRAY RecipesArray
  recipesArray.push(dataRecipes);

  //CREATION DE LA CARTE RECETTE
  function getRecipeCard() {
    const card = document.createElement('article');
    card.classList.add('col-3', 'p-0', 'recipe-card');
  
    //IMAGE DE LA RECETTE
    const pictureRecipe = document.createElement('div');
    pictureRecipe.classList.add('picture');
  
    //MILIEU DE CARTE NOM / TEMPS DE PREPARATION DE LA RECETTE
    const middleCardInfos = document.createElement('div');
    middleCardInfos.classList.add('middleCardInfos','d-flex', 'justify-content-around', 'p-3');
    
    //NOM DE LA RECETTE
    const nameRecipe = document.createElement('h2');
    nameRecipe.classList.add('col-8','pl-0');
    nameRecipe.textContent = name;
  
    //TEMPS PREPARATION DE LA RECETTE
    const timeRecipe = document.createElement('h2');
    timeRecipe.classList.add('time','col-4','pr-0','text-right')
    timeRecipe.innerHTML =`<i class="fa-regular fa-clock"></i> ${time} min`;
  
    //BAS DE CARTE INGREDIENTS / DESCRIPTION DE LA RECETTE
    const bottomCardInfos = document.createElement('div');
    bottomCardInfos.classList.add('bottomCardInfos','d-flex','justify-content-between','pl-3','pr-3','pb-3', 'pt-0');
    
    //LISTE DES INGREDIENTS DE LA RECETTE
    const ingredientsRecipe = document.createElement('div');
    ingredientsRecipe.classList.add('ingredients','col-6')
    ingredients.forEach(element => {
      let liste = document.createElement('p');
      if (element.quantity === undefined) {
        element.quantity="";
      }else{
        element.quantity= `: ${element.quantity}`
      }
      if (element.unit === undefined) {
        element.unit="";
      }
      liste.innerHTML = `${element.ingredient}<span>${element.quantity} ${element.unit}</span>`;
      ingredientsRecipe.appendChild(liste);
    });
  
    //DESCRIPTION DE LA RECETTE
    const descriptionRecipe = document.createElement('p');
    descriptionRecipe.classList.add('descriptionRecipe','col-6');
    descriptionRecipe.textContent = description;
  
    card.appendChild(pictureRecipe);
    card.appendChild(middleCardInfos);
    card.appendChild(bottomCardInfos);
  
    middleCardInfos.appendChild(nameRecipe);
    middleCardInfos.appendChild(timeRecipe);
  
    bottomCardInfos.appendChild(ingredientsRecipe);
    bottomCardInfos.appendChild(descriptionRecipe);
  
    return (card);
  }
    
  // INGREDIENTS EN MINUSCULE SANS ESPACE DANS ARRAY arrTriIngredients
  // //FILTRER LES DOUBLONS 
  dataIngredients.forEach((element) => {
    arrTriIngredients.push(element.ingredient.trim().toLowerCase());
  });
  dataIngredientsFiltered = arrTriIngredients.filter(function(ele , pos){
    return arrTriIngredients.indexOf(ele) === pos;
  });

  // APPLIANCE EN MINUSCULE SANS ESPACE DANS ARRAY arrTriAppliances
  //FILTRER LES DOUBLONS:
  arrTriAppliances.push(dataAppliances.trim().toLowerCase());
  dataAppliancesFiltered = arrTriAppliances.filter(function(ele , pos){
    return arrTriAppliances.indexOf(ele) === pos;
  });

  // USTENSILS EN MINUSCULE SANS ESPACE DANS ARRAY arrTriUstensils
  //FILTRER LES DOUBLONS:
  dataUstensils.forEach((element) => {
    arrTriUstensils.push(element.trim().toLowerCase());
  });
  dataUstensilsFiltered = arrTriUstensils.filter(function(ele , pos){
    return arrTriUstensils.indexOf(ele) === pos;
  });



  return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipeCard }
}
