import locationHelperBuilder from 'redux-auth-wrapper/history3/locationHelper'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect'
import { routerActions } from 'react-router-redux'
 
const locationHelper = locationHelperBuilder({})

// Layout Component Wrappers
export const UserIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => state.user.data !== null,
    redirectAction: routerActions.replace,
    redirectPath: '/signin',
    wrapperDisplayName: 'UserIsAuthenticated'
})

export const UserIsNotAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => state.user !== null && state.user.data === null,
    redirectAction: routerActions.replace,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/wallet',
    wrapperDisplayName: 'UserIsNotAuthenticated',
    allowRedirectBack: false
})

// UI Component Wrappers
export const VisibleOnlyAuth = connectedAuthWrapper({
    authenticatedSelector: state => state.user !== null && state.user.data !== null,
    wrapperDisplayName: 'VisibleOnlyAuth',
    FailureComponent: null
})

export const HiddenOnlyAuth = connectedAuthWrapper({
    authenticatedSelector: state => state.user !== null && state.user.data === null,
    wrapperDisplayName: 'HiddenOnlyAuth',
    FailureComponent: null
})
