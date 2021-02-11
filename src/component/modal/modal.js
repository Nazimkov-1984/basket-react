import React from 'react';
import ModalStore from '../../store/modal.js';
import Store from '../../store/index.js';
import {observer} from 'mobx-react-lite';

const  scss = require ('./modal.module.scss');

const Modal = observer( () => {
    if (ModalStore.isOpenModal) {
        return(
            (
            <div className= {scss.modal} onClick = {ModalStore.closeModal}>
                <div className = {scss.modalBody}>
                    <span className = {scss.modalTitle}>Вы действительно хотите удалить товар из корзины?</span>
                    <div className = {scss.buttonWrapper}>
                    <button className = {scss.buttonDelete} onClick = {Store.deleteCard} >Удалить</button>
                    <button className = {scss.buttonCancel} onClick = {ModalStore.toggleModal} >Отмена</button>
                    </div>
                    
                </div>
            </div>)
            
        )
    } else return null

})
export default Modal;