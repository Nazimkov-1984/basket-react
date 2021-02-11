import axios from 'axios';
  
  const filmName = 'Bullet';

  class API {
    getData = () => {
      return axios
        .get(`http://www.omdbapi.com/?r=json&s=${filmName}&apikey=2a7d7e9f&`)
        .then(function(response) {
          if (response.status === 200 && response != null) {
            let data = response.data
            return data
          } else {
            throw new Error('Empty data')
          }
        })
        .catch(function(error) {
          console.log(error)
          return [] 
        })
    }
}
export default API;
