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
  const [navbar, setNabvar] = useState(false);
  

  const showMenu = () => setToggleMenu(!toggleMenu)

  const changeBackground =() =>{
    if(window.scrollY >=1){
      setNabvar(true)
    }else{
      setNabvar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
        <div className={navbar ? 'navbar_logo active' : 'navbar_logo'}>
            <h1 src={logo} alt="navbar_logo"> SEUNDAVE</h1>
        </div>
        <ul className={navbar ? 'navbar_links active' : 'navbar_links'}>
            <li className='opensans'><a href="#home">Home</a></li>
            <li className='opensans'><a href="#about">About</a></li>
            <li className='opensans'><a href="#menu">Menu</a></li>
            <li className='opensans'><a href="#gallery">Gallery</a></li>
            <li className='opensans'><a href="#contact">Contact</a></li>
            
        </ul>

      <div className={navbar ? 'navbar_login active' : 'navbar_login'}>
        <a href="#login"> Log In / Register</a>
        <div/>
        <a href="/"> Book Table </a>
      </div>

      <div className={navbar ? 'navbar_smallscreen active' : 'navbar_smallscreen'}>
        <GiHamburgerMenu cursor="pointer" color="#fff" fontSize={27}  onClick={showMenu} className="hamburger"/>
        {
        toggleMenu && (
        <div className="smallscreen-overlay">
          <AiOutlineClose color="#fff" cursor="pointer" fontSize={27} className="overlay-close" onClick={showMenu}/>
          <ul className='smallscreen-links' onClick={showMenu}>
            <li className='opensans'><HiHome/><a href="#home">Home</a></li>
            <li className='opensans'><FcAbout/><a href="#about">About</a></li>
            <li className='opensans'><MdFastfood/><a href="#menu">Menu</a></li>
            <li className='opensans'><CgAwards/><a href="#gallery">Gallery</a></li>
            <li className='opensans'><IoMdContacts/><a href="#contact">Contact</a></li>
            
        </ul>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Navbar