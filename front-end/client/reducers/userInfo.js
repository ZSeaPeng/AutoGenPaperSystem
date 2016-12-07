import { RECEIVE_USERINFO } from '../actions/actionCreators';

function userInfo(state={
  username: "",
  userCreate: [],
  subjectcan: '',
  usercollection: '',
  email: '',
  phoneNum: '',
  type: 1,
  school: ''
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