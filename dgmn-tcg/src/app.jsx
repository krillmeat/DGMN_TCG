import React, {useState} from 'react';
import './reset.css';
import './app.css';
import CardDatabase from './card-database/card-database';
import MainNav from './main-nav';
import CardBase from './card-database/images/card-base/card-base.jsx.old';
import PrintMode from './print-mode/print-mode';
import DeckBuilder from './deck-builder/deck-builder';
import CARDS from './card-database/cards.db';
import { useEffect } from 'react';
import { useWindowResize } from './utils/hooks/windowResize.hook';
import ContextMenu from './context-menu';
import { DECK_LISTS } from './DB/decks/decklists.db';
import DeckBuilderPopout from './deck-builder/deck-builder-popout';

export const AppContext = React.createContext();

const DEFAULT_CONTEXT = {
  view: 'database',
  isPopupOpen: false,
  popupCard: {set: '', cardNo: 0},
  printList: [CARDS.BT13[7],CARDS.BT13[7],CARDS.BT13[7]],
  isDeckBuilderActive: true,
  currentDeck: DECK_LISTS.shineGrey,
  filters: {
    sets: ['BT13'],
    type: ['egg','dgmn','tamer','option'],
    color: ['red','blue','yellow','green','black','purple','white'],
    name: undefined
  },
  windowSize: 0,
  mousePosition: [0,0],
  cardSize: 'xxxl'
}

function App() {

  const [context,setContext] = useState(DEFAULT_CONTEXT);

  const [windowSize] = useWindowResize();

  useEffect(()=>{
    setContext({...context,windowSize})
  },[windowSize]);

  return (
    <AppContext.Provider value={[context,setContext]}>
      <div className="App">
        <MainNav />
        {context.view === 'database' && <CardDatabase />}
        {context.view === 'print' && <PrintMode />}
        {context.view === 'decklist' && <DeckBuilder />}

        {context.isDeckBuilderActive && <DeckBuilderPopout />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
