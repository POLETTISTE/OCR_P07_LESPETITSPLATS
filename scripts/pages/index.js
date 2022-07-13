// ---------------------------INDEX.JS------------------------

//CONTIENT TOUTES LES RECETTES
// debugger

let recipesArray = [];
let fileredRecipes = [];
console.log(recipesArray);

//CONTIENT TOUTES LES INGREDIENTS (ARRAY DE STRINGS) == TAGS
let arrTriIngredients = [];
let dataIngredientsFiltered = [];
let tagsIngredients = [];

//CONTIENT TOUTES LES APPAREILS (ARRAY DE STRINGS)== TAGS
let arrTriAppliances = [];
let dataAppliancesFiltered = [];
let tagsAppliances = [];

//CONTIENT TOUTES LES USTENSILES (ARRAY DE STRINGS)== TAGS
let arrTriUstensils = [];
let dataUstensilsFiltered = [];
let tagsUstensils = [];

// CONTIENT TOUS LES TAGS == TAGS
let Tags = tagsIngredients.concat(tagsAppliances, tagsUstensils);


//DOM
//CARD RECETTE
const recipesSection = document.getElementById('recipes');
const recipeCard = document.querySelectorAll("#recipes > article");
const recipeCardPicture = document.querySelectorAll('#recipes > article > div.picture');
const recipeCardIngredients = document.querySelectorAll(".ingredients");
const middleCardInfos = document.querySelectorAll(".middleCardInfos");
const middleCardInfosH2 = document.querySelectorAll("#recipes > article > div.middleCardInfos.d-flex.justify-content-around.p-3 > h2");
const middleCardInfosH2i = document.querySelector("#recipes > article > div.middleCardInfos.d-flex.justify-content-around.p-3 > h2 > i");
const bottomCardInfos = document.querySelectorAll(".bottomCardInfos");
const recipeCardIngredientsItem = document.querySelectorAll("#recipes > article > div.bottomCardInfos.d-flex.justify-content-between.pl-3.pr-3.pb-3.pt-0 > div > p");
const recipeCardIngredientsItemSpan = document.querySelectorAll("#recipes > article > div.bottomCardInfos.d-flex.justify-content-between.pl-3.pr-3.pb-3.pt-0 > div > p > span");
const recipeCardDescription = document.querySelectorAll(".descriptionRecipe");

const hashtagDiv = document.querySelector('.hashtags');
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

const pcardinfo = document.querySelectorAll("#recipes > article > div.bottomCardInfos.d-flex.justify-content-between.pl-3.pr-3.pb-3.pt-0 > div > p > span")
const spaninfo = document.querySelectorAll("#recipes > article > div.bottomCardInfos.d-flex.justify-content-between.pl-3.pr-3.pb-3.pt-0 > div > p > span")

// RECHERCHE DANS LE FORMULAIRE PRINCIPAL
inputForm1.addEventListener(('input'), (e) => {
  e.preventDefault();
  e.stopPropagation();
  actualValueInput = inputForm1.value;
  actualValueInput.toLowerCase();
  
  //MOINS DE 3 CARACTERES
  
  if (inputForm1.value.length < 3) {
    console.log('moins de 3 caractères');
    
    
  }
  // PLUS DE 2 CARACTERES
  if (inputForm1.value.length > 2) {

    let result = [];

    if (fileredRecipes.length === 0) {
      result = recipes.filter(recipe => recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()));
    } else {
       result = fileredRecipes.filter(recipe => recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()));
    }
    
    displayCards(result);
    
    
    
    // si on a aucune donnee filtree, on prend recipes
    // si on a deja des donnes filtrees dans recipearray, alors on prend recipes array pour e filter
    // si un tag est coche
    //  result = recipesArray.filter(recipe => recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()));
    // console.log('plus de 2 caractères');  
    // console.log(actualValueInput.toLowerCase()); 


    // displayCards(result);

    
    // console.log(result);
  };
});
 

// MENU DEROULANT RECHERCHE PAR INGREDIENT
dropdownPrimary.addEventListener('click', (e)=> {
e.preventDefault();

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
  await displayIngredientsAppliancesUstensils(dataIngredientsFiltered, 'ingredientLi', 'ingredientTag', ingredientUl);
  await displayIngredientsAppliancesUstensils(dataAppliancesFiltered, 'applianceLi', 'applianceTag', applianceUl);
  await displayIngredientsAppliancesUstensils(dataIngredientsFiltered, 'ustensilLi', 'ustensilTag', ustensilUl);
}

init();
