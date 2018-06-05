import { browserHistory } from 'react-router'
import axios from 'axios';
import * as constants from '../constants'

function userLoggedIn(user) {
    return {
        type: constants.USER_LOGGED_IN,
        payload: user
    }
}

export function login(inputUsername, inputPassword) {

    return function(dispatch) {

        // POST
        // http://35.234.104.77:8080/nynja/login

        /*
        dispatch(userLoggedIn({
            'id': id,
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'address': address,
            'email': email,
            'authorization' : token,
            'etherBalance': '0 Ether',
            'tokenBalance': '0 Ninja'
        }))

        let currentLocation = browserHistory.getCurrentLocation()
        if ('redirect' in currentLocation.query){
            return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
        }
        return browserHistory.push('/wallet')*/
    }
}