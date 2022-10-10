import React from 'react'
import "./Nav.css"
import logo from "../../images/logo.png";
import close from "../../images/close.PNG";
import menu from "../../images/menu.PNG";
import { useState } from 'react';

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const handleMe = () => setToggle(!toggle);
  return (
    <div>
        <div className="nav-container">
            <div className="logo"><img className='logo'src= {logo} width='%'/> 
            <h3>E-Comm </h3></div>
            <div className="product">
                <ul>
                    <li className="links"><a href=""><span>HOME</span></a></li>
                    <li className="links"><a href="">BAGS</a></li>
                    <li className="links"><a href="">SNEAKERS</a></li>
                    <li className="links"><a href="">BELT</a></li>
                    <li className="links"><a href="">CONTACT</a></li>
                    <div id="menu-btn" onClick={handleMe}>
                        { toggle ? <img class="close" src={close}/> :<img src={menu} id="menu" />}
                    </div>
                </ul>
                
                <ul className={toggle ? "myNav" : "none"}>
                    <li><a href="./">HOME</a></li>
                    <li><a href="./">BAGS</a></li>
                    <li><a href="./">SNEAKERS</a></li>
                    <li><a href="./">BELT</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li><a href="">CART</a></li>
                </ul>
            </div>
        </div>
        <div className="nike-container">
            <p><span>Home</span> / <span>Hotdeal</span> / Nike Airmax 270 React</p>
        </div>
    </div>
  )
}

export default Nav