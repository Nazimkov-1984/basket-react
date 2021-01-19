import React from 'react';
import './button-trash.css';
import binImg from '..//../assets/img/bin.svg';

const ButtonTrash = () => {
return (
  <img className = 'btn-trash' src = {binImg} alt = 'trash'></img>
)
}

export default ButtonTrash;