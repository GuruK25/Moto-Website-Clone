import React from 'react'
import './Sec4Card.css'
import bikeImage from '../../assets/Sec4Image.jpg'

const Sec4Card = (props) => {
  return (
    <div className='Sec4Card'>
        <img src={bikeImage} alt="" id='bikeImage'/>
        <h2>{props.topic}</h2>
        <p>{props.desc}</p>
        <hr id='line' />
    </div>
  )
}

export default Sec4Card