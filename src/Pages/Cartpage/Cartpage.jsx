import React, { useState} from 'react'
import "./Cartpage.css"
import Modal from '../../Components/Modal/Modal'
import x from '../../images/x.png'
import tablenike from "../../images/tablenike.png"
import tablenike2 from "../../images/tablenike2.png"
import table from "../../images/table.PNG"

const Cartpage = () => {
    const [quantity, setQuantity]= useState(1);
    const [value, setValue]= useState(1);

  const handleDecrement=()=>{
    if (quantity > 1){
      setQuantity(prevCount=> prevCount-1);
    }
    
  }
  const handleIncrement=()=>{
    if (quantity < 10){
      setQuantity(prevCount=> prevCount+1);
    }
    
  }
  const Decrement=()=>{
    if (value > 1){
      setValue(prevCount=> prevCount-1);
    }
    
  }
  const Increment=()=>{
    if (value < 10){
      setValue(prevCount=> prevCount+1);
    }
    
  }
  return (
    <div>
        <table>
            <tr>
                <th></th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
            </tr>
            <tr>
                <td><img className='x'src={x} alt=''/></td>
                <td className="text text1">
                    <img src={tablenike}alt=''/>
                    <p className='airmax'>Nike Airmax 270 react </p>
                </td>
                <td className="text">$998</td>
                <td>
                    <div className="input-group">
                        <button type='button' onClick={handleDecrement}className='input-group-text'>-</button>
                        <div className='form-control text-center'>{quantity}</div>
                        <button type='button'onClick={handleIncrement} className='input-group-text'>+</button>
                    </div>
                </td>
                <td className="text">$499</td>
            </tr>
            <tr>
                <td><img className='x' src={x} alt=''/></td>
                 <td className="text text1">
                    <img src={tablenike2}alt=''/>
                    <p className='airmax'>Nike Airmax 270 react </p>
                </td>
                 <td className="text">$998</td>
                 <td>
                    <div className="input-group">
                        <button type='button' onClick={Decrement}className='input-group-text'>-</button>
                        <div className='form-control text-center'>{quantity}</div>
                        <button type='button'onClick={Increment} className='input-group-text'>+</button>
                    </div>
                 </td>
                 <td className="text">$499</td>
            </tr>
            
        </table>
        <div className="tableimage">
            <img src={table}/>
          </div>
        <div className="checkout">
          <div className="vouch">
              <input type="text" placeholder='Voucher Code'/>
              <input className='redeem'type ='submit' value='Redeem'/>
          </div>
              
          <div className="para-table">
                <div className="cont">
                  <p> Subtotal</p>
                  <p>$998</p>
                </div>
                <div className="cont">
                  <p> Shipping</p>
                  <p>$20</p>
                </div>
                <div className="cont">
                  <p> Coupon</p>
                  <p>No</p>
                </div>
                <div className="cont">
                  <p  className='biggy'> Total</p>
                  <p className='biggy'>$ 1018</p>
                </div>
              <button className='medbtn'><Modal/></button>
              </div>
           
        </div>
      
    </div>
  )
}

export default Cartpage