import React from 'react';
import './modal.css';

const Modal = (props) => {
    if (props.isOpenModal) {
        return(
            (
            <div className= 'modal'>
                <div className = 'modal-body'>
                    <span className = 'modal-title'>Вы действительно хотите удалить товар из корзины</span>
                    <div className = 'button-wrapper'>
                    <button className = 'button-delete' onClick = {() => props.deleteCard(props.id)}>Удалить</button>
                    <button className = 'button-cancel' onClick = {props.closeModal}>Отмена</button>
                    </div>
                    
                </div>
            </div>)
            
        )
    } else return null

}
export default Modal;