class Recipe {
  constructor(data) {
    this._data = data;
    this._id = data.id;
    this._name = data.name;
    this._servings = data.servings;
    this._ingredients = data.ingredients;
    this._time = data.time;
    this._description = data.description;
    this._appliance = data.appliance;
    this._ustensils = data.ustensils;
  }

  getRecipeCard() {

    const card = document.createElement('article');

    const nameRecipe = document.createElement('h2');
    nameRecipe.textContent = this._name;

    const timeRecipe = document.createElement('h2');
    timeRecipe.textContent = this._time;


    card.appendChild(nameRecipe);
    card.appendChild(timeRecipe);


    return (card);
  }
}
