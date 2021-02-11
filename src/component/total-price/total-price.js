import React from 'react';
import './total-price.css';
import store  from '../../store/index.js';
import {observer} from 'mobx-react-lite';

const TotalPrice = observer( () => {


  return (
    <div className = 'total-price-wrapper'>
      <span className = 'total-price__text'>Общая сумма:</span>
      <div className = 'total-price-number-wrapper'>
      <span className = 'total-price__number'>{store.getTotalSum}</span> <span className = 'total-price__number'>&#8372;</span>
      </div>
      
    </div>
  )
})

export default TotalPrice;