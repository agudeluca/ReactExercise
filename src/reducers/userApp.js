import { UPDATE_DATA, UPDATE_ARRAY, UPDATE_DATA_TO_SHOW } from '../constants'
const initialState = {
  userToShow: null,
  historicUsers: [],
  user: {
    ready: false,
    name: null,
    age: null,
    day: new Date().getDate(),
    month: (new Date().getMonth() + 1),
    country: null,
    date: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
    year: new Date().getFullYear()
  }
}
export default function (state = initialState, action) {
  switch (action.type) {

    case UPDATE_DATA:
      var duplicateState = Object.assign({}, state)
      duplicateState.user[action.id] = action.data
      return duplicateState

    case UPDATE_DATA_TO_SHOW:
      var duplicateState = Object.assign({}, state)
      duplicateState.userToShow = Object.assign({}, action.data)
      return duplicateState

    case UPDATE_ARRAY:
      var duplicateState = Object.assign({}, state)
      duplicateState.historicUsers.push(Object.assign({}, action.data))
      return duplicateState

    default:
      return state
  }
}
