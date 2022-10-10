import React from 'react'
import './Shoecard.css'

const Shoecard = ({image, heading, star, prices}) => {
  return (
    <div>
        <div className='container'>
        <img src={image} alt=""/>
        <h4> {heading}</h4>
        <img src={star} alt=''/>
        <p><span>{prices}</span><small> $534,33</small><small className="off"> 24% Off</small></p>
        </div>
    </div>
  )
}

export default Shoecard