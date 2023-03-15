import React, {useState} from 'react';
import './reset.css';
import './app.css';
import CardDatabase from './card-database/card-database';
import MainNav from './main-nav';
import CardBase from './card-database/images/card-base/card-base';
import PrintMode from './print-mode/print-mode';
import CARDS from './card-database/cards.db';

export const AppContext = React.createContext();

const DEFAULT_CONTEXT = {
  view: 'database',
  isPopupOpen: false,
  popupCard: {set: '', cardNo: 0},
  printList: [CARDS.BT1[88],CARDS.BT11[2]],
  filters: {
    sets: ['BT11'],
    type: ['egg','dgmn','tamer','option'],
    color: ['red','blue','yellow','green','black','purple','white']
  }
}

function App() {

  const [context,setContext] = useState(DEFAULT_CONTEXT);

  return (
    <AppContext.Provider value={[context,setContext]}>
      <div className="App">
        <MainNav />
        {context.view === 'database' && <CardDatabase />}
        {context.view === 'print' && <PrintMode />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
