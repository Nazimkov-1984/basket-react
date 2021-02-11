import {observable, computed, makeAutoObservable, action} from 'mobx';
import ModalStore from './modal.js';
class Store {
     dataCards = [
        {
          id: 0,
          name : 'Кресло для геймеров Hator Sport',
          price: 4100,
          imgSrc:'https://user-images.githubusercontent.com/61156194/104780395-674a7100-5789-11eb-93de-bbb8f95925df.jpg',
          quantity: 1
        },
        {
          id: 1,
          name : 'Умные часы Smart Pink Forever',
          price: 1400,
          imgSrc:'https://user-images.githubusercontent.com/61156194/104780421-74676000-5789-11eb-894e-c31e46808bd0.png',
          quantity: 1
        },
        {
          id: 2,
          name : 'Графический планшет Wacom',
          price: 2100,
          imgSrc:'https://user-images.githubusercontent.com/61156194/104780467-86490300-5789-11eb-8f71-92165f88d157.jpg',
          quantity: 1
        }
      ]; 
      
      constructor () {
        makeAutoObservable(this, {
          dataCards: observable, 
          getTotalSum : computed,
          incrmentQuantity: action,
          decrementQuantity: action,
          deleteCard: action
        })
      }
      get getTotalSum () {
        return this.dataCards.reduce(((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity)),0);
      }
      incrmentQuantity = (id) => {
        this.dataCards[`${id}`].quantity = ++this.dataCards[`${id}`].quantity;
      }
      decrementQuantity= (id) => {
        if ((this.dataCards[`${id}`].quantity) > 1) {
        this.dataCards[`${id}`].quantity = --this.dataCards[`${id}`].quantity;
        }
      }
        deleteCard = () => {
        this.dataCards = this.dataCards.filter(item => item.id !== ModalStore.idCard);
        ModalStore.isOpenModal = false;
      }
}

export default new Store();