import React from 'react';
import './button-trash.css';
import binImg from '..//../assets/img/bin.svg';

const ButtonTrash = (props) => {
return (
  <button onClick = {props.openModal} className = 'button-trash'>
    <img className = 'btn-trash-img' src = {binImg} alt = 'trash'></img>
  </button>
  
)
}

export default ButtonTrash;