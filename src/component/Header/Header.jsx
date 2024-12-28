/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import { TiThMenu } from "react-icons/ti";

function Header() {
  return (
    <section className='h-wrapper'>
      <div className="flexCenter padding innerWidth h-container">

        <img src="./img/logo.png" alt="logo" width={100} />

        <div className="h-menu" >
          <a 
          href="">
            Residencies
          </a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Conactact</a>
          </button>
        </div>
      </div>
      <div className='menu-icon'>
      </div>
    </section>
  )
}

export default Header