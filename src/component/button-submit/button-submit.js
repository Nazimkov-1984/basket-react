import React from 'react';
const  scss = require ('./button-submit.module.scss');

const ButtonSubmit = (props) => {
return (
  <button type = 'submit' className = {scss.basketButton} onClick = {props.createSendObject}>ОФОРМИТЬ</button>
)
}

export default ButtonSubmit;