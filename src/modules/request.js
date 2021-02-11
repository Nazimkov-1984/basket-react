import React from 'react';
import axios from 'axios';

const request = () => {
  

  axios.get(`http://www.omdbapi.com/?apikey=2a7d7e9f&`)
  .then(res => {
    const films = res.data;
    console.log(films);
    
  })
}

export default request;