import React from 'react';
import CargoCard from '../cargo-card';
import TotalPrice from '../total-price';
import ButtonSubmit from '../button-submit';
import QuantityCargo from '../quantity-cargo';
import ButtonTrash from '../button-trash';
import DescriptionCargo from '../description-cargo'; 
import PriceCargo from '../price-cargo';

import store from '../../store/index.js';
import { observer } from 'mobx-react';

const  scss = require ('./basket.module.scss');


const Basket =  observer( () => {

  return (
    <div className = {scss.basketHeader}>
      <h2 className = {scss.basketTitle}>Корзина</h2>
      {store.dataCards.map((item) => {
        return(
          <CargoCard key = {item.id}>
              <DescriptionCargo name = {item.name} imgSrc = {item.imgSrc}/>
              <QuantityCargo quantity = {item.quantity}  id = {item.id}/>
              <PriceCargo price = {item.price * item.quantity}/>
              <ButtonTrash id = {item.id}/>
          </CargoCard>
        )
      })}
      <TotalPrice/>
      <ButtonSubmit/>
    </div>
  ) 
}
)

export default Basket;

