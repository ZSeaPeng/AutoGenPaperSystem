import { CREATESUBUSER, SUBUSER, CLEAR, DELETESUBUSER } from '../actions/actionCreators'

function subUser(state={
  user: [],
  delete: ''},action) {
  switch(action.type) {
    case CREATESUBUSER:
      return {
        ...state,
        user: [
          ...state.user,
          action.details
        ]
      };
    case SUBUSER:
      return {
        ...state,
        user:[
        ...action.details
        ]
      };
    case DELETESUBUSER:
      return {
        user: [
          ...state.user.slice(0, action.details,k),
          ...state.user.slice(action.details.k + 1)
        ],
        delete: action.details.username
      }
    case CLEAR:
      return {
        ...state,
        delete: ''
      }
    default:
      return state;
  }
}

export default subUser;