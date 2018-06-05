import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userReducer from './reducers/user'

const reducer = combineReducers({
    routing: routerReducer,
    user: userReducer
})

export default reducer