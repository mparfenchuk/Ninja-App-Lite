const initialState = {
    data: null
}

const user = (state = initialState, action) => {
    if (action.type === 'USER_LOGGED_IN'){
        return Object.assign({}, state, {
            data: action.payload
        })
    }
  
    if (action.type === 'INIT_BALANCES'){
        return Object.assign({}, state, {
            data: {
                id: state.data.id,
                firstName: state.data.firstName,
                lastName: state.data.lastName,
                username: state.data.username,
                address: state.data.address,
                email: state.data.email,
                authorization: state.data.token,
                etherBalance: action.payload.etherBalance,
                tokenBalance: action.payload.tokenBalance
            }
        })
    }

    if (action.type === 'USER_LOGGED_OUT'){
        return Object.assign({}, state, {
            data: null
        })
    }

    return state
}

export default user