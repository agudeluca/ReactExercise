import { UPDATE_ARRAY, UPDATE_DATA_TO_SHOW, UPDATE_DATA,UPDATE_COUNTRIES, URL_GET_COUNTRIES } from '../constants'
import api from '../services/api'
export const setHistoric = () => {
    return (dispatch, getState) => {
        dispatch(updateData(true, 'ready'));
        dispatch(updateArray(getState().userApp.user));
        dispatch(updateDataToShow(getState().userApp.user));
    }
}
export const getCountries = () => {
    return (dispatch, getState) => {
        api(URL_GET_COUNTRIES)
            .then(([header, body]) => {
               dispatch(updateCountries(body))
            }).catch((err) => console.log(err))
    }
}

export const updateDataToShow = (data) => {
    return {
        type: UPDATE_DATA_TO_SHOW,
        data,
    }
}
export const updateCountries = (data) => {
    return {
        type: UPDATE_COUNTRIES,
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
export const updateArray = (data) => {
    return {
        type: UPDATE_ARRAY,
        data
    }
}
