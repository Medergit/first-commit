import React from 'react';
import logo from '../img/turbopack.svg';
import './Header.css';

function Header() {
  return (
    <div>
      <div className='head'>
        <img src={logo} alt='no'></img>
      </div>
    </div>
  );
}

export default Header;
