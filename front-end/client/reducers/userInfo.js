import { RECEIVE_USERINFO } from '../actions/actionCreators';

function userInfo(state={
  username: "",
  password: "",
  userCreate: [],
  userCollection: ''
}, action) {
  switch(action.type) {
    case RECEIVE_USERINFO:
      return {
        ...action.details;
      };
    default:
      return state;
  }
}