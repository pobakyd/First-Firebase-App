import * as types from '../constants/ActionTypes'

const defaultState = {
    isLogin: false,
    userInfo: {
        uid: '',
        isAdmin: false,
        email: '',
        website: ''
    }
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            const {uid, isAdmin, email, website} = action
            return {
                isLogin: true,
                userInfo: {
                    uid,
                    isAdmin,
                    email,
                    website
                }
            }

        case types.USER_LOGOUT:
            return {
                isLogin: false,
                userInfo: {
                    uid: '',
                    isAdmin: false,
                    email: '',
                    website: ''
                }
            }

        default:
            return state 
    }
}

export default user