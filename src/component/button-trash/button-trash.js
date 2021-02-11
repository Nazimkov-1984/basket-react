import React from 'react';
import './button-trash.css';
import binImg from '..//../assets/img/bin.svg';
import ModalStore from '../../store/modal.js';


const ButtonTrash = (props) => {
return (
  <button className = 'button-trash' onClick = {() => ModalStore.toggleModal(props.id)}>
    <img className = 'btn-trash-img' src = {binImg} alt = 'trash'></img>
  </button> 
)
}

export default ButtonTrash;