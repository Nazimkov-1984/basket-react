import React, {Component} from 'react';
import CargoCard from '../cargo-card';
import TotalPrice from '../total-price';
import ButtonSubmit from '../button-submit';

import './basket.css';
import dataCards from '..//..//assets/data/data';
import QuantityCargo from '../quantity-cargo';
import ButtonTrash from '../button-trash';
import DescriptionCargo from '../description-cargo'; 
import PriceCargo from '../price-cargo';
import Modal from '../modal';

let totalSumArray = 0;
 dataCards.map(item => {
  totalSumArray += item.price * item.quantity;
 });


class Basket extends Component {
constructor(props) {
  super(props);
  this.state = {
    data: dataCards,
    total: totalSumArray,
    isOpenModal: false
  }
  this.plusQuantity = this.plusQuantity.bind(this);
  this.minusQuantity = this.minusQuantity.bind(this);
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
  this.deleteCard = this.deleteCard.bind(this);
  this.createSendObject = this.createSendObject.bind(this);
}
createSendObject() {
const cargoObj = Object.assign({}, dataCards);
console.log(cargoObj);
}
showModal () {
  this.setState(state => ({
    isOpenModal: true
   })
   )
}
hideModal () {
  this.setState(state => ({
    isOpenModal: false
   })
   )
}
deleteCard(id) {
  delete dataCards[id];
  totalSumArray = 0;
  dataCards.map(item => {
    totalSumArray += item.price * item.quantity;
   });
  this.setState(state => ({
    data: dataCards,
    isOpenModal: false,
    total: totalSumArray
   })
  )
}
plusQuantity (i) {
  dataCards[i].quantity = ++dataCards[i].quantity;
  this.setState(state => ({
   data: dataCards
  })
  )
let totalSum = 0;
  dataCards.map(item => {
   totalSum += item.price * item.quantity;
  });
  this.setState(state => ({
    total: totalSum
   })
   )
}

minusQuantity (i) {
  if(dataCards[i].quantity > 1) {
    dataCards[i].quantity = --dataCards[i].quantity;
  this.setState(state => ({
   data: dataCards
  })
  )
  let totalSum = 0;
  dataCards.map(item => {
   totalSum += item.price * item.quantity;
  });
  this.setState(state => ({
    total: totalSum
   })
   )
  }

}


render () {
  return (
    <div className = 'basket-header'>
      <h2 className = 'basket__title'>Корзина</h2>
      {dataCards.map((item) => {
        return(
          <CargoCard key = {item.id}>
              <DescriptionCargo name = {item.name} imgSrc = {item.imgSrc}/>
              <QuantityCargo quantity = {item.quantity} plusQuantity = {this.plusQuantity} minusQuantity = {this.minusQuantity} id= {item.id}/>
              <PriceCargo price = {item.price * item.quantity}/>
              <ButtonTrash openModal = {this.showModal}/>
              <Modal isOpenModal = {this.state.isOpenModal} closeModal = {this.hideModal} deleteCard = {this.deleteCard} id= {item.id}/>
          </CargoCard>
        )
      })}
      <TotalPrice total ={this.state.total}/>
      <ButtonSubmit createSendObject = {this.createSendObject}/>
      
    </div>
  ) 
}
}

export default Basket;

