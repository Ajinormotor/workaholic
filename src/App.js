
import { useEffect } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Routs from './Routs/Routs';

import Aos from 'aos';

function App() {

useEffect(()=>{
  Aos.init()
},[])

  return (
   <>

  <Header  />
  <Routs   />
  <Footer  />

   
   </>
  );
}

export default App;
