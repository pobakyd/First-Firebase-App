import * as types from '../constants/ActionTypes'

export const actOpenNotify = ({title, content}) => ({
    type: types.OPEN_NOTIFY,
    title, 
    content
})

export const actCloseNotify = () => ({
    type: types.CLOSE_NOTIFY,
})

export const actLogin = ({uid, email, isAdmin, website}) => ({
    type: types.USER_LOGIN,
    uid, 
    email,
    isAdmin,
    website
})


export const actLogout = () => ({
    type: types.USER_LOGOUT,
})

