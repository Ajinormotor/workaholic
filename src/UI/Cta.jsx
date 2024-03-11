import React from 'react'

import "../Styles/Cta.css"


const Cta = () => {
  return (
    <section className="cta" id="cta">

<div className="cta__wrapper">
    <h1>Call To Action</h1>
    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <button  className="cta__btn">Call To Action</button>
</div>

<div className="cta__wrapper"  data-aos="zoom-in" 
 data-aos-delay="15000">
    <h1 >Call To Action</h1>
    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <button  className="cta__btn">Call To Action</button>
</div>


    </section>
  )
}

export default Cta