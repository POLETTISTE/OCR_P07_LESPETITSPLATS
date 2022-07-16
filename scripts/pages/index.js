// ---------------------------INDEX.JS------------------------
// debugger


let recipesArray = []; // contient toutes les recettes d'origine (50);
let dataIngredientsFiltered = []; // contient toutes les recettes filtrées grace aux tags ingredients
let dataAppliancesFiltered = []; // contient toutes les recettes filtrées grace aux tags appliances
let dataUstensilsFiltered = []; // contient toutes les recettes filtrées grace aux tags ustensils

let filteredRecipes = dataIngredientsFiltered.concat(dataAppliancesFiltered, dataUstensilsFiltered); 
// contient toutes les recettes filtrées des tags (globale)

let arrTriIngredients = []; //CONTIENT TOUTES LES INGREDIENTS (ARRAY DE STRINGS) == TAGS

let tagsIngredients = []; //ajoute / supprime tag + stocke element dans array

let arrTriAppliances = [];//CONTIENT TOUTES LES APPAREILS (ARRAY DE STRINGS)== TAGS

let tagsAppliances = []; //ajoute / supprime tag + stocke element dans array

let arrTriUstensils = [];//CONTIENT TOUTES LES USTENSILES (ARRAY DE STRINGS)== TAGS

let tagsUstensils = []; //ajoute / supprime tag + stocke element dans array

let tags = tagsIngredients.concat(tagsAppliances, tagsUstensils); // CONTIENT TOUS LES TAGS == TAGS



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

const closeTag = document.querySelector('.tag-close');


// RECHERCHE DANS LE FORMULAIRE PRINCIPAL
inputForm1.addEventListener(('input'), (e) => {
  e.preventDefault();
  e.stopPropagation();
  actualValueInput = inputForm1.value;
  actualValueInput.toLowerCase();
  let result = [];
  
  
  //MOINS DE 3 CARACTERES
  if (inputForm1.value.length < 3) {
    console.log('moins de 3 caractères');
    
    // si on a aucune donnee filtree, on prend recipes
    // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filter
    if (filteredRecipes.length === 0) {
      result = recipes.filter(recipe => recipe);
    } else {
      result = filteredRecipes.filter(recipe => recipe);
    }
    displayCards(result);
    console.log(result);

  }
  // PLUS DE 2 CARACTERES
  if (inputForm1.value.length > 2) {
    console.log('plus de 2 caractères');  
    console.log(recipes);
    recipes.forEach((element) => {
      console.log(element.name)
    })
    recipes.forEach((element) => {
      // console.log(element.ingredients);
      element.ingredients.forEach((element) => {
        console.log(element.ingredient)
      })
    })

    // si on a aucune donnee filtree, on prend recipes
    // si on a deja des donnes filtrees dans recipearray, alors on prend filteredRecipes pour filter
   
    // function suffisammentGrand(element) {
    //   return element >= 10;
    // }
    // var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
    // // filtre vaut [12, 130, 44]
    
    if (filteredRecipes.length === 0) {
      result = recipes.filter(recipe => recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()));
      console.log(result);

    } else {
       result = filteredRecipes.filter(recipe => recipe.name.toLowerCase().includes(actualValueInput.toLowerCase()));
    }
    displayCards(result);
  };
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




//   closeTag.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('click');
// });


// INITIALISATION
async function init() {
  const { recipes } = await getRecipes();
  await displayCards(recipes);
  await displayIngredientsAppliancesUstensils();
}

init();
