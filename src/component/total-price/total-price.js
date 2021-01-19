import React, {Component} from 'react';
import './total-price.css';


class TotalPrice extends Component {
  constructor(props){
    super(props)
    this.state = {
      totalPrice: 0
    }
    this.onClick = this.onClick.bind(this);
  }
  
 onClick = () =>{
  const prices = document.querySelectorAll('.card__price');
  let sum = 0;
  for (let i = 0; i < prices.length; i++){
    sum = sum + Number(prices[i].innerText);
  }
  this.setState({totalPrice: sum});
};
render () {
  return (
    <div className = 'total-price-wrapper'>
      <button className= 'total-price__button' onClick = {this.onClick}>Пересчитать</button>
      <span className = 'total-price__text'>Общая сумма:</span>
      <div className = 'total-price-number-wrapper'>
      <span className = 'total-price__number'>{this.state.totalPrice}</span> <span>&#8372;</span>
      </div>
      
    </div>
  )
}

}

export default TotalPrice;