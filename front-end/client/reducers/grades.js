import { RECEIVE_INITIAL_STATE } from '../actions/actionCreators';

function grades(state = [], action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return [
        action.posts
      ];
    default:
      return state;
  }
};

export default grades;