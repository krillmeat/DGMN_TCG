import React,{ useContext } from 'react';
import {AppContext} from '../../../app';

const CARD_SIZES = ['xs','s','m','l','xl','xxl','xxxl']

const CardSizer = () => {

const [context,setContext] = useContext(AppContext);

const setCardSize = ({target}) => {
  setContext({
    ...context,
    cardSize: CARD_SIZES[target.value]
  })
}

  return (<div className='card-sizer'>
    <label htmlFor='card-size'>Card Size</label>
    <input type='range' name='card-size' min='0' max='6' defaultValue={CARD_SIZES.indexOf(context.cardSize)} onChange={setCardSize}/>
  </div>)
}

export default CardSizer;
