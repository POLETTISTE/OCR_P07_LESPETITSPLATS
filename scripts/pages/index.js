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
const dropdownPrimary = document.querySelector("body > main > div.container-fluid.filters > div.dropdown.dropdown-primary");
const ingredientsDiv = document.querySelector("body > main > div.container-fluid.filters > div:nth-child(1) > div");
const inputForm2 = document.querySelector("#SaisieRecherche2");
const ingredientUl = document.querySelector('.ingredientUl');





dropdownPrimary.addEventListener('click', (e)=> {
  e.preventDefault();
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

btnAppareils.addEventListener('click', (e)=> {
  e.preventDefault();
  // console.log('appareils');
});
btnUstensiles.addEventListener('click', (e)=> {
  e.preventDefault();
  // console.log('ustensiles');
});





async function init() {
  const { recipes } = await getRecipes();
  displayCards(recipes);
  displayIngredients(recipes);
}

init();
