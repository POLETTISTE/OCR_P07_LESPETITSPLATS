// ---------------------------INDEX.JS------------------------
let result = [];

let recipesArray = []; // contient toutes les recettes d'origine (50);
let arrTriIngredients = []; //TEMP contient toutes les noms des ingrédients avec doublons
let arrTriAppliances = [];// TEMP contient toutes les noms des appareils avec doublons
let arrTriUstensils = [];// TEMP contient toutes les noms des ustensiles sans doublons
let dataIngredientsFiltered = []; // contient toutes les noms des ingrédients sans doublons
let dataAppliancesFiltered = []; // contient toutes les noms des appareils sans doublons
let dataUstensilsFiltered = []; // contient toutes les noms des ustensiles sans doublons
let tagsIngredients = []; //ajoute / supprime tag + stocke element dans array
let tagsAppliances = []; //ajoute / supprime tag + stocke element dans array
let tagsUstensils = []; //ajoute / supprime tag + stocke element dans array
let tags = []; // contient tous les tags sélectionnés
let filteredRecipes = []; // contient toutes les recettes filtrées par les tags (globale)

//DOM
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


//AJOUT TAG
function pushAndConcatItem(clickedItem,tag){
  console.log(clickedItem);
  console.log(tag);
  tag.push(clickedItem);
  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
  console.log(tags);
}


//AJOUT TAG INGREDIENT
function clickIngredient(e) {
  let clickedIngredient = e.target.textContent;
  pushAndConcatItem(clickedIngredient, tagsIngredients)
  getTagCard(e, 'tag-ingredient');
  dropdownPrimary.click();
}

//AJOUT TAG APPLIANCE
function clickAppliance(e) {
  let clickedAppliance = e.target.textContent;
  pushAndConcatItem(clickedAppliance, tagsAppliances)

  // revoir pour cumuler les tags, ici annule et remplace le clicked tag
  // filtrer sur array tagAplliance et non clicked Appliance pour cumuluer les elements dans la recherche
  filteredRecipes = recipes.filter(recipe => recipe.appliance.toLowerCase() === clickedAppliance.toLowerCase());
  getTagCard(e, 'tag-appliance');
  dropdownSuccess.click();
}

//AJOUT TAG USTENSIL
function clickUstensil(e) {
  let clickedUstensil = e.target.textContent;
  pushAndConcatItem(clickedUstensil, tagsUstensils)
  getTagCard(e, 'tag-ustensil');
  dropdownDanger.click();

}

function closeTheTag(){
  const target = this.parentNode;
  const classTarget = target.className;

  switch(classTarget) {
    case 'tag-ingredient tag rounded' : 
      index = tagsIngredients.indexOf(target.textContent);
      tagsIngredients.splice(index, 1)
    break;
    case 'tag-appliance tag rounded' : 
      index = tagsAppliances.indexOf(target.textContent);
      tagsAppliances.splice(index, 1)
    break;
    case 'tag-ustensil tag rounded' : 
      index = tagsUstensils.indexOf(target.textContent);
      tagsUstensils.splice(index, 1)
    break;
    default:
    console.log('error in switch');
  }

  tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS
  console.log(tags);
  removeTag(target);
};




















// INITIALISATION
async function init() {
  const { recipes } = await getRecipes();
  await displayCards(recipes);
  await displayIngredientsAppliancesUstensils();
}

init();
