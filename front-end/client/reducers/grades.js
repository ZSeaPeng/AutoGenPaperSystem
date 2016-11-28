import { RECEIVE_INITIAL_STATE, LOGIN, LOGINERROR, LOGOUT } from '../actions/actionCreators';

function grades(state = {
    sublist:[],
    update: [],
    userid: -1,
    error: "",
    username: ""
    // img: []
}, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return {
        sublist: [ ...action.posts.sublist ],
        update: [ ...action.posts.update ],
        userid: action.posts.userid,
        error: ""
        // img: [ ...action.posts.img ]
      };
    case LOGIN:
      return {
        ...state,
        userid: action.posts.userId,
        username: action.posts.username
      };
    case LOGINERROR:
      return {
        ...state,
        error: action.details.error
      };
    case LOGOUT:
      return {
        ...state,
        userid: -1,
        error: ""
      };
    default:
      return state;
  }
}

export default grades;