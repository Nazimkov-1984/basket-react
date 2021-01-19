import React, {Component} from 'react';
import DescriptionCargo from '../description-cargo'; 
import QuantityCargo from '../quantity-cargo';
import PriceCargo from '../price-cargo';
import ButtonTrash from '../button-trash'
import './cargo-card.css';

class CargoCard extends Component {
constructor (props) {
  super(props);
  this.state = {
    quantity: 1,
    price: '',
    ...props
  }
}
updateQuantity = (value) => {
  this.setState({quantity: value});
}

render () {
  const summaryPrice = this.state.price * this.state.quantity;
  return (
    <div className = 'card__wrapper'>
    <DescriptionCargo name = {this.props.name} imgSrc = {this.props.imgSrc} />
    <QuantityCargo updateQuantity = {this.updateQuantity} />
    <PriceCargo price = {summaryPrice}/>
    <ButtonTrash/>
  </div>
)
}
}


export default CargoCard;