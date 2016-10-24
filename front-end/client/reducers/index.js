import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import grades from './grades'
import questions from './questions'
import selects from './selects'
import add from './add'

const rootReducer = combineReducers({
  grades,
  selects,
  questions,
  add,
  routing: routerReducer
})

export default rootReducer