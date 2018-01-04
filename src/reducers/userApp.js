import { FETCHING_DATAFAILUTE, FETCH_DATA, UPDATE_DATA } from '../constants'
const initialState ={
   "currentViewer": null,
  "age": null,
  "selectedCountry": 'ca',
}
export default function (state = initialState, action) {
  switch (action.type) {

    case FETCHING_DATAFAILUTE:
      state = initialState;
      break;
      console.log(action.index)
      case 'ADD_TODO':
      // Return a new array
      return [
      
      ]
    case UPDATE_DATA:
    var aux = Object.assign({}, state)
    aux[action.id] = action.data 
     return aux
  
    case FETCH_DATA:
      return {
        ...state,
      }
    default:
      return state
  }
}
