import React from 'react';
import './price-cargo.css';

 const  PriceCargo = (props) =>  {

  return (
    <div className = 'card__price--wrapper'>
      <span className = 'card__price'>{props.price}</span>
      <span className = 'card__price__currency'> &#8372; </span>
    </div>
    )
}

export default PriceCargo;