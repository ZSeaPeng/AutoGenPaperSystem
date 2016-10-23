import {
  RECEIVE_INITIAL_STATE,
  RECEIVE_SELECT,
  RECEIVE_QUESTION,
} from '../actions/actionCreators';
import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';

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

const rootReducer = combineReducers({
  grades,
  selects,
  questions,
  routing: routerReducer
});

export default rootReducer;