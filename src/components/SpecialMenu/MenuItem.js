import React from 'react'
import './MenuItem.css'

function MenuItem({name, price, tags}) {
  return (
    <div className='menuitem'>
        <div className="menuitem-head">
            <div className="menuitem-name">
                <p className='name' style={{color:'#DCCA87'}}>{name}</p>
            </div>
            
            <div className="dash" />
            <div className="app__menuitem-price">
                 <p className="p__cormorant">{price}</p>
            </div>
        </div>

        <div className="app__menuitem-sub">
            <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
        </div>
    </div>
  )
}

export default MenuItem