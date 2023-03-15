export const addItemToFilter = (newItem,currentFilter) => {
  let updatedFilter = currentFilter;
      updatedFilter.push(newItem);
  return updatedFilter;
}

export const removeItemFromFilter = (removedItem,currentFilter) => {
  let updatedFilter = currentFilter;
      updatedFilter.splice(updatedFilter.indexOf(removedItem),1);
  return updatedFilter;
}

export const isItemInFilter = (item, currentFilter) => currentFilter.indexOf(item) !== -1;

export const typeFilter = cardTypes => card => cardTypes.indexOf(card.type) !== -1; 
export const colorFilter = cardColors => card => {
  for(let color of card.colors){
    if(cardColors.indexOf(color) !== -1) return true;
  } return false;
}