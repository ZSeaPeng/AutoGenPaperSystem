import { RECEIVE_USERINFO, CHANGEUSERINFO,UNCOLL, RECEIVE_COMMANAGERINFO } from '../actions/actionCreators';

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
        userid: action.details.userid,
        username: action.details.username,
        subjectcanList: action.details.subjectcanList,
        dopaper: action.details.dopaper,
        collectionMap: action.details.collectionMap,
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
        userid: action.details.commanagerId,
        username: action.details.commanagerName,
        dopaper: action.details.dopaper,
        allowpaper: action.details.allowpaper,
        historyPaper: action.details.historyPaper,
        school:  action.details.historyPaper,
        subjectcanList: action.details.subjectcanList,
        userJsonList: action.details.userJsonList,
      };

    case CHANGEUSERINFO:
      return {
        ...state,
        username: action.details.username,
        email: action.details.email,
        phoneNum: action.details.phonenum,
        school: action.details.school
      };
    case UNCOLL:
      return {
        ...state,
        collectionMap: [
          ...state.collectionMap.slice(0, action.details.k),
          ...state.collectionMap.slice(action.details.k + 1)
        ]
      };
    default:
      return state;
  }
}

export default userInfo;
