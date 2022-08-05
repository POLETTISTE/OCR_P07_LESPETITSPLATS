// ---------------------------INDEX.JS------------------------
let result = [];

// let recipesArray = []; // contient toutes les recettes d'origine (50);

let arrTriIngredients = []; //TEMP contient toutes les noms des ingrédients avec doublons
let arrTriAppliances = [];// TEMP contient toutes les noms des appareils avec doublons
let arrTriUstensils = [];// TEMP contient toutes les noms des ustensiles sans doublons
let filteredListIngredients = [];
let filteredListAppliances = [];
let filteredListUstensils = [];
let dataIngredientsFiltered = []; // contient toutes les noms des ingrédients sans doublons
let dataAppliancesFiltered = []; // contient toutes les noms des appareils sans doublons
let dataUstensilsFiltered = []; // contient toutes les noms des ustensiles sans doublons
let tagsIngredients = []; //ajoute / supprime tag + stocke element dans array
let tagsAppliances = []; //ajoute / supprime tag + stocke element dans array
let tagsUstensils = []; //ajoute / supprime tag + stocke element dans array
let tags = []; // contient tous les tags sélectionnés

let filteredRecipes = []; // contient toutes les recettes filtrées par les tags (globale)
let actualValueInput1;
let actualValueInput2;
let actualValueInput3;
let actualValueInput4;


//DOM
const errorMessage = document.getElementById('error-message');
const recipesSection = document.getElementById('recipes');
const recipeCard = document.querySelector('.recipe-card');
const tagsDiv = document.querySelector('.tags');
const tagElement = document.querySelectorAll('.tag');

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



function formatText(string){
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,"")
    .toLowerCase();
}

function CapitalizeFirstLetterText(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

// RECHERCHE DANS LE FORMULAIRE PRINCIPAL
inputForm1.addEventListener(('input'), (e) => {

  e.preventDefault();
  e.stopPropagation();

  errorMessage.style.display = "none";
  recipesSection.className = "d-flex flex-wrap justify-content-between col-12";

  actualValueInput1 = formatText(inputForm1.value);
  formatText(actualValueInput1);

  searchInputBar();

  filteringListIngredientsWithInputPrincipal(filteredRecipes);
  filteringListAppliancesWithInputPrincipal(filteredRecipes);
  filteringListUstensilsWithInputPrincipal(filteredRecipes);

  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent='';

  getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl);
  getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl);
  getList(dataUstensilsFiltered,'ustensilLi', clickUstensil, ustensilUl);
});

inputForm2.addEventListener('input', (e) => {

  e.preventDefault();
  e.stopPropagation();

  actualValueInput2 = inputForm2.value;
  ingredientUl.textContent = '';

  //filtre la liste pendant la saisie
  searchInputIngredient(dataIngredientsFiltered);
  getList(filteredListIngredients, 'ingredientLi', clickIngredient, ingredientUl);
  
})



inputForm3.addEventListener('input', (e) => {

  e.preventDefault();
  e.stopPropagation();

  actualValueInput3 = inputForm3.value;
  applianceUl.textContent = '';

  searchInputAppliance(dataAppliancesFiltered);
  getList(filteredListAppliances,'applianceLi', clickAppliance, applianceUl );

})

inputForm4.addEventListener('input', (e) => {
  e.preventDefault();
  e.stopPropagation();

  actualValueInput4 = inputForm4.value;
  ustensilUl.textContent = '';

  searchInputUstensil(dataUstensilsFiltered);
  getList(filteredListUstensils,'ustensilLi', clickUstensil, ustensilUl );
})

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


//AJOUT TAG DANS ARRAY TAGS
function pushAndConcatItem(clickedItem,tag){

  tag.push(clickedItem);
  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
}

//AJOUT TAG INGREDIENT
function clickIngredient(e) {

  errorMessage.style.display = "none";
  recipesSection.className = "d-flex flex-wrap justify-content-between col-12";
  // inputForm1.value='';
  addDisplayNoneWhenCreateTag(e);
  let clickedIngredient = e.target.textContent;
  //on cree le tag
  getTagCard(e, 'tag-ingredient');
  //on rajoute le nom du tag dans la liste des tags ingredients
  pushAndConcatItem(clickedIngredient, tagsIngredients);
  console.log(filteredRecipes);

  //regarder si input 1 !==0 etc...
  
  searchWithTagIngredient(clickedIngredient, filteredRecipes);
  console.log(filteredRecipes);
  // on affiche les recettes triées
  
  displayCards(filteredRecipes);

  
  
  //tri des listes
  inputForm2.value='';
  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent='';
  dataIngredientsFiltered = filteringListIngredientsWhenClickOnAnotherTag(filteredListIngredients);
  dataAppliancesFiltered = filteringListAppliancesWhenClickOnAnotherTag(filteredListAppliances);
  dataUstensilsFiltered = filteringListUstensilsWhenClickOnAnotherTag(filteredListUstensils);

  
  if (filteredRecipes.length !== 1 ) {

    getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
    getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
    getList(dataUstensilsFiltered,'ingredientLi', clickUstensil, ustensilUl );
  } 
  return filteredRecipes

}

