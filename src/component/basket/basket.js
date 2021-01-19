import React, {Component} from 'react';
import CargoCard from '../cargo-card';
import TotalPrice from '../total-price';
import ButtonSubmit from '../button-submit';

import './basket.css';
import dataCards from '..//..//assets/data/data';

class Basket extends Component {
constructor(props) {
  super(props);
  this.state = {
    data: dataCards
  }
}
render () {
const ListCard = dataCards.map((item) => {
  <CargoCard name = {item.name} imgSrc = {item.imgSrc} price = {item.price}/>
 
});
console.log(ListCard);
  return (
    <div className = 'basket-header'>
      <h2 className = 'basket__title'>Корзина</h2>
      <div>{ListCard}</div>
      <TotalPrice/>
      <ButtonSubmit/>
    </div>
  ) 
}
}

export default Basket;

