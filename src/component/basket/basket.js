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

var totalSumArray = 0;
 dataCards.map(item => {
  totalSumArray += item.price * item.quantity;
 });
console.log(totalSumArray)
class Basket extends Component {
constructor(props) {
  super(props);
  this.state = {
    data: dataCards,
    total: totalSumArray 
  }
  this.plusQuantity = this.plusQuantity.bind(this);
  this.minusQuantity = this.minusQuantity.bind(this);
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
              <ButtonTrash/>
          </CargoCard>
        )
      })}
      <TotalPrice total ={this.state.total}/>
      <ButtonSubmit/>
    </div>
  ) 
}
}

export default Basket;

