const initialState = {
    isLoading: false,
    transactionMessageShow: false,
    transactionError: false,
    transactionMessageText: ''
}

const transaction = (state = initialState, action) => {
    if (action.type === 'SET_LOADING'){
        return Object.assign({}, state, {
            isLoading: true,
            transactionMessageShow: false,
            transactionError: false,
            transactionMessageText: ''
        })
    }
  
    if (action.type === 'LOADED'){
        return Object.assign({}, state, {
            isLoading: false,
            transactionMessageShow: true,
            transactionError: false,
            transactionMessageText: 'Transaction was successful.'
        })
    }

    if (action.type === 'HAS_ERROR'){
        return Object.assign({}, state, {
            isLoading: false,
            transactionMessageShow: true,
            transactionError: true,
            transactionMessageText: action.payload
        })
    }

    if (action.type === 'CLEAR'){
        return Object.assign({}, state, {
            isLoading: false,
            transactionMessageShow: false,
            transactionError: false,
            transactionMessageText: ''
        })
    }

    return state
}

export default transaction