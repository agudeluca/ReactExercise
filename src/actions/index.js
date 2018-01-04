import { UPDATE_ARRAY,UPDATE_DATA_TO_SHOW,UPDATE_DATA } from '../constants'
import countriesApi from '../services/api'

export const setHistoric = () => {
    return (dispatch, getState) => {
        console.log(getState())
        dispatch(updateData(true, 'ready'));
        dispatch(updateArray(getState().userApp.user));
        dispatch(updateDataToShow(getState().userApp.user));
    }
}

export const updateDataToShow = (data) => {
    return {
        type: UPDATE_DATA_TO_SHOW,
        data,
    }
}
export const updateData = (data, id) => {
    return {
        type: UPDATE_DATA,
        data,
        id
    }
}
export const updateArray = (data) => {
    return {
        type: UPDATE_ARRAY,
        data
    }
}
