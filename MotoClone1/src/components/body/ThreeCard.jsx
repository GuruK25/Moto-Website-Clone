import React from 'react'
import './ThreeCard.css'
import EventCard from './eventCard'

const ThreeCard = () => {
  return (
    <div className='threeCard-container'>
        <EventCard date = "November 3, 2024"  name = "Spirit Sunday Social – Porsche Cars and Coffee 3/11/24" location = "Tiny Rebel, Chartist Drive, Rogerstone, Newport, South Wales, NP10 9FQ"  disc = "Whether you're a Porsche owner (we're starting with Porsche events, but plan to expand...), a…" />
        <EventCard date = "October 12, 2024"  name = "Spirit Super Social – Richard Hammond’s ‘Smallest Cog 12/10/24" location = "The Smallest Cog Fir Tree Lane Rotherwas Industrial Estate HR2 6LA"  disc = "Join us at Richard Hammond's 'The Smallest Cog', home of the television series on Discovery…"/>
        <EventCard date = "September 1, 2024"  name = "Spirit Sunday Social – Porsche Cars and Coffee 1/9/24" location = "TINY REBEL BREWERY, CHARTIST DRIVE, ROGERSTONE, UK, NP10 9FQ"  disc = "Welcome to ‘Sunday Spirit’, the monthly Porsche Cars and Coffee Social Meetup by Spirit Motor…"/>
    </div>
  )
}

export default ThreeCard