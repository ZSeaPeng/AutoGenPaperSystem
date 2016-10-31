import { RECEIVE_QUESTION } from '../actions/actionCreators';

function questions(state = { context: [], pageNum: 1, pages: 1 }, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        context: [
          ...action.posts.context
        ],
        pageNum: action.posts.pageNum,
        pages: action.posts.pages
      };
    default:
      return state;
  }
};

export default questions;