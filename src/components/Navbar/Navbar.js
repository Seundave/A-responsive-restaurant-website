import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import './Navbar.css';
import logo from '../../assets/gericht.png';

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className='navbar'>
        <div className="navbar_logo">
            <img src={logo} alt="navbar_logo"/>
        </div>
        <ul className='navbar_links'>
            <li className='opensans'><a href="#home">Home</a></li>
            <li className='opensans'><a href="#about">About</a></li>
            <li className='opensans'><a href="#menu">Menu</a></li>
            <li className='opensans'><a href="#awards">Awards</a></li>
            <li className='opensans'><a href="#contact">Contact</a></li>
            
        </ul>

      <div className="navbar_login">
        <a href="#login"> Log In / Register</a>
        <div/>
        <a href="/"> Book Table </a>
      </div>

      <div className='navbar_smallscreen'>
        <GiHamburgerMenu cursor="pointer" color="#fff" fontSize={27}  onclick={()=>setToggleMenu(true)}/>
        {
        toggleMenu && (
        <div className="smallscreen-overlay">
          <MdOutlineRestaurantMenu  cursor="pointer" fontSize={27} className="overlay-close" onclick={()=>setToggleMenu(false)}/>
          <ul className='smallscreen-links'>
            <li className='opensans'><a href="#home">Home</a></li>
            <li className='opensans'><a href="#about">About</a></li>
            <li className='opensans'><a href="#menu">Menu</a></li>
            <li className='opensans'><a href="#awards">Awards</a></li>
            <li className='opensans'><a href="#contact">Contact</a></li>
            
        </ul>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Navbar