import { browserHistory } from 'react-router'
import axios from 'axios';
import * as constants from '../constants'

function userLoggedIn(user) {
    return {
        type: constants.USER_LOGGED_IN,
        payload: user
    }
}

export function register(inputUsername, inputFirstName, inputLastName, inputEmail, inputPassword) {

    return function(dispatch) {
        
        axios.post('http://91.234.37.244:8080/nynja/account/api.v.1.0/register',
        { 
            firstName: inputFirstName,
            lastName: inputLastName,
            username: inputUsername,
            email: inputEmail,
            password: inputPassword 
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {

            dispatch(userLoggedIn({
                'id': response.data.id,
                'firstName': response.data.firstName,
                'lastName': response.data.lastName,
                'username': response.data.username,
                'address': response.data.address,
                'email': response.data.email,
                'authorization' : response.headers.authorization,
                'etherBalance': '0 Ether',
                'tokenBalance': '0 Ninja'
            }))

            axios.get('http://91.234.37.244:8080/nynja/token/api.v.1.0/mint?address='+response.data.address+'&amount=2000',{
                headers: {
                    'Authorization': response.headers.authorization
                }
            });
    
            let currentLocation = browserHistory.getCurrentLocation()
            if ('redirect' in currentLocation.query){
                return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
            }
            return browserHistory.push('/wallet')
        })
        .catch(function (error) {
            console.log(error.response);
        });	
    }
}