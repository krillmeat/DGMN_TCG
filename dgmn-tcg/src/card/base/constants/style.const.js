const FILL_WHITE = 'fill-white';
const FILL_COLOR_ONE = 'fill-color-one';

export const matchStyleConst = property => {
  switch(property){
    case 'fill:#fff':
      return FILL_WHITE;
    case 'fill:lime':
      return FILL_COLOR_ONE;
    case 'fill:aqua':
      return 'fill-color-two';
    case 'fill:#031132':
      return 'cost-dark-blue-fill';
    case 'fill:#133354':
      return 'cost-mid-blue-fill';
    case 'fill:#274d70':
      return 'evo-cost-blue-fill';
    case 'fill:#99a8b3':
      return 'cost-gray-fill';
    case 'fill:red':
      return 'cost-marker cost-marker-red';
    case 'fill:blue':
      return 'cost-marker cost-marker-blue';
    case 'fill:#ff0':
      return 'cost-marker cost-marker-yellow';
    case 'fill:#ddf':
      return 'cost-marker cost-marker-white';
    case 'fill:#0a0':
      return 'cost-marker cost-marker-green';
    case 'fill:#111':
      return 'cost-marker cost-marker-black';
    case 'fill:#faf':
      return 'cost-marker cost-marker-purple';
    default:
      return 'UNKNOWN-CLASS'
  }
}