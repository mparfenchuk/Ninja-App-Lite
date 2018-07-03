import axios from 'axios';

function setLoading() {
    return {
        type: 'SET_LOADING'
    }
}

function loaded() {
    return {
        type: 'LOADED'
    }
}

function hasError(message) {
    return {
        type: 'HAS_ERROR',
        payload: message
    }
}

export function sendEther(inputAddress, inputValue, authorization) {

    return function(dispatch) {

        dispatch(setLoading());

        axios.get('http://91.234.37.244:8080/nynja/ethereum/api.v.1.0/eth-send?address='+inputAddress+'&amount='+inputValue)
        .then(function (response) {

            dispatch(loaded());
            console.log(response);
    
        })
        .catch(function (error) {
            dispatch(hasError(error.message))
            console.log(error.response);
        });

    }
}