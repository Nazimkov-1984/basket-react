import {observable, computed, action, makeAutoObservable} from 'mobx';

class ModalStore {
    isOpenModal = false;
    idCard = undefined;
    constructor(isOpenModal) {
        makeAutoObservable (this, {
            isOpenModal: observable,
            idCard: observable
        })
    }
    toggleModal(id) {
        this.isOpenModal = !this.isOpenModal;
        this.idCard = id;
        
    }
}

export default new ModalStore();