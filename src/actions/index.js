import { UPDATE_ARRAY, UPDATE_DATA_TO_SHOW, UPDATE_DATA, UPDATE_COUNTRIES, URL_GET_COUNTRIES } from '../constants'
import api from '../services/api'
export const setHistoric = (userForm) => {
    return (dispatch, getState) => {
        dispatch(updateData(userForm));
        dispatch(updateArray(userForm));
        dispatch(updateDataToShow(userForm));
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

export const getGenericApi = () => {
    console.log('entra')
    return (dispatch,getState) =>{
        fetch('http://americanflightsapp-ydfw.cloudhub.io/flights', {method: 'GET'}).then( (data,response) =>{
            console.log(data),
            console.log(response)
        })
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
