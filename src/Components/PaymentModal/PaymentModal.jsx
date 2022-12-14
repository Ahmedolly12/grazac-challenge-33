import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Creditcard from "../../Components/Creditcards/Creditcard"
import Stepper2 from "../../images/Stepper2.png"
import Sucess from '../Success/Sucess';
// // import Group from "../../images/Group.png"
// // import paypal from "../../images/Paypallogo.png"
// // import banki from "../../images/bankicon.png"
//    import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';



const PaymentModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   return (
     <div>
        <Button className='btun'variant="primary" onClick={handleShow}>
        Go to Payment
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
                <img src={Stepper2}/>
            </div>
            
                <Creditcard/>
               

        </Modal.Body>
        <Modal.Footer>
         
          <Button className='goto' variant="primary">
            
            <Sucess/>
          
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PaymentModal