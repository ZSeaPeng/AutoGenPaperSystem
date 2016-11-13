import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import grades from './grades'
import questions from './questions'
import selects from './selects'
import userList from './userList'

const rootReducer = combineReducers({
  grades,
  selects,
  questions,
  userList,
  routing: routerReducer
})

export default rootReducer