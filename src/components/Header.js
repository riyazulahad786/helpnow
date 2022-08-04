import React from 'react'
import {useEffect , useState} from 'react'
import {Link , useLocation} from "react-router-dom";
import './Header.css'
export const Header = () => {
    const [activeHeader, setActiveHeader] = ('Home')
  return (

    
    <div className='header'>
    <h1 className='logo-side'>HelpNow</h1>

   <div className='header-right'>
  
      <p  >Home</p>
      <p  >About</p>
      <p  >Service</p>
   
  
 
   </div>

   


    </div>
    
  )
}
