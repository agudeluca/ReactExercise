import { FETCHING_DATAFAILUTE, FETCH_DATA, UPDATE_DATA } from '../constants'
const initialState ={
   "currentViewer": null,
  "age": null,
  "selectedCountry": null,


}
export default function (state = initialState, action) {
  switch (action.type) {

    case FETCHING_DATAFAILUTE:
      state = initialState;
      break;

    case UPDATE_DATA:
      state[action.id] = action.data;
      return state
    case FETCH_DATA:
      return {
        ...state,
      }
    default:
      return state
  }
}
