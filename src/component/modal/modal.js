import React from 'react';
import './modal.css';
import ModalStore from '../../store/modal.js';
import Store from '../../store/index.js';
import {observer} from 'mobx-react-lite';

const Modal = observer( () => {
    if (ModalStore.isOpenModal) {
        return(
            (
            <div className= 'modal'>
                <div className = 'modal-body'>
                    <span className = 'modal-title'>Вы действительно хотите удалить товар из корзины?</span>
                    <div className = 'button-wrapper'>
                    <button className = 'button-delete' onClick = {() => Store.deleteCard()} >Удалить</button>
                    <button className = 'button-cancel' onClick = {() => ModalStore.toggleModal()}>Отмена</button>
                    </div>
                    
                </div>
            </div>)
            
        )
    } else return null

})
export default Modal;