import reactStringReplace from 'react-string-replace';
import { getTagColor } from './images/card-base/card-base.util';

const isStarter = set => set.charAt(0) === 'S';

export const formatCardNumber = (set,card) => {
  let leadingZero = isStarter(set) && card < 10 ? '0' : '';
      leadingZero = !isStarter(set) && card < 10 ? '00' : leadingZero;
      leadingZero = !isStarter(set) && card >= 10 && card < 100 ? '0' : leadingZero; 
  return leadingZero+(card);
}

export const getNameLengthClass = cardName => {
  let offset = cardName.length - 9;
  if(offset > 0){
    return "offset-"+offset;
  }

  return "";
}

const getAllTags = line => {
  let array = [];
  let modLine = line;
  while(modLine.indexOf("<<") !== -1){
    let tag = modLine.substring(modLine.indexOf("<<")+2,modLine.indexOf(">>"));
    modLine = modLine.substring(modLine.indexOf(">>")+2);
    array.push(tag);
  }
  return array;
}

export const tagify = line => {
  let modLine = line;
  let tags = getAllTags(modLine);
  for(let tag of tags){
    modLine = reactStringReplace(modLine,`<<${tag}>>`,(match,i)=>(
      <span key={i+"-"+tag} className={'tag '+getTagColor(tag)}><span>{tag}</span></span>
    )) 
  }
  return modLine;
}

export const isTamerOrOption = cardType => cardType === 'tamer' || cardType === 'option';
export const getTextColors = (origin,colors) => {
  if(colors.length === 1 && (colors[0] === 'yellow' || colors.indexOf("white"))) return 'black'

  if(colors.length === 2 && (colors.indexOf("yellow") !== -1 || colors.indexOf("white"))){
    if(origin === 'card-name') return 'black-and-white'
    if(origin === 'set-info' && (colors[1] === 'yellow' || colors[1] === 'white')) return 'black'
  }
}

export const hasSpecial = (special,rule) => {
  for(let i in special){
    if(special[i].indexOf(rule) !== -1) return i
  } return -1
}

export const getCondensedTextRule = special => {
  for(let s of special){
    if(s.indexOf("cnd") !== -1) return s
  } return ""
}

export const getSmallerTextRule = special => {
  for(let s of special){
    if(s.indexOf("txt-sm") !== -1) return s
  } return ""
}

export const getXrosTextRule = special => {
  for(let s of special){
    if(s.indexOf("xros-") !== -1) return s
  } return ""
}

export const getNameCondensedTextRule = special => {
  for(let s of special){
    if(s.indexOf("name-cnd") !== -1) return s
  } return ""
}