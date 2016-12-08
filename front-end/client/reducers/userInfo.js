import { RECEIVE_USERINFO, CHANGEUSERINFO } from '../actions/actionCreators';

function userInfo(state={
  username: "",
  subjectcan: '',
  usercollection: '',
  email: '',
  phoneNum: '',
  type: 1,
  school: '',
  downloadable: 0
}, action) {
  switch(action.type) {
    case RECEIVE_USERINFO:
      return {
        username: action.details.username,
        subjectcan: action.details.subjectcan,
        usercollection: action.details.usercollection,
        email: action.details.email,
        phoneNum: action.details.phonenum,
        type: action.details.commanagerId,
        school: action.details.school,
        downloadable: action.details.downloadable
      };
    case CHANGEUSERINFO:
      return {
        username: action.details.username,
        subjectcan: action.details.subjectcan,
        usercollection: action.details.usercollection,
        email: action.details.email,
        phoneNum: action.details.phonenum,
        type: action.details.commanagerId,
        school: action.details.school,
        downloadable: action.details.downloadable
      }
    default:
      return state;
  }
}

export default userInfo;