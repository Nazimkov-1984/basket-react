import React from 'react';
import './button-submit.css';

const ButtonSubmit = (props) => {
return (
  <button type = 'submit' className = 'basket-button' onClick = {props.createSendObject}>ОФОРМИТЬ</button>
)
}

export default ButtonSubmit;