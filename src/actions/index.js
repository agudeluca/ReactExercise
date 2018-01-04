import { FETCHING_DATAFAILUTE, FETCH_DATA } from '../constants'
import countriesApi from '../services/api'

export const getData = () => {
    return {
        type: FETCH_DATA,
    }
}
export const getDataFailure = () => {
    return {
        type: FETCHING_DATAFAILUTE
    }
}
export const getCountries = () => {
    return (dispatch, getState) => {
        countriesApi('https://restcountries.eu/rest/v2/all')
            .then(([response, json]) => {
                dispatch(updateData(json, 'countries'));
                console.log("hola");
            }).catch((err) => console.log(err))
    }
}

export const updateData = (data, id) => {
    return {
        type: 'UPDATE_DATA',
        data,
        id
    }
}