import React from 'react'
import Hero from '../UI/Hero'
import Pricings from '../UI/Pricings'
import Services from '../UI/Services'
import Cta from '../UI/Cta'
import Abouts from '../UI/Abouts'
import Testimonial from '../UI/Testimonial'

const Home = () => {
  return (
   <section className="home" id="home"> 
<Hero    />

<Abouts  />
<Services />
<Cta  />
<Pricings  />
<Testimonial  />
   </section>
  )
}

export default Home