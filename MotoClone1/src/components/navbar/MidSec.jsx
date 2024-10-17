import React from 'react'
import SearchBar from './SearchBar'
import './MidSec.css'
import logo from '../../assets/motoclublogo.jpg'
import profileicon from '../../assets/profileicon.svg'
import shopicon from '../../assets/shopicon.svg'
import likeicon from '../../assets/likeicon.svg'

const MidSec = () => {
  return (
    <div className='MidSec-conatainer'>
        <SearchBar/>
        <img src={logo} alt="Logo" id='logo'/>
        <div id='icon-container'>
            <img src={profileicon} alt=""  id='profileIcon'/>
            <img src={likeicon} alt="" id='likeIcon'/>
            <img src={shopicon} alt="" id='shopIcon'/>
        </div>
    </div>
  )
}

export default MidSec