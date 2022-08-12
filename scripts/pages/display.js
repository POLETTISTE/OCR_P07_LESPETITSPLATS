// ---------------------------DISPLAY.JS------------------------

// GET THE TAG CARD
function getTagCard(e, tag){
  let item = document.createElement('card');
  item.classList.add(tag, 'tag', 'rounded');
  item.textContent = e.target.textContent[0].toUpperCase() + e.target.textContent.substring(1);
  getTagCloseButton(item);
  tagsDiv.appendChild(item);
}

//REMOVE THE TAG CARD
function removeTag(item){
  item.textContent='';
  item.remove();
}

// LITTLE CROSS CLOSING THE TAG
function getTagCloseButton(item){
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  item.appendChild(closeTag);
  closeTag.addEventListener('click', closeTheTag); 
}

// GET THE LIST OF INGREDIENTS / APPLIANCES / USTENSILS
function getList(list, classlist, clickeditem, dom){
  list.forEach(element => {
    let item = document.createElement('li');
    item.classList.add(classlist);
    item.textContent = element[0].toUpperCase() + element.substring(1);
    item.addEventListener(('click'), clickeditem);
    dom.appendChild(item);
  })
}

// DISPLAY NONE THE ELEMENT IN THE LIST WHEN ADD A TAG
function addDisplayNoneWhenCreateTag(e) {
  e.target.classList.add('tagged'); 
}

// REMOVE DISPLAY NONE THE ELEMENT IN THE LIST WHEN DELETE A TAG
function removeDisplayNoneWhenCloseTheTag(item, source){
  const elements = source.childNodes;
 
  elements.forEach(element => {
    if (element.textContent === item) {
      element.classList.remove('tagged');
    };
  });
}


//INITIALIZATION LAUNCH 3 FUNCTIONS 
async function displayIngredientsAppliancesUstensils(){
  getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
  getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
  getList(dataUstensilsFiltered,'ustensilLi', clickUstensil, ustensilUl );
}

