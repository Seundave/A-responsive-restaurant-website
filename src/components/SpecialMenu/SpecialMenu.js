import React from 'react'
import {MenuData} from './MenuData.js'
import {Cocktails} from './MenuData.js'

import './SpecialMenu.css'
import spoon from '../../assets/spoon.png'
import menu from '../../assets/menu.png'
import MenuItem from './MenuItem.js'

function SpecialMenu() {
  return (
    <div className='SpecialMenu' id="menu">
        <div className='SpecialMenu-title'>
            <h1 className='menu_title'>Menu that fits you palatte</h1>
            <img src={spoon} alt="spoon" className='spoon'/>
            <h1 className='Menu_header'>Today’s Special</h1>
        </div>

        <div className='menu_section'>
          
            <div className='menu1'>
                <div className='menu_header'>
                    <h1>Wine & Beer</h1>
                </div>
                {MenuData.map((wine, index)=>(
                    <div className='content'>
                        <MenuItem key={wine.name + index} name={wine.name} price={wine.price} tags={wine.tags}/>
                    </div>
                ))}
            </div>
            
              
              
            

          <div className="menu_picture">
            <img src={menu} alt="menu" className='menu'/>
          </div> 

          <div className="menu2">
            <div className='menu_header'>
              <h1>Cocktails</h1>
            </div>
            {Cocktails.map((Cocktails, index)=>(
            <div className='content'>
              <MenuItem key={Cocktails.name + index}  name={Cocktails.name} price={Cocktails.price} tags={Cocktails.tags}/>
            </div>
                  ))}
            </div> 
        </div>
        <div className='btn_view-more'>
          <button className='view-more'>View More</button>
        </div>
        
    </div>
  )
}

export default SpecialMenu