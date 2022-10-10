import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import nike2 from "../../images/nike2.png"
import nike7 from "../../images/nike7.PNG"
import nike8 from "../../images/nike8.PNG"
import star from "../../images/star.png"
import star2 from "../../images/star2.png"


function UncontrolledExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nike2}
          alt="First slide"
          
        />
        <Carousel.Caption>
           
        </Carousel.Caption>
        <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$499 <small className='price'>$599</small></p>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nike7}
          width='1%'
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
        <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$599 <small className='price'>$699</small></p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {nike8}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
         <div className="desc">
            <div className="star">
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/> 
          <img src={star}alt=""/>
          <img src={star2}alt=""/>
        </div>
        <p className='price'>$699 <small className='price'>$799</small></p>
        </div>
      </Carousel.Item>
    
    </Carousel>

  );
}

export default UncontrolledExample;