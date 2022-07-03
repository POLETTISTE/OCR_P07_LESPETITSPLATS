// ***** JAVASCRIPT POUR LES ELEMENTS DE LA PAGE INDEX.HTML *****
let recipes;

async function getRecipes() {
  await fetch('data/recipes.json')
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(data) {
      recipes = data.recipes;
      console.log(data.recipes);
      console.log(recipes);
    })
    .catch((err) => {
      console.log('error in the function getRecipes()', err);
    });

  return {recipes};

}

// async function displayData(recipes) {
//   const photographersSection = document.querySelector(".photographer_section");

//   recipes.forEach((recipe) => {
//     const photographerModel = new photographersFactory(recipe);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

async function init() {
        
  await getRecipes();
//   await displayData(recipes);
}

init();
