import axios from 'axios';

export default function(searchTerm='action') {
    axios.get('http://localhost:5000/query/' + searchTerm + '%')
  .then(function (response) {
    // handle success
    //console.log(response.data);
    return(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}
