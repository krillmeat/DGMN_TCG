import React, {useContext} from 'react';
import CardBase from '../images/card-base/card-base.jsx.old';
import './card-popup.css';
import { AppContext } from '../../app';

const CardPopup = () => {
  const [context,setContext] = useContext(AppContext);

  const closePopup = () => { setContext({...context,isPopupOpen: false, popupCard: {set:'',cardNo:0}}) }

  return (<div className='card-popup'>
    <div className='click-off-close' onClick={closePopup}></div>
    <CardBase set={context.popupCard.set} cardNo={context.popupCard.cardNo} />
  </div>)
}

export default CardPopup;
