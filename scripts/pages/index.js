// ***** JAVASCRIPT POUR LES ELEMENTS DE LA PAGE INDEX.HTML *****

// import recipe from './data.js';
// import { displayCards } from './display.js';
// import { filteringByNameByDescriptionByIngredients } from './filters.js';



let recipes;
let dataFiltres = [];
let tags = [];

// const input = document.getElementById('inputPrincipale');

// input.addEventListener('input', (e)=>{
// //si plus de 3 ...
// })

// displayCards(recipes);

//DOM
const recipesSection = document.querySelector('.recipes');
const btnIngredients = document.querySelector('.btn-primary');
const btnAppareils = document.querySelector('.btn-success');
const btnUstensiles = document.querySelector('.btn-danger');


btnIngredients.addEventListener('click', (e)=> {
  e.preventDefault();
  console.log('ingredients');
});
btnAppareils.addEventListener('click', (e)=> {
  e.preventDefault();
  console.log('appareils');
});
btnUstensiles.addEventListener('click', (e)=> {
  e.preventDefault();
  console.log('ustensiles');
});




async function init() {
  const { recipes } = await getRecipes();
  displayCards(recipes);
}

init();
