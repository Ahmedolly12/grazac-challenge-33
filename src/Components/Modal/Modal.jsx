import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import Stepper from "../../images/Stepper.png"
import Group from "../../images/Group.png"
import paypal from "../../images/Paypallogo.png"
import banki from "../../images/bankicon.png"
import PaymentModal from '../../Components/PaymentModal/PaymentModal'


 
 const Modals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   return (
     <div>
        <Button className='btun'variant="primary" onClick={handleShow}>
           Check out
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="make">
                <p className='pay'>Make Payment</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="step">
                <img src={Stepper}/>
            </div>
            <div className="payform">
                <div className="nam">
                <input className='modname'type="text" placeholder="First Name" />
                <input className='modname'type="text" placeholder="Last Name" />
                </div>
                <div className="nam">
                <input className='modname'type="email" placeholder="Email Address" />
                <input className='modname'type="text" placeholder="Address for Delivery" />
                </div>
                 <input className='modname' type="text" placeholder="Phone Number"/>
                <p className='slct'>Select Method Payment</p> 
                <div className="thh">
                    <p className='purp'><img src={Group}/> Credit Card Or Debit <input type='checkbox'name="check"/></p> 
                    <p className='purp'><img src={paypal}/> Paypal  <input type='checkbox'/></p>
                    <p className='purp'><img src={banki}/> Bank Transfer  <input type='checkbox' name="check"/></p>    
                </div>
               
            </div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button className='goto' variant="primary"><PaymentModal/></Button>
        </Modal.Footer>
      </Modal>
     </div>
   )
 }
 
 export default Modals