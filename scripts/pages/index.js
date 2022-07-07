// ***** JAVASCRIPT POUR LES ELEMENTS DE LA PAGE INDEX.HTML *****

// import recipe from './data.js';
// import { displayCards } from './display.js';
// import { filteringByNameByDescriptionByIngredients } from './filters.js';


let filtreIngredientsDoublons =[]
let dataFiltres = [];
let tags = [];



// const input = document.getElementById('inputPrincipale');

// input.addEventListener('input', (e)=>{
// //si plus de 3 ...
// })

//DOM
const recipesSection = document.querySelector('.recipes');
const hashtagDiv = document.querySelector('.hashtags')
const btnIngredients = document.querySelector('.btn-primary');
const btnAppareils = document.querySelector('.btn-success');
const btnUstensiles = document.querySelector('.btn-danger');
const dropdownPrimary = document.querySelector(".dropdown-primary");
const dropdownSuccess = document.querySelector(".dropdown-success");
const dropdownDanger = document.querySelector(".dropdown-danger");
const ingredientsDiv = document.querySelector(".ingredients-list");
const appareilsDiv = document.querySelector(".appareils-list");
const ustensilesDiv = document.querySelector(".ustensiles-list");
const inputForm2 = document.querySelector("#SaisieRecherche2");
const inputForm3 = document.querySelector("#SaisieRecherche3");
const inputForm4 = document.querySelector("#SaisieRecherche4");
const ingredientUl = document.querySelector('.ingredientUl');
const appareilUl = document.querySelector('.appareilUl');
const ustensileUl = document.querySelector('.ustensileUl');





dropdownPrimary.addEventListener('click', (e)=> {
  e.preventDefault();

  appareilsDiv.style.display = "none";
  ustensilesDiv.style.display = "none";
  btnAppareils.style.display = "block";
  btnUstensiles.style.display = "block";

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
  ustensilesDiv.style.display = "none";
  btnIngredients.style.display = "block";
  btnUstensiles.style.display = "block";

  if (appareilsDiv.style.display === "none") {
    appareilsDiv.style.display = "block";
    btnAppareils.style.display = "none";

    inputForm3.focus();
    inputForm3.select();

  } else {
    inputForm3.value ="";
    appareilsDiv.style.display = "none";
    btnAppareils.style.display = "block";
  }
});

dropdownDanger.addEventListener('click', (e)=> {
  e.preventDefault();
  ingredientsDiv.style.display = "none";
  appareilsDiv.style.display = "none";
  btnIngredients.style.display = "block";
  btnAppareils.style.display = "block";
  if (ustensilesDiv.style.display === "none") {
    ustensilesDiv.style.display = "block";
    btnUstensiles.style.display = "none";

    inputForm4.focus();
    inputForm4.select();

  } else {
    inputForm4.value ="";
    ustensilesDiv.style.display = "none";
    btnUstensiles.style.display = "block";
  }
});








async function init() {
  const { recipes } = await getRecipes();
  displayCards(recipes);
  displayIngredients(recipes);
  displayAppareils(recipes);
  displayUstensiles(recipes);
}

init();
