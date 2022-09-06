import React from 'react'
import spoon from '../../assets/spoon.png'
import facebook from '../../assets/Vector.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import logo from '../../assets/Gerícht.png';
import './Contact.css'

function Contact() {
  return (
    <div className='Contact'>
        <div className="newsletter">
          <div className="newsletter-info">
            <p className='newsleter-heading'>Newsletter</p>
            <img src={spoon} alt="spoon" className='spoon'/>
            <h1 className='newsletter-text'>Subscribe to Our Newsletter</h1>
            <p className='newsletter-update'>And never miss latest Updates!</p>
            <form>
              <input type="email" placeholder='Email Address'/>
              <button className='subscribe'>Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="contact-us">
          <div className="contact-company">
            <h2> Contact Us</h2>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>

          <div className="social-media-contact">
            <img src={logo} alt="logo" className='Gericht'/>
            <p className='contact-quote'>"The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src={spoon} alt="spoon" className='spoon'/>
            <div className="social-media-icons">
              <img src={facebook} alt="facebook" className='facebook'/>
              <img src={twitter} alt="twitter" className='twitter'/>
              <img src={instagram} alt="instagram" className='instagram'/>
              
            </div>
          </div>

          <div className="working-hours">
            <h2>Working Hours</h2>
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
          </div>
        </div>
    </div>
  )
}

export default Contact