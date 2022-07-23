// ---------------------------DISPLAY.JS------------------------
function removeTag(item) {
  //remove physically tag button
  item.textContent='';
  item.remove();
}

function getTagCloseButton(item) {
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  item.appendChild(closeTag);
  closeTag.addEventListener('click', closeTheTag); 
}

function getIngredientsList() {
  dataIngredientsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ingredientLi');
    item.textContent = element;
    item.addEventListener(('click'), clickIngredient);
    ingredientUl.appendChild(item);
  })
}

function getAppliancesList() {
  dataAppliancesFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('applianceLi');
    item.textContent = element;
    item.addEventListener(('click'), clickAppliance);
    applianceUl.appendChild(item);
  })
}

function getUstensilsList() {
  dataUstensilsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ustensilLi');
    item.textContent = element;
    item.addEventListener(('click'), clickUstensil);
    ustensilUl.appendChild(item);
  })
}

function getIngredientTagCard(e){
  let item = document.createElement('card');
  item.classList.add('tag-ingredient', 'tag', 'rounded');
  item.textContent = e.target.textContent;
  getTagCloseButton(item);
  tagsDiv.appendChild(item);
}


function getApplianceTagCard(e){
  let item = document.createElement('card');
  item.classList.add('tag-appliance', 'tag', 'rounded');
  item.textContent = e.target.textContent;
  getTagCloseButton(item);
  tagsDiv.appendChild(item);
}

function getUstensilTagCard(e){
  let item = document.createElement('card');
  item.classList.add('tag-ustensil', 'tag', 'rounded');
  item.textContent = e.target.textContent;
  getTagCloseButton(item);
  tagsDiv.appendChild(item);
}


//INITIALISATION LANCEMENT DES 3 FONCTIONS 
async function displayIngredientsAppliancesUstensils() {
  getIngredientsList();
  getAppliancesList();
  getUstensilsList();
}

