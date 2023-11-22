import { DECK_LISTS } from "../DB/decks/decklists.db";

export const getTotalNeeded = (cardNumber) => {
  let needed = 0;
  let card = cardNumber.replace("-","_")
  for(let deck of Object.keys(DECK_LISTS)){
    let deckList = DECK_LISTS[deck].cardList;
    if(deckList[card]) needed += deckList[card].need
  }
  return needed;
}

export const getTotalOwned = (cardNumber) => {
  let copies = 0;
  let card = cardNumber.replace("-","_")
  for(let deck of Object.keys(DECK_LISTS)){
    let deckList = DECK_LISTS[deck].cardList;
    if(deckList[card]) copies += deckList[card].copies
  }
  return copies;
}
