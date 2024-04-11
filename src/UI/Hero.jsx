import React from 'react'

import Heropics from "../img/hero-img.svg"

import "../Styles/Hero.css"

const Hero = () => {
  return (
    <section className="hero" id="hero"> 

    <div className="hero__wrapper"  >

      <div className="hero__text" >
     <h1   data-aos="fade-right" 
data-aos-easing="ease-in-sine" data-aos-delay="20">Your Lightning Fast Delivery Partner.</h1>

     <p   data-aos="fade-down" 
 data-aos-delay="30">
     Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam.
      eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel
       reprehenderit
     </p>

     <div className="search" data-aos="fade-up" 
 data-aos-delay="30">
      <h2>ZIP code or CitY</h2>

      <button className="search__btn">Search</button>
     </div>

      </div>

      <div className="hero__pics"   data-aos="fade-left" 
 data-aos-delay="40">
        <img src={Heropics} alt="" />

      </div>

    </div>
 
     </section>
  )
}

export default Hero