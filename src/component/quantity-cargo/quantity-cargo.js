import React, { useCallback } from 'react';
import store from '../../store/index.js';

const  scss = require ('./quantity-cargo.module.scss');

const QuantityCargo = (props) => {

  const decrement = useCallback(() =>{
    store.decrementQuantity(props.id)
  }, [props.id])

  const increment = useCallback(() => {
    store.incrmentQuantity(props.id)
  }, [props.id])
  
  return (
    <div className = {scss.quantityWrapper}>
      <span className = {scss.quantityTitle}>Количество</span>
      <div className = {scss.quantityButtonWrapper}>
         <button className = {scss.quantityButtonMinus} onClick = {decrement} >-</button> 
         <input className = {scss.quantityInput} value = {store.dataCards[`${store.dataCards.findIndex(x => x.id === props.id)}`].quantity}></input>
         <button className = {scss.quantityButtonPlus} onClick = {increment} >+</button> 
      </div>
  
    </div>
  )
}

export default QuantityCargo;