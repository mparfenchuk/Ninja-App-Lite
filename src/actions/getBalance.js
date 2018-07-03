import axios from 'axios';
import Units from 'ethereumjs-units';
import * as constants from '../constants'

function balanceReceived(balance) {
    return {
        type: constants.INIT_BALANCES,
        payload: balance
    }
}

function getTokenAmount(authorization) {
    return axios.get('http://91.234.37.244:8080/nynja/token/api.v.1.0/balance',{
        headers: {
            'Authorization': authorization
        }
    });
}

function getEthAmount(address) {
    return axios.get('http://91.234.37.244:8080/nynja/ethereum/api.v.1.0/address-balance?address='+address);
}

export function getBalance(address, authorization) {

    return function(dispatch) {

        axios.all([getTokenAmount(authorization), getEthAmount(address)])
        .then(axios.spread(function (tokenAmount, ethAmount) {

            let ethers = Units.convert(ethAmount.data, 'wei', 'eth');
            return dispatch(balanceReceived({
                'etherBalance': ethers + ' Ether',
                'tokenBalance': tokenAmount.data + ' Ninja'
            }))

        })).catch(function (error) {
            console.log(error.response);
        });

    }
}