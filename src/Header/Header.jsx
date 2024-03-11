import React, { useEffect, useRef, useState } from 'react'

import "../Header/Header.css"
import { NavLink } from 'react-router-dom'

const nav__Link =[
  {
    path: '/home',
    display: 'Home'
  },

  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/service',
    display: 'Services'
  },

  {
    path: '/pricing',
    display: 'Pricing'
  },
  
]

const Header = () => {
 

  const [click, setClick] = useState(false);
  const  handleClick = ()  => setClick(!click);

  const headerRef = useRef(null)

  useEffect(() => {
    const scrollHandler = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    };
  
    window.addEventListener('scroll', scrollHandler);
  
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  

  


  return (
    <section className="header" id="header"  ref={headerRef}  data-aos="fade-down-right" 
    data-aos-delay="100"> 


<div className="header__wrapper">


    
   <div className="logo">
    <h1  className="logo__text font-extrabold  text-blue-600">Wakaholic<i class="ri-walk-line"></i></h1>
   </div>

   <div className="harmburger"  onClick={handleClick}>
   { click?  (<i class="open ri-menu-2-line"></i>) :  (<i class="close ri-close-line"></i>) }
   </div>

   <div className={click? ("navigation"):("hidden")}>



    <ul  className="navlink__menu">
      {
        nav__Link.map(item=>(
          <li className="navlink__item"><NavLink   to={item.path}> {item.display}</NavLink></li>
        ))
      }
    </ul>

    <div className="navlink__bar">
    <button  className="smallnavlink__btn">Get a Quote</button>
   </div>

   </div>

   <div className="side__bar">
    <button  className="navlink__btn">Get a Quote</button>
   </div>

   </div>

     </section>
  )
}

export default Header