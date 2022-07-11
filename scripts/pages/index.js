// ***** JAVASCRIPT POUR LES ELEMENTS DE LA PAGE INDEX.HTML *****


let arrTriIngredients = [];
let dataIngredientsFiltered = [];
let tagsIngredients = [];

let arrTriAppliances = [];
let dataAppliancesFiltered = [];
let tagsAppliances = [];

let arrTriUstensils = [];
let dataUstensilsFiltered = [];
let tagsUstensils = [];


//DOM
const recipesSection = document.querySelector('.recipes');
const hashtagDiv = document.querySelector('.hashtags')
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

dropdownDanger.addEventListener('click', (e)=> {
  e.preventDefault();
  ingredientsDiv.style.display = "none";
  appliancesDiv.style.display = "none";
  btnIngredients.style.display = "block";
  btnAppliances.style.display = "block";
  if (ustensilsDiv.style.display === "none") {
    ustensilsDiv.style.display = "block";
    btnUstensiles.style.display = "none";

    inputForm4.focus();
    inputForm4.select();

  } else {
    inputForm4.value ="";
    ustensilsDiv.style.display = "none";
    btnUstensils.style.display = "block";
  }
});


async function init() {
  const { recipes } = await getRecipes();
  displayCards(recipes);
  displayIngredients(dataIngredientsFiltered);
  displayAppliances(dataAppliancesFiltered);
  displayUstensiles(dataUstensilsFiltered);
}

init();