//AJOUT TAG APPLIANCE
function clickAppliance(e) {

  errorMessage.style.display = "none";
  recipesSection.className = "d-flex flex-wrap justify-content-between col-12";

  // inputForm1.value = '';
  addDisplayNoneWhenCreateTag(e);
  let clickedAppliance = e.target.textContent;
  getTagCard(e, 'tag-appliance');
  pushAndConcatItem(clickedAppliance, tagsAppliances);
  searchWithTagAppliance(clickedAppliance);
  displayCards(filteredRecipes);
  inputForm3.value='';
  
  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent='';

  filteringListIngredientsWhenClickOnAnotherTag(filteredListIngredients);
  filteringListAppliancesWhenClickOnAnotherTag(filteredListAppliances);
  filteringListUstensilsWhenClickOnAnotherTag(filteredListUstensils);
  
  if (filteredRecipes.length !== 1 ) {

    getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
    getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
    getList(dataUstensilsFiltered,'ingredientLi', clickUstensil, ustensilUl );
  }

}

//AJOUT TAG USTENSIL
function clickUstensil(e) {

  errorMessage.style.display = "none";
  recipesSection.className = "d-flex flex-wrap justify-content-between col-12";
  // inputForm1.value = '';

  addDisplayNoneWhenCreateTag(e);
  let clickedUstensil = e.target.textContent;
  getTagCard(e, 'tag-ustensil');
  pushAndConcatItem(clickedUstensil, tagsUstensils)
  searchWithTagUstensils(clickedUstensil);
  displayCards(filteredRecipes);

  inputForm4.value='';

  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent='';
  
  filteringListIngredientsWhenClickOnAnotherTag(filteredListIngredients);
  filteringListUstensilsWhenClickOnAnotherTag(filteredListUstensils);
  filteringListAppliancesWhenClickOnAnotherTag(filteredListAppliances);

  
  if (filteredRecipes.length !== 1) {

    getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
    getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
    getList(dataUstensilsFiltered,'ingredientLi', clickUstensil, ustensilUl );
  }
}


function closeTheTag(){

  inputForm1.textContent='';
  //on récupère le nom du tag
  const target = this.parentNode;
  let item = target.textContent;

  const classTarget = target.className;

  switch(classTarget) {
    case 'tag-ingredient tag rounded' : 
      index = tagsIngredients.indexOf(item);
      tagsIngredients.splice(index, 1);
      removeDisplayNoneWhenCloseTheTag(item, ingredientUl);
      break;

    case 'tag-appliance tag rounded' : 
      index = tagsAppliances.indexOf(target.textContent);
      tagsAppliances.splice(index, 1);
      removeDisplayNoneWhenCloseTheTag(item, applianceUl);
      break;

    case 'tag-ustensil tag rounded' : 
      index = tagsUstensils.indexOf(target.textContent);
      tagsUstensils.splice(index, 1);
      removeDisplayNoneWhenCloseTheTag(item, ustensilUl);
      break;
      
    default:
  }


  removeTag(target);

  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
  
  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent ='';

  filteredRecipes =  filteringRecipeswithTags(recipes);

  // AFFICHE LA LISTE COMPLETE
  if (tags.length === 0) {
    // on affiche toutes les recettes existantes
    //on affiche la liste complète des ingrédients
    displayCards(recipes);

    getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
    getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
    getList(dataUstensilsFiltered,'ustensilLi', clickUstensil, ustensilUl );

  }else {
    displayCards(filteredRecipes);

    dataIngredientsFiltered =  filteringListIngredientsWhenClickOnAnotherTag(filteredListIngredients);
    dataAppliancesFiltered = filteringListAppliancesWhenClickOnAnotherTag(filteredListAppliances);
    dataUstensilsFiltered = filteringListUstensilsWhenClickOnAnotherTag(filteredListUstensils);

    getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
    getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
    getList(dataUstensilsFiltered,'ustensilLi', clickUstensil, ustensilUl );
  } 
}

// INITIALISATION
async function init() {
  const { recipes } = await getRecipes();
  await displayCards(recipes);
  await displayIngredientsAppliancesUstensils();
}

init();
