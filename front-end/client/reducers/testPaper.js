import { TESTPAPER, CHANGELENGTH, CHANGEOTHERS, CHANGERADIOS } from '../actions/actionCreators'

function testPaper(state={
  type: '单元测试',
  subName: '语文',
  questions:[],
  radios: [],
  others: [],
  length: 0}, action) {
  switch (action.type) {
    case TESTPAPER:
      return {
        ...state,
        ...action.details,
      };
    case CHANGELENGTH:
      return {
        ...state,
        length: length + 1
      };
    case CHANGERADIOS:
      return {
        ...state,
        radios: [
          ...state.radios,
          ...action.details
        ]
      };
    case CHANGEOTHERS:
      return {
        ...state,
        others: [
          ...state.others,
          action.details
        ]
      };
    default:
      return state;
  }
}

export default testPaper;