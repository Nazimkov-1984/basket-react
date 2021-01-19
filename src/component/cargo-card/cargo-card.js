import React from 'react';

import './cargo-card.css';

const CargoCard = (props) => {

  return (
    <div className = 'card__wrapper'>
    {props.children}
  </div>
)
}


export default CargoCard;