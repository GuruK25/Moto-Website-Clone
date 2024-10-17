import React from 'react'
import './Sec3.css'
import EventCard from './eventCard'
import EventListing from './EventListing'
import ThreeCard from './ThreeCard'

const Sec3 = () => {
  return (
    <div className='Sec3-container'>
        <EventListing/>
        <ThreeCard/>
    </div>
  )
}

export default Sec3