import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
// import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import {HiHome} from 'react-icons/hi';
import {FcAbout} from 'react-icons/fc';
import {MdFastfood} from 'react-icons/md';
import {CgAwards} from 'react-icons/cg';
import {IoMdContacts} from 'react-icons/io';
// import {Link} from 'react-router-dom';
// import AiOutlineClose from 'react-icons/ai'
import './Navbar.css';
import logo from '../../assets/gericht.png';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => setToggleMenu(!toggleMenu)
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
        <GiHamburgerMenu cursor="pointer" color="#fff" fontSize={27}  onClick={showMenu}/>
        {
        toggleMenu && (
        <div className="smallscreen-overlay" onClick={showMenu} >
          <AiOutlineClose  cursor="pointer" fontSize={27} className="overlay-close" onclick={()=>setToggleMenu(false)}/>
          <ul className='smallscreen-links'>
            <li className='opensans'><HiHome/><a href="#home">Home</a></li>
            <li className='opensans'><FcAbout/><a href="#about">About</a></li>
            <li className='opensans'><MdFastfood/><a href="#menu">Menu</a></li>
            <li className='opensans'><CgAwards/><a href="#awards">Awards</a></li>
            <li className='opensans'><IoMdContacts/><a href="#contact">Contact</a></li>
            
        </ul>
        </div>
        )}
        
      </div>

      {/* <div className="navbar">
        <GiHamburgerMenu cursor="pointer" color="#fff" fontSize={27}  className="menu-bars" onClick={showMenu}/>
      </div>

      <nav className={smallscreen ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to="#" className="menu-bars">
              <MdOutlineRestaurantMenu/>
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  )
}

export default Navbar