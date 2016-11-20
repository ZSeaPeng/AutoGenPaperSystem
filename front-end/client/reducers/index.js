import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import grades from './grades'
import questions from './questions'
import selects from './selects'
import userList from './userList'
import courseList from './courseList';
import testPaper from './testPaper';

const rootReducer = combineReducers({
  grades,
  selects,
  questions,
  userList,
  courseList,
  testPaper,
  routing: routerReducer
});

export default rootReducer