import { COURSELIST, CREATECOURSE, DELETECOURSE, CREATENODE, DELETENODE } from '../actions/actionCreators';

function courseList(state=[], action) {
  switch (action.type) {
    case COURSELIST:
      return [
        ...action.posts
      ];
    case CREATECOURSE:
      return [
        ...state,
        action.details
      ];
    case DELETECOURSE:
      return [
        ...action.slice(0, action.details.i),
        ...action.slcie(action.details.i + 1)
      ];
    case CREATENODE:
      return [
        ...action.details.json
      ];
    case DELETENODE:
      return [
        ...action.details.json
      ];
    default:
      return state;
  }
}

export default courseList;
