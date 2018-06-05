import axios from 'axios';
import * as constants from '../constants'

function balanceReceived(balance) {
    return {
        type: constants.INIT_BALANCES,
        payload: balance
    }
}

export function getBalance(address, authorization) {

    return function(dispatch) {

        // GET
        // http://35.234.104.77:8080/nynja/token/api.v.1.0/balance

        // GET
        // http://35.234.104.77:8080/nynja/ethereum/api.v.1.0/address-balance?address={address}

        /*
        dispatch(balanceReceived({
            'etherBalance': etherBalance,
            'tokenBalance': tokenBalance
        }))

        */
    }
}