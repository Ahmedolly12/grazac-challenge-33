import React from 'react'
import './Contact.css';
import phone from '../../images/phone.png'
import Contactnav from '../../Components/Contactnav/Contactnav';
 import {Link} from 'react-router-dom'
 


const Contact = () => {

    // var forms = document.getElementsByTagName('form');
    // for (var i = 0; i < forms.length; i++) {
    //     forms[i].noValidate = true;
    //     forms[i].addEventListener('submit', function(event) {
    //         if (!event.target.checkValidity()) {
    //             event.preventDefault();
    //             alert("Please complete all field.");
    //         }
    //     }, false);
    // }
  return (
    <div>
        <Contactnav/>
        <div className="contact-container">
            <div className="contact">
            <img src={phone} alt=""/>
            <div className="contact-text">
                <h5>get in touch</h5>
                <div className="contact-add">
                    <p>contact@e-comm.ng</p>
                    <p>+234 4556 6665 34</p>
                    <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                    <div className="circle">

                    </div>
                </div>
            </div>
            </div>
            <form>
                <label for="Fullname">Fullname</label>
                <input className="doe" type='text' placeholder='James Doe' required="required"/><br></br>
                <label for="Email">Email</label>
                <input required type='email'className="doe" placeholder='jamesdoe@gmail.com'/> <br></br>
                <label for="Message">Message</label> 
                <textarea required  rows="4" cols="50" placeholder='Type your message'></textarea><br></br>
                <input className="snd"type="submit" value= "SEND MESSAGE"/>
                
            </form>
        </div>
        <div className="serach-container">
            <input className='long' type="text" placeholder="Search Query..."/>
            <input className='srch'type="submit" value="Search" required/>
        </div>
        
    </div>
  )
}

export default Contact