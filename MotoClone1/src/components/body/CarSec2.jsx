import React from 'react'
import './CarSec2.css'
import carImage2 from '../../assets/carImage2.jpg'

const CarSec2 = () => {
  return (
    <div className='carSec2-container'>
        <img src={carImage2} alt="" id='car2'/>
        <div id='p-container'>
            <h3 id='car-h3'>Curated Motoring Events</h3>
            <br/>
            <p id='car-p1'>
            Whether you’re a Porsche owner (we’re starting with Porsche events, but plan to expand…), a car aficionado, or just someone who appreciates fine automobiles, this event is for you. Come together with like-minded individuals, share your passion for cars, swap stories, and make new friends whilst helping to raise money for mental health charities and ensure you are focused on positivity!
            </p>
            <br />
            <p id='car-p2'>
            We also love nothing more than seeing families, dogs (provided they are well-behaved and are ok with a motoring environment) etc at our events, they are inclusive and we really do want to create something very special, welcoming and something you really feel part of.
            </p>
        </div>
        
    </div>
  )
}

export default CarSec2