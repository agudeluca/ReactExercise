import { SET_TOKEN_ACCESS, UPDATE_DATA, GET_USER,FETCHING_DATA } from '../constants'
export const set_token_access = (token) => {
    return {
        type: SET_TOKEN_ACCESS,
        token
    }
}
export const getUser = (data) => {
    return {
        type: GET_USER,
        data
    }
}
export const updateData = (data, id) => {
    return {
        type: UPDATE_DATA,
        data,
        id
    }
}

export const getData = () => {
    return {
        type: FETCHING_DATA,

    }
}
export const getDataSuccess = (data) => {
    return {
        type: 'FETCHING_DATA_SUCCESS',
        data
    }
}
export const getDataFailure = () => {
    return {
        type: 'FETCHING_DATAFAILUTE'
    }
}

