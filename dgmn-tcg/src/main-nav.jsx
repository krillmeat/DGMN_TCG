import React, {useContext} from 'react';
import { AppContext } from './app';
import Logo from './images/logo.svg';

const BUTTON_SIZES = ['S'];

const MainNav = () => {
  const [context,setContext] = useContext(AppContext);

  const toggleDeckBuilderMode = () => {
    let isActive = context.isDeckBuilderActive;
    setContext({
      ...context,
      isDeckBuilderActive: !isActive
    })
  }

  const switchView = newView => {
    setContext({
      ...context,
      view: newView
    })
  }

  return (<nav className='main'>
    <img src={Logo}/>
    {!BUTTON_SIZES.includes(context.windowSize) ? 
      <ul>
        <li className={context.view === 'database' ? 'active' : ''}>
          <button onClick={()=>{switchView('database')}}>Card Database</button>
        </li>
        <li className={context.view === 'deck' ? 'active' : ''}>
          <button onClick={()=>{toggleDeckBuilderMode()}}>Deck Builder</button>
        </li>
        <li className={context.view === 'print' ? 'active' : ''}>
          <button onClick={()=>{switchView('print')}}>Proxy Print</button>
        </li>
      </ul> : 
      <button className='hamb'>
        <div className='rect'></div><div className='rect'></div><div className='rect'></div>
      </button>}
  </nav>)
}

export default MainNav;
