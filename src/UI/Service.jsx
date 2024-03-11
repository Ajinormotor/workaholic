import React from 'react'

import "../Styles/Service.css"
import "../Data/servicedata"
import servicedata from '../Data/servicedata'
import { NavLink } from 'react-router-dom'


const Service = () => {
  return   (
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
        <div className="service__box">
          <img src={img} alt="" />
          <h1> <NavLink to={`/service/${id}`}>{name}</NavLink></h1>
          <p>{text}</p>
        </div>
        </div>
        )
        }
    
    
    
export default Service