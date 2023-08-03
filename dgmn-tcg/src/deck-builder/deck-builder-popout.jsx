import React,{useContext,useMemo} from 'react';
import './deck-builder.css';
import { AppContext } from '../app';
import DeckCardList from './components/deck-card-list';
import { buildDeckString } from './utils/deck-builder.utils';

const DeckBuilderPopout = () => {
  const [context,setContext] = useContext(AppContext);

  const copyDeckListAsJS = () => {
    let deckListString = buildDeckString(context.currentDeck)
    navigator.clipboard.writeText(deckListString)
  }

  const deck = useMemo(()=> context.currentDeck ,[context])

  return (<div className='deck-builder-popout'>
    <button className='copy-deck' onClick={copyDeckListAsJS}>Copy Deck List</button>
    <p className='deck-name'>{deck.deckName}</p>
    <DeckCardList cardList={deck.cardList} />
  </div>)

}

export default DeckBuilderPopout;
