import {combineReducers} from 'redux'
import notify from './notify'
import user from './user'

const appReducers = combineReducers({
    user,
    notify
})

export default appReducers