import React from 'react'
import About from './components/About/About';
import Chef from './components/Chef/Chef';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SpecialMenu from './components/SpecialMenu/SpecialMenu';




import "./style.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <SpecialMenu/>
      <Chef/>
      
    </div>
  )
}

export default App
