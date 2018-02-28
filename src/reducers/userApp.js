import { UPDATE_DATA, UPDATE_ARRAY, UPDATE_DATA_TO_SHOW, UPDATE_COUNTRIES } from '../constants'
const initialState = {
  userToShow: null,
  historicUsers: [],
  countries: [],
  user: {}
}
export default function (state = initialState, action) {
  switch (action.type) {

    case UPDATE_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.data.name,
          age: action.data.age,
          country: action.data.country,
          ready: true
        }
      }

    case UPDATE_COUNTRIES:
      return {
        ...state,
        countries: action.data
      }

    case UPDATE_DATA_TO_SHOW:
      return {
        ...state,
        userToShow: action.data
      }
    case UPDATE_ARRAY:
      var duplicateState = Object.assign({}, state)
      duplicateState.historicUsers.push(Object.assign({}, state.user))
      return duplicateState

    default:
      return state
  }
}
