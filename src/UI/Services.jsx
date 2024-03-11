import React from 'react'

import "../Styles/Service.css"

import servicedata from '../Data/servicedata'

import { NavLink } from 'react-router-dom'



const Services = () => {
  return (
   <section className="service"  id="service">

<div className="service__header">
  <h1>Our Services</h1>
        </div>

    <div className="service__container">
      {
        servicedata.map((item,index) => (
          <ServiceItem item={item} key={index} />
        ))

      }

    </div>

   </section>
  )
}



const ServiceItem = ({item}) => {

  const {name, text, img, id} = item;
  
  return(
  
    <div className="service__wrapper">
      <div className="service__box" data-aos="zoom-in-left" 
 data-aos-delay="150">
        <img src={img} alt="" />
        <h1  data-aos="zoom-in-right" 
 data-aos-delay="200"> <NavLink to={`/service/${id}`}>{name}</NavLink></h1>
        <p data-aos="zoom-in-right" 
 data-aos-delay="300">{text}</p>
      </div>
      </div>
      )
      }
export default Services