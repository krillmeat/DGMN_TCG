export const findCardInDeck = (cardList,card) => {
  for(let cardNumber of Object.keys(cardList)){
    if(cardNumber === card.replace("-","_")) return cardList[cardNumber]
  }

  return undefined;
}

export const getCurrCount = (cardList, card) => {
  const cardData = findCardInDeck(cardList,card);
  return cardData ? cardData.copies : 0;
}

export const buildDeckString = deckList => {
  let string = '{\n';
      string += `\tdeckName: '${deckList.deckName}',\n`;
      string += `\tcardList: {\n`

  for(let key of Object.keys(deckList.cardList)){
    string += `\t\t${key}: {\n`;
    string += `\t\t\tcopies: ${deckList.cardList[key].copies},\n`
    string += `\t\t\tneed: ${deckList.cardList[key].need},\n`
    string += '\t\t},\n'
  }

  return string + '\t}\n}';
}
