import React from 'react'
import { useParams } from 'react-router-dom'

import  "../Data/servicedata"
import servicedata from '../Data/servicedata'

const Servicedetails = () => {

const { id } = useParams()

const item =servicedata.find(item => item.id===id)

if (!item) {
  return <div>No Information found with ID: {id}</div>;
}

const {name ,text,img} = item

  return (  <>
    <section  className="serveicedetails"  id="servicedetails">

        <div className="servicedetails__wrapper">
        <img src={img} alt="" />
          <h1>{name}</h1>
          <p>{text}</p>
        </div>

</section>
  </>
  
  )
}

export default Servicedetails