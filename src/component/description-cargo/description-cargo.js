import React, {Component} from 'react';
import './description-cargo.css';

const DescriptionCargo = (props) => {
  return (
    <div className = 'card__description-wrapper'>
      <img src= {props.imgSrc} alt = 'some cargo' className = 'card__description--img'></img>
      <h3 className = 'card__title'>{props.name}</h3>
    </div>
  )
}
    


export default DescriptionCargo; 