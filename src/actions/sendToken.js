import { getBalance } from './getBalance'
import axios from 'axios';

export function sendToken(inputAddress, inputValue, authorization) {

    return function(dispatch) {

        // GET
        // http://35.234.104.77:8080/nynja/token/api.v.1.0/transfer?address={inputAddress}&amount={inputValue}

        // dispatch(getBalance(address, authorization))	
    }
}