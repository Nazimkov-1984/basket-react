import {observable, makeAutoObservable} from 'mobx';

class ModalStore {
    isOpenModal = false;
    idCard = undefined;
    constructor(isOpenModal) {
        makeAutoObservable (this, {
            isOpenModal: observable,
            idCard: observable
        })
    }
    toggleModal = (id) => {
        this.isOpenModal = !this.isOpenModal;
        this.idCard = id;
        
    }
    closeModal = (id) => {
        const modalWindow = document.querySelector('.modal');
        
        this.isOpenModal = !this.isOpenModal;
    }
}

export default new ModalStore();