import { getBalance } from './getBalance'
import axios from 'axios';

export function sendToken(inputAddress, inputValue, authorization) {

    return function(dispatch) {

        axios.get('http://91.234.37.244:8080/nynja/token/api.v.1.0/transfer?address='+inputAddress+'&amount='+inputValue,{
            headers: {
                'Authorization': authorization
            }
        })
        .then(function (response) {

            console.log(response);
    
        })
        .catch(function (error) {
            console.log(error.response);
        });

    }
}