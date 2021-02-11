import React from 'react';

const  scss = require ('./cargo-card.module.scss');

const CargoCard = (props) => {

  return (
    <div className = {scss.cardWrapper}>
    {props.children}
  </div>
)
}


export default CargoCard;