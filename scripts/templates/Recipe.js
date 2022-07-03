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

//CREATION DE LA CARTE RECETTE
  getRecipeCard() {

    const card = document.createElement('article');

    //IMAGE DE LA RECETTE
    const pictureRecipe = document.createElement('img');
    pictureRecipe.setAttribute('src', 'assets/images/image.jpeg');
    pictureRecipe.setAttribute('alt', ' ');
    pictureRecipe.classList.add('picture');

    //NOM DE LA RECETTE
    const nameRecipe = document.createElement('h2');
    nameRecipe.textContent = this._name;

    //TEMPS PREPARATION DE LA RECETTE
    const timeRecipe = document.createElement('h2');
    // timeRecipe.textContent =this._time;
    timeRecipe.innerHTML =`<i class="fa-solid fa-clock"></i> ${this._time} min`;
    
    //LISTE DES INGREDIENTS DE LA RECETTE
    const ingredientsRecipe = document.createElement('div');
    this._ingredients.forEach(element => {
      let liste = document.createElement('p');
      if (element.quantity === undefined) {
        element.quantity="";
      }else{
        element.quantity= `: ${element.quantity}`
      }
      if (element.unit === undefined) {
        element.unit="";
      }
      liste.innerHTML = `${element.ingredient}${element.quantity} ${element.unit}`;
      ingredientsRecipe.appendChild(liste);
    });

    //DESCRIPTION DE LA RECETTE
    const descriptionRecipe = document.createElement('p');
    descriptionRecipe.textContent = this._description;
  

    card.appendChild(pictureRecipe);
    card.appendChild(nameRecipe);
    card.appendChild(timeRecipe);
    card.appendChild(ingredientsRecipe);
    card.appendChild(descriptionRecipe);

    return (card);
  }
}
