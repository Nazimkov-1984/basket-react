import {observable, computed, action, makeAutoObservable} from 'mobx';

class ModalStore {
    isOpenModal = true;
}

export default new ModalStore();