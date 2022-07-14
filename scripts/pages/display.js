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

function eventClickBtnPrimary() {
  let clickedIngredient = this.textContent;
  tagsIngredients.push(clickedIngredient);

  let item = document.createElement('span');
  item.classList.add('spantag');
  item.textContent = this.textContent;
  TagsDiv.appendChild(item);


  console.log(tagsIngredients);
  dropdownPrimary.click();
}

async function displayIngredients() {
  console.log(dataIngredientsFiltered);
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

function eventClickBtnSuccess() {
  console.log(this.textContent);
  dropdownSuccess.click();
}

async function displayAppliances() {
  dataAppliancesFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('applianceLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnSuccess);
    applianceUl.appendChild(item);
  })
}

//AU CHARGEMENT DE LA PAGE ON RECUPERE TOUTES LES MOTS CLEFS + ATTRIBUTION ADDEVENTLISTENER
//APPAREIL

function eventClickBtnDanger() {
  console.log(this.textContent);
  dropdownDanger.click();
}

async function displayUstensils() {
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

