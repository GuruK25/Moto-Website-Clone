import React from 'react'
import CarImage from '../../assets/CarImage1.jpg'
import './CarImage1.css'

const CarImage1 = () => {
  return (
    <div className='carImage-container'>
        <img src={CarImage} alt="" id='image1'/>
    </div>
  )
}

export default CarImage1