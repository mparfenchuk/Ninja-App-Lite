import { getBalance } from './getBalance'
import axios from 'axios';

export function sendEther(inputAddress, inputValue, authorization) {

    return function(dispatch) {

        axios.get('http://91.234.37.244:8080/nynja/ethereum/api.v.1.0/eth-send?address='+inputAddress+'&amount='+inputValue)
        .then(function (response) {

            console.log(response);
    
        })
        .catch(function (error) {
            console.log(error.response);
        });

    }
}