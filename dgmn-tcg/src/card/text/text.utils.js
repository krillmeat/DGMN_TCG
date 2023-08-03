import reactStringReplace from 'react-string-replace';

/** ------------------------------------------------------------------------------------------
* GET TAG COLOR
* --------------------------------------------------------------------------------------------
* Finds the Tag Color for a specific phrase
* TODO - This can be an object or something
* 
* @param  {String}  tagText Text inside of the Tag (ie When Digivolving)
* ------------------------------------------------------------------------------------------*/
export const getTagColor = tagText =>{
  switch(tagText){
    case 'Your Turn':
    case 'When Digivolving':
    case 'When Attacking':
    case 'Security':
    case 'Main':
    case 'On Deletion':
    case "Opponent's Turn":
    case "On Play":
    case "Start of Your Turn":
    case "End of Attack":
    case "All Turns":
    case "End of Opponent's Turn":
    case "End of Your Turn":
      return 'blue';
    case 'Blocker':
    case 'Security Attack +1':
    case 'Draw 1':
    case 'Draw 2':
    case 'Material Save 1':
    case 'Material Save 2':
    case 'Material Save 3':
    case 'Material Save 4':
    case 'Digi-Burst':
    case 'De-Digivolve 1':
    case 'Delay':
    case 'Raid':
    case 'Save':
    case 'Blitz':
    case 'Rush':
    case 'Jamming':
    case 'Piercing':
      return 'orange';
    case 'Once Per Turn':
      return 'purple';
    case 'DigiXros -1':
    case 'DigiXros -2':
    case 'DigiXros -3':
      return 'green'
    default:
      return '';
  }
}

/** ------------------------------------------------------------------------------------------
* GET ALL TAGS
* --------------------------------------------------------------------------------------------
* Goes through a line and finds all of the Tags that need to be replaced
* 
* @param  {String}  line  Single line of Effect Text
* ------------------------------------------------------------------------------------------*/
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

/** ------------------------------------------------------------------------------------------
* TAGIFY
* --------------------------------------------------------------------------------------------
* Takes a line of Effect text and turns it into usable HTML/JSX
* 
* @param  {String}  line  Single line of Effect Text
* ------------------------------------------------------------------------------------------*/
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
