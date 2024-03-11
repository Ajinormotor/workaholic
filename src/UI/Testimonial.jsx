import React from 'react'
import "../Styles/Testimonial.css"

import team1 from "../img/team/team-1.jpg"
import team2 from "../img/team/team-2.jpg"
import team3 from "../img/team/team-3.jpg"
import Slider from "react-slick";

const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        swipeToSlide: 1,
      };


  return (

    
  <section  className="testimonial" id="testimonial">

<div className="testimonial__header">
<h1>Testimonial</h1>
    </div>
  <div className="testimonial__wrapper">



<Slider {...settings}>



   
        <div className="testimonial__box">
            <img src={team1} alt="" />
            <h1>Matt Brandon</h1>
            <p>Entrepreneur</p>
        
<ul  className="testimonial__menu">
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
</ul>
                <h2> <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusantium facilis illo suscipit vero nulla fugit non, aut ab nesciunt aliquam!</i></h2>
</div>

<div className="testimonial__box">
            <img src={team2} alt="" />
            <h1>Jena Karlis</h1>
            <p>CEO</p>
        
            <ul  className="testimonial__menu">
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
</ul>

                <h2> <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusantium facilis illo suscipit vero nulla fugit non, aut ab nesciunt aliquam!</i></h2>
</div>

<div className="testimonial__box">
            <img src={team3} alt="" />
            <h1>Saul Goodman</h1>
            <p>STORE OWNER</p>

            <ul  className="testimonial__menu">
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-fill  testimonial__icon"></i></li>
<li><i class="ri-star-half-fill  testimonial__icon"></i></li>
</ul>

                <h2> <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusantium facilis illo suscipit vero nulla fugit non, aut ab nesciunt aliquam!</i></h2>
</div>

    </Slider>

   
    </div>
  </section>
  )
}

export default Testimonial