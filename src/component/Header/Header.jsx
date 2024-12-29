/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css';
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className='h-wrapper'>
      <div className="flexCenter padding innerWidth h-container">
        <img src="./img/logo.png" alt="logo" width={100} />
        
        <div className={`h-menu ${menuOpen ? 'active' : ''}`}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
      
      <div className='menu-icon' onClick={toggleMenu}>
        <TiThMenu size={30} color='white' />
      </div>
    </section>
  );
}

export default Header;