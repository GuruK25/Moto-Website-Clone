import React from 'react'
import Sec4Card from './Sec4Card'
import './CardCont4.css'

const CardCont4 = () => {
  return (
    <div className='Card-container-S4'>
        <Sec4Card topic='Who We are' desc='Discover the team behind Spirit Motor Club' />
        <Sec4Card   topic='Our Events' desc='Find out more about our upcoming motoring events' />
        <Sec4Card topic='Latest News' desc='Check Out The Latest Spirit and Motoring News'/>
    </div>
  )
}

export default CardCont4