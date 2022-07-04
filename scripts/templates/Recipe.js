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
    card.classList.add('col-3', 'p-0');

    //IMAGE DE LA RECETTE
    const pictureRecipe = document.createElement('div');
    pictureRecipe.classList.add('picture');

    //MILIEU DE CARTE NOM / TEMPS DE PREPARATION DE LA RECETTE

    const middleCardInfos = document.createElement('div');
    middleCardInfos.classList.add('middleCardInfos','d-flex', 'justify-content-around', 'p-3');
    

    //NOM DE LA RECETTE
    const nameRecipe = document.createElement('h2');
    nameRecipe.classList.add('col-8','pl-0');
    nameRecipe.textContent = this._name;

    //TEMPS PREPARATION DE LA RECETTE
    const timeRecipe = document.createElement('h2');

    timeRecipe.classList.add('time','col-4','pr-0','text-right')
    timeRecipe.innerHTML =`<i class="fa-regular fa-clock"></i> ${this._time} min`;

    //BAS DE CARTE INGREDIENTS / DESCRIPTION DE LA RECETTE

    const bottomCardInfos = document.createElement('div');
    bottomCardInfos.classList.add('bottomCardInfos','d-flex','justify-content-between','pl-3','pr-3','pb-3', 'pt-0');
    
    //LISTE DES INGREDIENTS DE LA RECETTE
    const ingredientsRecipe = document.createElement('div');
    ingredientsRecipe.classList.add('ingredients','col-6')
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
      liste.innerHTML = `${element.ingredient}<span>${element.quantity} ${element.unit}</span>`;
      ingredientsRecipe.appendChild(liste);
    });

    //DESCRIPTION DE LA RECETTE
    const descriptionRecipe = document.createElement('p');
    descriptionRecipe.classList.add('descriptionRecipe','col-6');
    descriptionRecipe.textContent = this._description;
  

    card.appendChild(pictureRecipe);
    card.appendChild(middleCardInfos);
    card.appendChild(bottomCardInfos);

    middleCardInfos.appendChild(nameRecipe);
    middleCardInfos.appendChild(timeRecipe);

    bottomCardInfos.appendChild(ingredientsRecipe);
    bottomCardInfos.appendChild(descriptionRecipe);

    return (card);
  }
}
