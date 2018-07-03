import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './reducers/user'
import userTransaction from './reducers/transaction'

const reducer = combineReducers({
    routing: routerReducer,
    user: userReducer,
    transaction: userTransaction
})

export default reducer