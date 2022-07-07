async function getRecipes() {
  await fetch('data/recipes.json')
    .then((res) => res.json())
    .then((data) => {
      recipes = data.recipes;
    })
    .catch((err) => err);
  
  return { recipes };
}