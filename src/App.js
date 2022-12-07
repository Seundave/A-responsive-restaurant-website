import React from 'react'
import About from './components/About/About';
import Chef from './components/Chef/Chef';
import Findus from './components/FindUs/Findus';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Photo from './components/Photo/Photo';
import SpecialMenu from './components/SpecialMenu/SpecialMenu';
import Contact from './components/Contact/Contact';




import "./style.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Photo/>
      <Findus/>
      <Contact/>
    </div>
  )
}

export default App
