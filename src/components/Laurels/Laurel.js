import React from 'react'
import './Laurels.css'
import './LaurelData.js'
import logo from '../../assets/logo.png'
import spoon from '../../assets/spoon.png'
import laurels from '../../assets/laurels.png'
import { LaurelData } from './LaurelData.js'

function Laurel() {
  return (
    <div className='Laurel'>
        <div className="laurel-l">
           <img src={logo} alt="logo" className='logo'/> 
           <p className='laurel-title'>Awards & recognition</p>
           <img src={spoon} alt="spoon" className='spoon'/>
           <h1 className="laurel-header">Our Laurels</h1>
            <div className='awards'>
              <div>
              {LaurelData.map((award)=>(
                <div className='award-image'>
                   <img src={award.image} className="award01"/>
                   {/* <p>{award.title}</p>
                  <p>{award.description}</p>    */}
                </div>
                ))}
              </div>

              <div>
                {LaurelData.map((award)=>(
                <div className='content'>
                  <p>{award.title}</p>
                  <p>{award.description}</p>
                      
                    </div>
                ))}
              </div>
            </div>

        </div>

        <div className="laurel-r">
            <img src={laurels} alt="laurels" className='laurel-image'/>
        </div>
    </div>
  )
}




export default Laurel




// {MenuData.map((wine, index)=>(
//     <div className='content'>
//         <MenuItem key={wine.name + index} name={wine.name} price={wine.price} tags={wine.tags}/>
//       {/* <div/> */}
//         {/* <p>{wine.size}</p> */}
//     </div>
// ))}