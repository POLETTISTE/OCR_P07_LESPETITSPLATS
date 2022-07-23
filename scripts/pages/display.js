// ---------------------------DISPLAY.JS------------------------
function removeTag(item) {
  //remove physically tag button
  item.textContent='';
  item.remove();
}

function getIngredients() {
  dataIngredientsFiltered.forEach((element) => {
    let item = document.createElement('li');
    item.classList.add('ingredientLi');
    item.textContent = element;
    item.addEventListener(('click'), eventClickBtnPrimary);
    ingredientUl.appendChild(item);
  })
}
function getTagCard(e){
  let item = document.createElement('card');
  item.classList.add('tag-ingredient', 'tag', 'rounded');
  item.textContent = e.target.textContent;
  
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  
  tagsDiv.appendChild(item);
  item.appendChild(closeTag);
  closeTag.addEventListener('click', closeTheTag); 
}



//INITIALISATION LANCEMENT DES 3 FONCTIONS 

async function displayIngredientsAppliancesUstensils() {
  getIngredients();
  displayAppliances();
  displayUstensils();
}

