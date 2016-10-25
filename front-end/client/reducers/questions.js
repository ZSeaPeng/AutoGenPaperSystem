import { RECEIVE_QUESTION } from '../actions/actionCreators';

function questions(state = [], action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return [
        action.posts
      ];
    default:
      return state;
  }
};

export default questions;