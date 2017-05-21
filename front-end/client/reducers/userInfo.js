import { RECEIVE_USERINFO, CHANGEUSERINFO,RECEIVE_COMMANAGERINFO } from '../actions/actionCreators';

function userInfo(state={
  username: "",
  subjectcan: '',
  allowpaper: '',
  usercollection: '',
  email: '',
  phoneNum: '',
  type: 1,
  school: '',
  downloadable: 0,
  historyPaper: []
}, action) {
  switch(action.type) {
    case RECEIVE_USERINFO:
      return {
        username: action.details.username,
        subjectcan: action.details.subjectcan,
        usercollection: action.details.usercollection,
        allowpaper: action.details.allowpaper,
        email: action.details.email,
        phoneNum: action.details.phonenum,
        type: action.details.commanagerId,
        school: action.details.school,
        downloadable: action.details.downloadable,
        historyPaper: [...action.details.historyPaper],
      };

    case RECEIVE_COMMANAGERINFO:
      return {
        username: action.details.commanagerName,
        dopaper: action.details.dopaper,
        allowpaper: action.details.allowpaper,
        historyPaper: action.details.historyPaper,
        school:  action.details.historyPaper,
        subjectcan: action.details.subjectcan,
        userJsonList: action.details.userJsonList,
      };

    case CHANGEUSERINFO:
      return {
        username: action.details.username,
        subjectcan: action.details.subjectcan,
        usercollection: action.details.usercollection,
        allowpaper: action.details.allowpaper,
        email: action.details.email,
        phoneNum: action.details.phonenum,
        type: action.details.commanagerId,
        school: action.details.school,
        downloadable: action.details.downloadable,
        historyPaper: [...action.details.historyPaper]
      }
    default:
      return state;
  }
}

export default userInfo;
