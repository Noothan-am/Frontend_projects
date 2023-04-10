import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { GlobalContext } from './context';
const Navbar = () => {
  const { setSideBar, sideBar, menu, setSubMenu } = GlobalContext();
  const handleNavClick = () => {
    console.log('cll');
    setSideBar(!sideBar);
  }
  const handleEvent = () => {
    setSubMenu(!menu)
  }
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={handleNavClick}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={handleEvent}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleEvent}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleEvent}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
};

export default Navbar;
