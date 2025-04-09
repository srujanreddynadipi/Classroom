import React from 'react'
import logo from '../assets/images/brand_logo.png';


const NavBar = () => {
  return (
    <div>
      <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <ul>
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
          </ul>
          <button>login</button>
        </nav>
    </div>
  )
}

export default NavBar
