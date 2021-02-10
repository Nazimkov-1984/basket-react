import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Modal from './component/modal';


ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.createPortal(
<Modal/>,
 document.getElementById('modal')
 );

