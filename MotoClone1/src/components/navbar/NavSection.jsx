import React from 'react'
import './NavSection.css'
import Upto from './Upto'
import './Upto.css'
import MidSec from './MidSec'
import ThirdSec from './ThirdSec'


const NavSection = () => {
  return (
    <div className='navSection'>
        <Upto/> 
        <MidSec/>
        <ThirdSec/>
        
    </div>
  )
}

export default NavSection