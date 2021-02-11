import React from 'react';
import binImg from '..//../assets/img/bin.svg';
import ModalStore from '../../store/modal.js';
import { useCallback } from 'react/cjs/react.development';

const  scss = require ('./button-trash.module.scss');


const ButtonTrash = (props) => {

const toggleModal =  useCallback(() => {
 ModalStore.toggleModal(props.id);
}, [props.id])

return (
  <button className = {scss.buttonTrash} onClick = {toggleModal}>
    <img className = {scss.btnTrashImg} src = {binImg} alt = 'trash'></img>
  </button> 
)
}

export default ButtonTrash;