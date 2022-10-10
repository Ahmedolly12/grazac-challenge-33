import React from 'react'
import './Footer.css'
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png"
import Western from "../../images/Western-union.png"
import master from "../../images/mastercard.png"
import paypal from  "../../images/Paypal.png"
import visa from  "../../images/visa.png"
import ecomm from  "../../images/ecomm.PNG"



const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer-content">
                <div className="ecomm">
                    <div className="icon">
                        <img className='logo'src= {ecomm}/> 
                    </div>
                        <p className='sub-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                </div>
                <div className="followus">
                    <p className="heading">Follow Us</p>
                    <p className='sub-text'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <div className="social">
                        <img src={facebook}/>
                        <img  className="twitter"src={twitter}/>
                    </div>
                </div>
                <div className="contactus">
                    <p className="heading"> Contact Us</p>
                    <p className='sub-text'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                </div>
            </div>
            <div className="footer-info">
                <div className="info">
                    <p className="headings">Information</p>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Information</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Consitions</a></li>
                     
                </div>
                <div className="service">
                    <p className="headings">Service</p>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Information</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Consitions</a></li>
                </div>
                <div className="myaccount">
                    <p className="headings">My Account</p>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Information</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Consitions</a></li>
                </div>
            </div>
            <hr />
            <div className="card-details">
                <p className='www'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                <div className="cardd">
                    <img src={Western}/>
                    <img src={master}/>
                    <img src={paypal}/>
                    <img src={visa}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer