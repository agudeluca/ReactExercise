import { SET_TOKEN_ACCESS, UPDATE_DATA, FETCHING_DATA, GET_USER } from '../constants';
const initialState = {
  "jwtToken": 'null',
   "birthday": null,
   "age": null,
}
export default function (state = initialState, action) {
  switch (action.type) {

    case SET_TOKEN_ACCESS:
      state.FBtoken = action.token

      break;
    case UPDATE_DATA:
      state[action.id] = action.data;
      break;

    case FETCHING_DATA:
      return {
        ...state,
      }
    case GET_USER:
      return {
        ...state,
        email: action.data.email,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        role: action.data.role,
        description: action.data.description,
        userName: action.data.userName,
      }
    default:
      return state
  }
}
