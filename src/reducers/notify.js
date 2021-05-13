import * as types from '../constants/ActionTypes'

const defaultState = {
    isShow: false,
    title: '',
    content: ''
}

const notify = (state = defaultState, action) => {
    switch (action.type) {
        case types.OPEN_NOTIFY:
            const {title, content} = action
            return {
                isShow: true,
                title,
                content
            }

        case types.CLOSE_NOTIFY:
            return {
                ...state,
                isShow: false,
            }

        default:
            return state 
    }
}

export default notify