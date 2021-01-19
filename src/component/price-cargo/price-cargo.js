import React, { Component } from 'react';
import './price-cargo.css';

class PriceCargo extends Component {
constructor (props) {
  super(props);
}

render () {
  const {price} = this.props;
  return (
    <div className = 'card__price--wrapper'>
      <span className = 'card__price'>{price}</span>
      <span className = 'card__price__currency'> &#8372; </span>
    </div>
    )
}
}
export default PriceCargo;