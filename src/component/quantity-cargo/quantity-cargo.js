import React, {Component} from 'react';
import  './quantity-cargo.css'

class QuantityCargo extends Component {
constructor (props) {
  super(props);
  this.state = {
    quantity: 1
  }
  this.plusCargo = this.plusCargo.bind(this);
  this.minusCargo = this.minusCargo.bind(this);
}
plusCargo(){
  this.setState( state => ({
    quantity: ++this.state.quantity
  })
  )
  this.props.updateQuantity(this.state.quantity + 1);
}

minusCargo(){
if (this.state.quantity > 1) {
  this.setState( state => ({
    quantity: --this.state.quantity
  })
  )
  this.props.updateQuantity(this.state.quantity - 1);
}
  
}

render () {
  const {quantity} = this.state;
return (
  <div className = 'quantity-wrapper'>
    <span className = 'quantity__title'>Количество</span>
    <div className = 'quantity__button-wrapper'>
       <button className = 'quantity__button--minus' onClick = {this.minusCargo}>-</button> 
       <input className = 'quantity__input' value = {this.state.quantity}></input>
       <button className = 'quantity__button--plus' onClick = {this.plusCargo} >+</button> 
    </div>

  </div>
)
}
}
export default QuantityCargo;