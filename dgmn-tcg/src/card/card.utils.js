export const buildFullSetNumber = (set,card) => {
  console.log("SET ? ",set)
  console.log("CARD ? ",card);
}

export const removeZeroes = cardNumber => {
  let converted = cardNumber;
  while(converted.charAt(0) === '0'){
    converted = converted.substring(1);
  }
  return parseInt(converted);
}
