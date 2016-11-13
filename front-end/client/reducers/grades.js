import { RECEIVE_INITIAL_STATE, LOGIN } from '../actions/actionCreators';

function grades(state = {
    sublist:[],
    update: [],
    userid: "",
    // img: []
}, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return {
        sublist: [ ...action.posts.sublist ],
        update: [ ...action.posts.update ],
        userid: action.posts.userid
        // img: [ ...action.posts.img ]
      };
    case LOGIN:
      return {
        ...state,
        userid: action.posts.userid
      }
    default:
      return state;
  }
};

export default grades;