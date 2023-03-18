import React, {useState} from 'react';
import './reset.css';
import './app.css';
import CardDatabase from './card-database/card-database';
import MainNav from './main-nav';
import CardBase from './card-database/images/card-base/card-base';
import PrintMode from './print-mode/print-mode';
import CARDS from './card-database/cards.db';
import { useEffect } from 'react';
import { useWindowResize } from './utils/hooks/windowResize.hook';

export const AppContext = React.createContext();

const DEFAULT_CONTEXT = {
  view: 'print',
  isPopupOpen: false,
  popupCard: {set: '', cardNo: 0},
  printList: [CARDS.P[33],CARDS.P[33],CARDS.P[33],CARDS.P[33],CARDS.P[16],CARDS.P[16],CARDS.P[16],CARDS.P[16]],
  filters: {
    sets: ['P'],
    type: ['egg','dgmn','tamer','option'],
    color: ['red','blue','yellow','green','black','purple','white']
  },
  windowSize: 0
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
      </div>
    </AppContext.Provider>
  );
}

export default App;
