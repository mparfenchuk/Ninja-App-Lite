import { getBalance } from './getBalance'
import axios from 'axios';

export function sendEther(inputAddress, inputValue, authorization) {

    return function(dispatch) {

        // GET
        // http://35.234.104.77:8080/nynja/ethereum/api.v.1.0/eth-send?address={inputAddress}&amount={inputValue}

        // dispatch(getBalance(address, authorization))	
    }
}