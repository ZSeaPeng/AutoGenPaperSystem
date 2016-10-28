import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import grades from './grades'
import questions from './questions'
import selects from './selects'
import aktion from './aktion'

const rootReducer = combineReducers({
  grades,
  selects,
  questions,
  aktion,
  routing: routerReducer
})

export default rootReducer