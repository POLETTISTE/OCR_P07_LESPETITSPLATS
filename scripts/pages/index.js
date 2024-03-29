// ---------------------------INDEX.JS------------------------
let result = [];

let arrTriIngredients = []; //TEMP contient toutes les noms des ingrédients avec doublons
let arrTriAppliances = [];// TEMP contient toutes les noms des appareils avec doublons
let arrTriUstensils = [];// TEMP contient toutes les noms des ustensiles sans doublons
let filteredListIngredients = [];// contient toutes les noms des ingrédients sans doublons
let filteredListAppliances = [];// contient toutes les noms des ingrédients sans doublons
let filteredListUstensils = [];// contient toutes les noms des ingrédients sans doublons
let dataIngredientsFiltered = []; // contient toutes les noms des ingrédients avec doublons
let dataAppliancesFiltered = []; // contient toutes les noms des appareils avec doublons
let dataUstensilsFiltered = []; // contient toutes les noms des ustensiles avec doublons
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
  recipesSection.style.display='flex';

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


// RECHERCHE INGREDIENT
inputForm2.addEventListener('input', (e) => {

  e.preventDefault();
  e.stopPropagation();

  actualValueInput2 = inputForm2.value;
  ingredientUl.textContent = '';

  //filtre la liste pendant la saisie
  searchInputIngredient(dataIngredientsFiltered);
  getList(filteredListIngredients, 'ingredientLi', clickIngredient, ingredientUl);
  
})

// RECHERCHE APPLIANCE
inputForm3.addEventListener('input', (e) => {

  e.preventDefault();
  e.stopPropagation();

  actualValueInput3 = inputForm3.value;
  applianceUl.textContent = '';

  searchInputAppliance(dataAppliancesFiltered);
  getList(filteredListAppliances,'applianceLi', clickAppliance, applianceUl );

})

// RECHERCHE USTENSIL
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


//AJOUT D'UN TAG DANS ARRAY TAGS
function pushAndConcatItem(clickedItem,tag){

  tag.push(clickedItem);
  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
}

//AJOUT TAG INGREDIENT
function clickIngredient(e) {

  errorMessage.style.display = "none";
  recipesSection.style.display = "flex";
  // inputForm1.value='';
  addDisplayNoneWhenCreateTag(e);
  let clickedIngredient = e.target.textContent;
  //on cree le tag
  getTagCard(e, 'tag-ingredient');
  //on rajoute le nom du tag dans la liste des tags ingredients
  pushAndConcatItem(clickedIngredient, tagsIngredients);

  //regarder si input 1 !==0 etc...
  if (tags.length === 1) {

    searchWithTagIngredient(clickedIngredient);
  } else if (tags.length >1){

    searchWithTagIngredient(clickedIngredient);
    // filteringRecipeswithTags(filteredRecipes);
  }
  // on affiche les recettes triées
  displayCards(filteredRecipes);

  //tri des listes
  inputForm2.value='';
  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent='';

  
  
  if (filteredRecipes.length > 1 ) {
    
    refreshLists()
  } 
  return filteredRecipes

}

//AJOUT TAG APPLIANCE
function clickAppliance(e) {

  errorMessage.style.display = "none";
  recipesSection.style.display = "flex";

  // inputForm1.value = '';
  addDisplayNoneWhenCreateTag(e);
  let clickedAppliance = e.target.textContent;
  getTagCard(e, 'tag-appliance');
  pushAndConcatItem(clickedAppliance, tagsAppliances);
  
  
  if(tags.length === 1) {
    searchWithTagAppliance(clickedAppliance);
  } 
  else if(tags.length >1){
    searchWithTagAppliance(clickedAppliance);
    // filteringRecipeswithTags(filteredRecipes);
  }
  displayCards(filteredRecipes);

  inputForm3.value='';
  
  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent='';

  
  if (filteredRecipes.length > 1 ) {
    
    refreshLists()
  }
  return filteredRecipes

}

//AJOUT TAG USTENSIL
function clickUstensil(e) {

  errorMessage.style.display = "none";
  recipesSection.style.display = "flex";
  // inputForm1.value = '';
  addDisplayNoneWhenCreateTag(e);
  let clickedUstensil = e.target.textContent;
  getTagCard(e, 'tag-ustensil');
  pushAndConcatItem(clickedUstensil, tagsUstensils)

  if(tags.length === 1) {
    searchWithTagUstensils(clickedUstensil);

  } else if (tags.length >1){
    searchWithTagUstensils(clickedUstensil);

    // filteringRecipeswithTags(filteredRecipes);

  }
  displayCards(filteredRecipes);

  inputForm4.value='';

  ingredientUl.textContent='';
  applianceUl.textContent='';
  ustensilUl.textContent='';
  
  
  
  if (filteredRecipes.length > 1) {
    
    refreshLists()
  }
  return filteredRecipes

}

// A LA FERMETURE D'UN TAG
function closeTheTag(){

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
      index = tagsAppliances.indexOf(item);

      tagsAppliances.splice(index, 1);
      removeDisplayNoneWhenCloseTheTag(item, applianceUl);
      break;

    case 'tag-ustensil tag rounded' : 
      index = tagsUstensils.indexOf(item);
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

  
  // AFFICHE LA LISTE COMPLETE
  if (tags.length === 0 && inputForm1.value==='') {

    //on revient au stade initial (display all recipes)
    init();

  } else if (tags.length === 0 && inputForm1.value!==''){
    filteredRecipes = recipes
    filteredRecipes = searchInput1Datas(filteredRecipes);
    displayCards(filteredRecipes);
    refreshLists()
    
    
  }else if(tags.length !== 0 && inputForm1.value===''){

    filteredRecipes =  filteringRecipeswithTags(recipes);
    displayCards(filteredRecipes);
    refreshLists()
    
  } else if (tags.length !== 0 && inputForm1.value!==''){

    filteredRecipes =  filteringRecipeswithTags(recipes);
    searchInput1Datas(filteredRecipes);

    displayCards(filteredRecipes);
    refreshLists();

  }
}

// ON SUPPRIME TOUS LES TAGS
function deleteTags(){
  let deleteTag = document.querySelectorAll('.tag');

  for (const element of deleteTag) {

    element.remove();
    tagsIngredients=[];
    tagsAppliances=[];
    tagsUstensils=[];
  }
}

// ON REINITIALISE LES LISTES ORIGINELLES
function refreshLists() {
  dataIngredientsFiltered =  filteringListIngredientsWhenClickOnAnotherTag(filteredListIngredients);
  dataAppliancesFiltered = filteringListAppliancesWhenClickOnAnotherTag(filteredListAppliances);
  dataUstensilsFiltered = filteringListUstensilsWhenClickOnAnotherTag(filteredListUstensils);

  getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
  getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
  getList(dataUstensilsFiltered,'ustensilLi', clickUstensil, ustensilUl );
}

// INITIALISATION
async function init() {
  const { recipes } = await getRecipes();
  await displayCards(recipes);
  await displayIngredientsAppliancesUstensils();
}

init();
