import React, { FC } from 'react';
import Basket from './component/basket';
import './App.css';

interface mainApp {
  type?: FC
}

const  App: React.FunctionComponent<mainApp> = () => {
  return (
    <div className="basket">
     <Basket/>
    </div>
  )
}

export default App;
