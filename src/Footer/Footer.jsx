import React from 'react'

import "../Footer/Footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
<section  className="footer" id="footer">
  <div className="footer__wrapper">


    <div className="footer__logo">
      <h1>Wakaholic<i class="ri-walk-line"></i></h1>
      <p>
      Cras fermentum odio eu feugiat lide par naso tierra. 
      Justo eget nada terra videa magna derita valies darta
       donna mare fermentum iaculis eu non diam phasellus.

       <div className="socials">
        <ul  className="socials__menu">
        <li><i class="ri-facebook-circle-line"></i></li>
            <li><i class="ri-linkedin-fill"></i></li>
            <li><i class="ri-twitter-line"></i></li>
        </ul>
        </div>  
      </p>

      <ul>
        <li><NavLink  to="#"></NavLink></li>
      </ul>
    </div>

    <div className="footer__box">
      <h2>Useful Links</h2>
   
      <ul className="footer__menu">
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Home</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> About Us</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Services</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Terms of service</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Privacy Policy</NavLink></li>
      </ul>
    
    </div>

    <div className="footer__box">
      <h2>Our Services</h2>
      <ul  className="footer__menu">
      
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Web Design</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Web Development</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Product Management</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Product Management</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Marketing</NavLink></li>
        <li><NavLink  to="#"><i class="ri-arrow-right-fill"></i> Graphic Design</NavLink></li>
      </ul>
      
    </div>

    <div className="footer__box">
      <h2>Contact Us</h2>
    
      <ul className="footer__menu">
        <li><i class="ri-gps-fill"></i> A108 Adam Street <br  /> New York, NY 535022 <br /> United States</li>
        <li><NavLink  to="#"><i class="ri-phone-line"></i> +1 5589 55488 55</NavLink></li>
        <li><NavLink  to="#"><i class="ri-mail-line"></i>  info@example.com</NavLink></li>
        
      </ul>
     
    </div>


  </div>

  <p><i class="ri-copyright-line"></i> Copyrights <bold>Logis.</bold> All Rights Reserved Wakaholic<i class="ri-walk-line"></i></p>
</section>
  )
}

export default Footer