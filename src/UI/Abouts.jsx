import React from 'react'


import "../Styles/About.css"

import about from "../img/about.jpg"

const Abouts = () => {

    return (
        <section  className="about" id="about">
        
        <div className="about__header">
        <h1>About Us</h1>
            </div>
        
            <div className="about__wrapper">

                <div className="about__text">

                    <h1  data-aos="zoom-in-down" 
 data-aos-delay="100">Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. 
                        Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.</h1>
        
        <div className="about__box" data-aos="zoom-in-down" 
 data-aos-delay="150">
        
        <i class="ri-hotspot-fill"></i>
        
            <div  >
                <h2>Ullamco laboris nisi ut aliquip consequat</h2>
                <p>Ullamco laboris nisi ut aliquip consequat
        Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
        
        
            </div>
        
        </div>
        
        <div className="about__box"  data-aos="zoom-in-down" 
 data-aos-delay="200">
        
        <i class="ri-hotspot-fill"></i>
        
            <div>
                <h2>Ullamco laboris nisi ut aliquip consequat</h2>
                <p>Ullamco laboris nisi ut aliquip consequat
        Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
        
        
            </div>
        
        </div>
        
        <div className="about__box" data-aos="zoom-in-down" 
 data-aos-delay="300">
        
        <i class="ri-hotspot-fill"></i>
        
            <div>
                <h2>Ullamco laboris nisi ut aliquip consequat</h2>
                <p>Ullamco laboris nisi ut aliquip consequat
        Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
        
        
            </div>
        
        </div>
        
        
        
                </div>
        
                <div className="about__pics"  data-aos="zoom-in-up" 
 data-aos-delay="400">
                    <img src={about} alt="" />
                </div>
        
            </div>
        </section>
          )
  
}

export default Abouts