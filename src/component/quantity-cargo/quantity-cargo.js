import React, {Component} from 'react';
import  './quantity-cargo.css'
import store from '../../store/index.js';

const QuantityCargo = (props) => {
  return (
    <div className = 'quantity-wrapper'>
      <span className = 'quantity__title'>Количество</span>
      <div className = 'quantity__button-wrapper'>
         <button className = 'quantity__button--minus' onClick = {() => store.decrementQuantity(props.id)} >-</button> 
         <input className = 'quantity__input' value = {props.quantity}></input>
         <button className = 'quantity__button--plus' onClick = {() => store.incrmentQuantity(props.id)} >+</button> 
      </div>
  
    </div>
  )
  
}

export default QuantityCargo;