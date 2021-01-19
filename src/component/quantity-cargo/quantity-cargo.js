import React, {Component} from 'react';
import  './quantity-cargo.css'

const QuantityCargo = (props) => {
  return (
    <div className = 'quantity-wrapper'>
      <span className = 'quantity__title'>Количество</span>
      <div className = 'quantity__button-wrapper'>
         <button className = 'quantity__button--minus' onClick = {() => props.minusQuantity(props.id)} >-</button> 
         <input className = 'quantity__input' value = {props.quantity}></input>
         <button className = 'quantity__button--plus' onClick = {() => props.plusQuantity(props.id)} >+</button> 
      </div>
  
    </div>
  )
  
}

export default QuantityCargo;