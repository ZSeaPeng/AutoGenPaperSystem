import { RECEIVE_SELECT } from '../actions/actionCreators';

function selects(state = {
  Types: [],
  Points: [],
  Charaction: [],
  Difficulty: []}, action) {
  switch (action.type) {
    case RECEIVE_SELECT:
      return {
        Types: [ ...action.posts.Types ],
        Points: [ ...action.posts.Points ],
        Charaction: [ ...action.posts.Charaction ],
        Difficulty: [ ...action.posts.Difficulty ],
      };
    default:
      return state;
  }
}

export default selects;