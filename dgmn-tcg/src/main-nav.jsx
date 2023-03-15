import React from 'react';
import Logo from './images/logo.svg';

const MainNav = () => {
  return (<nav className='main'>
    <img src={Logo}/>
    <button>
      <div className='rect'></div><div className='rect'></div><div className='rect'></div>
    </button>
  </nav>)
}

export default MainNav;
