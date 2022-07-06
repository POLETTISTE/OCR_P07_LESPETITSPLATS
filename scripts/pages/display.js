// export function displayCards(recipes) {

// }

async function displayCards(recipes) {
      const RecipesSection = document.querySelector('.recipes');
    
      recipes.forEach((recipe) => {
        const recipeModel = Recipe(recipe);
        const recipeCardDOM = recipeModel.getRecipeCard();
        RecipesSection.appendChild(recipeCardDOM);
      });
    }