import React, {useContext, useMemo} from 'react';
import { AppContext } from '../app';
import Card from '../card/card';

import './print-mode.css';

const PrintMode = () => {
  const [context,setContext] = useContext(AppContext);

  const printCards = useMemo(()=> context.printList ,[context])
  return (<div className='print-mode'>
    {printCards.map((card,index) => {
      return <Card key={card.set+index} set={card.set} card={card.no} size='print'/>
    })}
  </div>)
}

export default PrintMode;
