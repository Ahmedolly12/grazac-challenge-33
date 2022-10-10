import React from 'react'
import "./Header.css"
import profile from "../../images/profile.png";
import cart11 from "../../images/cart11.png";

const Header = () => {
  return (
    <div>
        <div className="header-container">
            <div className="select-left">
                <select name="lang" id="lang">
                    <option value="EN">EN</option>
                    <option value="FR">FR</option>
                    <option value="ES">ES</option>
                    <option value="CS">CS</option>
                </select>
                <select name="lang" id="lang">
                    <option value="volvo">USD</option>
                    <option value="saab">GBP</option>
                    <option value="mercedes">CHF</option>
                    <option value="audi">NGN</option>
                </select>
            </div>
            <div className="profile-right">
                <p className='profile'><img src={profile}alt=""/>My Profile</p>
                <img className='cart' src={cart11}alt=""/>
                <p className='top'>Items</p>
                <p className="search">$0.00<input type='search'/></p>
            </div>
        </div>
    </div>
  )
}

export default Header