import React from 'react'
import './Contact.css';
import phone from '../../images/phone.png'


const Contact = () => {
  return (
    <div>
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
            <div className="form">
                <form>
                     <label for="Fullname">Fullname</label><br></br>
                     <input className="doe" type='text' placeholder='James Doe'></input><br></br>
                     <br></br>
                     <label for="Email">Email</label><br></br>
                     <input type='email'className="doe" placeholder='jamesdoe@gmail.com'></input><br></br>
                     <br></br>
                     <label for="Message">Message</label><br></br>
                     <br></br>
                      <textarea  rows="4" cols="50" placeholder='Type your message'></textarea>
                </form>
            </div>
        </div>
        <div className="serach-container">
            <input className='long' type="text" placeholder="Search Query..."/>
            <input className='srch'type="submit" value="Search"/>
        </div>
        
    </div>
  )
}

export default Contact