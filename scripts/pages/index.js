// ---------------------------INDEX.JS------------------------
// debugger


let recipesArray = []; // contient toutes les recettes d'origine (50);

let arrTriIngredients = []; //contient toutes les noms des ingrédients avec doublons
let arrTriAppliances = [];// contient toutes les noms des appareils avec doublons
let arrTriUstensils = [];// contient toutes les noms des ustensiles sans doublons

let dataIngredientsFiltered = []; // contient toutes les noms des ingrédients sans doublons
let dataAppliancesFiltered = []; // contient toutes les noms des appareils sans doublons
let dataUstensilsFiltered = []; // contient toutes les noms des ustensiles sans doublons

let tagsIngredients = []; //ajoute / supprime tag + stocke element dans array
let tagsAppliances = []; //ajoute / supprime tag + stocke element dans array
let tagsUstensils = []; //ajoute / supprime tag + stocke element dans array
let tags = []; // contient tous les tags sélectionnés

let filteredRecipes = [];
// contient toutes les recettes filtrées par les tags (globale)


//DOM
//CARD RECETTE
const recipesSection = document.getElementById('recipes');
const tagsDiv = document.querySelector('.tags');

const btnIngredients = document.querySelector('.btn-primary');
const btnAppliances = document.querySelector('.btn-success');
const btnUstensils = document.querySelector('.btn-danger');

const dropdownPrimary = document.querySelector(".dropdown-primary");
const dropdownSuccess = document.querySelector(".dropdown-success");
const dropdownDanger = document.querySelector(".dropdown-danger");

const ingredientsDiv = document.querySelector(".ingredients-list");
const appliancesDiv = document.querySelector(".appliances-list");
const ustensilsDiv = document.querySelector(".ustensils-list");

const inputForm1 = document.querySelector("#SaisieRecherche1");
const inputForm2 = document.querySelector("#SaisieRecherche2");
const inputForm3 = document.querySelector("#SaisieRecherche3");
const inputForm4 = document.querySelector("#SaisieRecherche4");

const ingredientUl = document.querySelector('.ingredientUl');
const applianceUl = document.querySelector('.applianceUl');
const ustensilUl = document.querySelector('.ustensilUl');

const closeTheTag = document.querySelector('.tag-close');


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
  // filteredRecipes = recipes.filter(recipe => recipe.includes(clickedIngredient.toLowerCase()))
  console.log(tagsIngredients);
  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
  console.log(tags);
  console.log(filteredRecipes);

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
    
    tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
    console.log(tags);
    removeTag(item);
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

  // revoir pour cumuler les tags, ici annule et remplace le clicked tag
  // filtrer sur array tagAplliance et non clicked Appliance pour cumuluer les elements dans la recherche
  filteredRecipes = recipes.filter(recipe => recipe.appliance.toLowerCase() === clickedAppliance.toLowerCase());

  console.log(clickedAppliance);
  console.log(filteredRecipes);

  displayCards(filteredRecipes);


  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
  console.log(tags)


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

    tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
    console.log(tags)

    removeTag(item);

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
  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
  console.log(tags)

  
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
    tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
    console.log(tags)

    removeTag(item);

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












// RECHERCHE DANS LE FORMULAIRE PRINCIPAL
inputForm1.addEventListener(('input'), (e) => {
  e.preventDefault();
  e.stopPropagation();
  actualValueInput = inputForm1.value;
  actualValueInput.toLowerCase();

  searchInputBar();

});


 

// MENU DEROULANT RECHERCHE PAR INGREDIENT
dropdownPrimary.addEventListener('click', (e)=> {
  e.preventDefault();
  e.stopPropagation();


  appliancesDiv.style.display = "none";
  ustensilsDiv.style.display = "none";
  btnAppliances.style.display = "block";
  btnUstensils.style.display = "block";


  if (ingredientsDiv.style.display === "none") {
    ingredientsDiv.style.display = "block";
    btnIngredients.style.display = "none";
    inputForm2.focus();
    inputForm2.select();

  } else {
    inputForm2.value ="";
    ingredientsDiv.style.display = "none";
    btnIngredients.style.display = "block";

  }
});

// MENU DEROULANT RECHERCHE PAR APPAREIL
dropdownSuccess.addEventListener('click', (e)=> {
  e.preventDefault();
  ingredientsDiv.style.display = "none";
  ustensilsDiv.style.display = "none";
  btnIngredients.style.display = "block";
  btnUstensils.style.display = "block";

  if (appliancesDiv.style.display === "none") {
    appliancesDiv.style.display = "block";
    btnAppliances.style.display = "none";

    inputForm3.focus();
    inputForm3.select();

  } else {
    inputForm3.value ="";
    appliancesDiv.style.display = "none";
    btnAppliances.style.display = "block";
  }
});

// MENU DEROULANT RECHERCHE PAR USTENSILE
dropdownDanger.addEventListener('click', (e)=> {
  e.preventDefault();
  ingredientsDiv.style.display = "none";
  appliancesDiv.style.display = "none";
  btnIngredients.style.display = "block";
  btnAppliances.style.display = "block";
  if (ustensilsDiv.style.display === "none") {
    ustensilsDiv.style.display = "block";
    btnUstensils.style.display = "none";

    inputForm4.focus();
    inputForm4.select();

  } else {
    inputForm4.value ="";
    ustensilsDiv.style.display = "none";
    btnUstensils.style.display = "block";
  }
});




// INITIALISATION
async function init() {
  const { recipes } = await getRecipes();
  await displayCards(recipes);
  await displayIngredientsAppliancesUstensils();
}

init();
