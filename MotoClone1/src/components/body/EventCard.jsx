import React from 'react'
import './EventCard.css'
import teamImage from '../../assets/teamImage.jpg'

const EventCard = (props) => {
  return (
    <div className='card-container'>
        <img src={teamImage} alt="" id='teamimage'/>

        <div id='card-p-container'>
          <p id='card-p1' > {props.date} </p>
          <p id='card-p2' > {props.name} </p>
          <p id='card-p3' > {props.location} </p>
          <p id='card-p4' > {props.disc} </p>
        </div>
        
        <button id='grab-ticket'> Grab ticket </button>
        
    </div>
  )
}

export default EventCard