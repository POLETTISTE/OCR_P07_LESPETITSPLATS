// ---------------------------DISPLAY.JS------------------------

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES RECETTES
async function displayCards(filteredData) {
  const recipesSection = document.getElementById('recipes');
  recipesSection.textContent="";
  
  filteredData.forEach((element) => {
    const recipeModel = Recipe(element);
    const recipeCardDOM = recipeModel.getRecipeCard();
    recipesSection.appendChild(recipeCardDOM);
  });
}



//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS + ATTRIBUTION ADDEVENTLISTENER + creation tag
//INGREDIENTS

function eventClickBtnPrimary(e) {
  let clickedIngredient = e.target.textContent;
  tagsIngredients.push(clickedIngredient);


  let item = document.createElement('card');
  item.classList.add('tag-ingredient', 'tag', 'rounded');
  item.textContent = e.target.textContent;
  
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

  
  closeTag.addEventListener('click', () => {
    
    const index = tagsIngredients.indexOf(item.textContent);
    if (index > -1) { // uniquement si l'élément du tableau est trouvé
      tagsIngredients.splice(index, 1); // le 2ème paramètre signifie supprime un seul élément
    }
    


    //remove physically tag button
    item.textContent='';
    item.remove();
  });

  tagsDiv.appendChild(item);
  item.appendChild(closeTag);
  dropdownPrimary.click();
}

function displayIngredients() {
  dataIngredientsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ingredientLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnPrimary);
    ingredientUl.appendChild(item);
  })
}

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS + ATTRIBUTION ADDEVENTLISTENER
//APPAREIL

function eventClickBtnSuccess(e) {
  let clickedAppliance = e.target.textContent;
  tagsAppliances.push(clickedAppliance);

  let item = document.createElement('card');
  item.classList.add('tag-appliance', 'tag', 'rounded');
  item.textContent = e.target.textContent;
  
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  closeTag.addEventListener('click', () => {
    

    const index = tagsAppliances.indexOf(item.textContent);
    if (index > -1) { // uniquement si l'élément du tableau est trouvé
      tagsAppliances.splice(index, 1); // le 2ème paramètre signifie supprime un seul élément
    }

    
    //remove physically tag button
    item.textContent='';
    item.remove();
  });


  tagsDiv.appendChild(item);
  item.appendChild(closeTag);
  dropdownSuccess.click();
}

function displayAppliances() {

  dataAppliancesFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('applianceLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnSuccess);
    applianceUl.appendChild(item);
  })
}

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS + ATTRIBUTION ADDEVENTLISTENER
//USTENSIL

function eventClickBtnDanger(e) {
  let clickedUstensil = e.target.textContent;
  tagsUstensils.push(clickedUstensil);
  
  let item = document.createElement('card');
  item.classList.add('tag-ustensil', 'tag', 'rounded');
  item.textContent = e.target.textContent;
  
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  closeTag.addEventListener('click', () => {
    

    const index = tagsUstensils.indexOf(item.textContent);
    if (index > -1) { // uniquement si l'élément du tableau est trouvé
      tagsUstensils.splice(index, 1); // le 2ème paramètre signifie supprime un seul élément
    }

    
    //remove physically tag button
    item.textContent='';
    item.remove();
  });

  tagsDiv.appendChild(item);
  item.appendChild(closeTag);
  dropdownDanger.click();
}

function displayUstensils() {

  dataUstensilsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ustensilLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnDanger);
    ustensilUl.appendChild(item);
  })
}



//INITIALISATION LANCEMENT DES 3 FONCTIONS 

async function displayIngredientsAppliancesUstensils() {
  displayIngredients();
  displayAppliances();
  displayUstensils();
}

