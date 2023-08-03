import React, { useState,useEffect,useRef,useContext } from 'react';

import './context-menu.css';
import { AppContext } from './app';
import CARDS from './card-database/cards.db';
import { removeLeadingZeros } from './card-database/card.util';
import { findCardInDeck, getCurrCount, removeZeroes } from './deck-builder/utils/deck-builder.utils';
import { buildFullSetNumber } from './card/card.utils';

const ContextMenu = ({origin,cardNo,cardRef}) => {

  const [context,setContext] = useContext(AppContext)

  const [isOpen,setIsOpen] = useState(false);
  const [mousePosition,setMousePosition] = useState([0,0]);

  const positionRef = useRef(mousePosition);
  const setPositionRef = value => {
    positionRef.current = value;
    setMousePosition(value);
  }

  const openRef = useRef(isOpen);
  const setOpenRef = value => {
    openRef.current = value;
    setIsOpen(value);
  }

  const addToProxies = () => {
    let currPrintList = context.printList;

    if(currPrintList.length < 9){
      let set = cardNo.split("-")[0];
      let card = removeLeadingZeros(cardNo.split("-")[1]);
      currPrintList.push(CARDS[set][card-1])
    } else{ /* tell the user it's full */ }

    setContext({
      ...context,
      printList: currPrintList
    });

    setIsOpen(false);
  }

  const addToDeck = () => {
    const currCount = getCurrCount(context.currentDeck.cardList,cardNo);
    if(currCount === 4) { console.warn("Deck is full of that one"); return; }

    const cardData = findCardInDeck(context.currentDeck.cardList,cardNo);
    if(!cardData) {
      setContext({...context,
        currentDeck: {
          ...context.currentDeck,
          cardList: {
            ...context.currentDeck.cardList,
            [cardNo.replace("-","_")]: {
              copies: 1,
              need: 0
            }
          }
        }})
    } else{
      setContext({...context,
        currentDeck: {
          ...context.currentDeck,
          cardList: {
            ...context.currentDeck.cardList,
            [cardNo.replace("-","_")]: {
              ...context.currentDeck.cardList[cardNo.replace("-","_")],
              copies: currCount + 1
            }
          }
        }})
    }

    setIsOpen(false);
  }

  useEffect(()=>{
    if(!cardRef) return;

    cardRef.current.addEventListener('contextmenu',e => {
      setOpenRef(!openRef.current);
      setPositionRef([e.clientX,e.clientY])
      e.preventDefault();
    },false)

  },[cardRef]);

  return ( isOpen ? 
    <div className='context-menu'>
      <div className="back" onClick={()=>{setOpenRef(false)}}></div>
      <ul style={{top: mousePosition[1]+'px',left: mousePosition[0]+'px'}}>
        <li><button onClick={addToProxies}>Add to Proxies</button></li>
        <li><button onClick={addToDeck}>Add to Current Deck</button></li>
      </ul>
  </div> : <></>)
}

export default ContextMenu;
