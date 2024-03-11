import React from 'react'
import { Navigate, Routes,Route } from 'react-router-dom'
import Home from "../Pages/Home.jsx"
import About from "../Pages/About.jsx"
import Pricing from "../Pages/Pricing.jsx"
import Service from "../Pages/Services.jsx"
import Servicedetails from '../Pages/Servicedetails.jsx'


const Routs = () => {
  return (
<Routes>
    <Route  path="/"  element={ <Navigate  to="/home"  />}   />
    <Route  path="/home"   element={ <Home />}   />
    <Route  path="/service"   element={ <Service />}   />
    <Route  path="/service/:id"   element={ <Servicedetails />}   />
    <Route  path="/pricing"   element={ <Pricing />}   />
    <Route  path="/about"   element={ <About/>}   />
</Routes>
  )
}

export default Routs