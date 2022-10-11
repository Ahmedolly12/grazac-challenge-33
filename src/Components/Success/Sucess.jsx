import React, { useState } from 'react';
import './Sucess.css'
import Stepper3 from '../../images/Stepper3.png'
import Sucessicon from '../../images/SuccessIcon.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Sucess = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <div>
        <Button className='btun'variant="primary" onClick={handleShow}>
            Confirm
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
                <img src={Stepper3}/>
            </div>
            
         
            <div className="sucess">
                <img src={Sucessicon}/>
                <h6> Success </h6>
            </div>
            
               

        </Modal.Body>
        <Modal.Footer>
         
          <Button onClick={handleClose}  className='goto' variant="primary">Complete</Button>
        </Modal.Footer>
      </Modal>
    </div>

    </div>
  )
}

export default Sucess