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
      return 'blue';
    case 'Blocker':
    case 'Security Attack +1':
    case 'Draw 1':
    case 'Material Save 1':
    case 'Material Save 2':
    case 'Material Save 3':
    case 'Material Save 4':
    case 'Digi-Burst':
    case 'Delay':
    case 'Raid':
    case 'Save':
    case 'Blitz':
    case 'Rush':
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