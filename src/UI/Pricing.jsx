import React from 'react'

import "../Styles/Pricing.css"

const Pricing = () => {
  return (
    <section className="pricing"  id="pricing">

        <div className="pricing__header">
  <h1>Pricing</h1>
        </div>

        <div className="pricing__wrapper">

            <div className="pricing__box">
      <div className="pricing__top">
        <h1>Free Plan</h1>
        <p><i class="ri-money-dollar-circle-fill"></i>0<span  className="pricing__topspan">/month</span></p>
      </div>

      <div className="pricing__bottom">
          <ul>
            <li><i class="ri-money-dollar-circle-fill"></i> Quam adipiscing vitae proin</li>
            <li><i class="ri-money-dollar-circle-fill"></i> Nec feugiat nisl pretium</li>
            <li><i class="ri-money-dollar-circle-fill"></i> Nulla at volutpat diam uteera</li>
           
          </ul>

          <button  className="pricing__btn">Buy Now</button>

      </div>
            </div>

            <div className="pricing__box">
      <div className="pricing__top">
        <h1>Free Plan</h1>
        <p><i class="ri-money-dollar-circle-fill"></i>39<span className="pricing__topspan">/month</span></p>
      </div>

      <div className="pricing__bottom">
          <ul>
            <li><i class="ri-money-dollar-circle-fill"></i> Quam adipiscing vitae proin</li>
            <li><i class="ri-money-dollar-circle-fill"></i> Nec feugiat nisl pretium</li>
            <li><i class="ri-money-dollar-circle-fill"></i> Nulla at volutpat diam uteera</li>
           
          </ul>

          <button  className="pricing__btn">Buy Now</button>

      </div>
            </div>


            <div className="pricing__box">
      <div className="pricing__top">
        <h1>Free Plan</h1>
        <p><i class="ri-money-dollar-circle-fill"></i>59<span className="pricing__topspan">/month</span></p>
      </div>

      <div className="pricing__bottom">
          <ul>
            <li><i class="ri-money-dollar-circle-fill"></i> Quam adipiscing vitae proin</li>
            <li><i class="ri-money-dollar-circle-fill"></i> Nec feugiat nisl pretium</li>
            <li><i class="ri-money-dollar-circle-fill"></i> Nulla at volutpat diam uteera</li>
           
          </ul>

          <button  className="pricing__btn">Buy Now</button>

      </div>
            </div>


        </div>

    </section>
  )
}

export default Pricing