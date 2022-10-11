
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import "./Creditcard.css"

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className='Creditform'>
        	<input className='atm'
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <div className="cvv">
                <input className='atm'
                    type="tel"
                    name="expiry"
                    placeholder="Expiry"
                    onKeyUp={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                <input className='atm'
                    type="tel"
                    name="cvc"
                    placeholder="CVV"
                    onKeyUp={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
            </div>
            <input className='atm'
                type="text"
                name="name"
                placeholder="Holder Name"
                onKeyUp={this.handleInputChange}
                onFocus={this.handleInputFocus}
            />
             <p className='sav'><input type='checkbox'/>  Save this credit card</p>
            
        </form>
      </div>
    );
  }
}