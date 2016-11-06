import { RECEIVE_INITIAL_STATE } from '../actions/actionCreators';

function grades(state = {
    sublist:[],
    update: [],
    userid: ""}, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return {
        sublist: [ ...action.posts.sublist ],
        update: [ ...action.posts.update ],
        userid: action.posts.userid
      };
    default:
      return state;
  }
};

export default grades;