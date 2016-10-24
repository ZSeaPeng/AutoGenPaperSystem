import { RECEIVE_SELECT } from '../actions/actionCreators';

function selects(state = [], action) {
  switch (action.type) {
    case RECEIVE_SELECT:
      return [
        action.posts
      ];
    default:
      return state;
  }
};

export default selects;