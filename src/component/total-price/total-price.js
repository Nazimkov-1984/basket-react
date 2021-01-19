import React, {Component} from 'react';
import './total-price.css';


const TotalPrice = (props) => {


  return (
    <div className = 'total-price-wrapper'>
      <span className = 'total-price__text'>Общая сумма:</span>
      <div className = 'total-price-number-wrapper'>
      <span className = 'total-price__number'>{props.total}</span> <span>&#8372;</span>
      </div>
      
    </div>
  )
}

export default TotalPrice;