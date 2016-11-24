import { RECEIVE_USERINFO } from '../actions/actionCreators';

function userInfo(state={
  userName: "",
  passWord: "",
  userCreate: [],
  userCollection: []
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