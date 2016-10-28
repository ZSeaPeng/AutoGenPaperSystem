import { ADD, REMOVE } from '../actions/actionCreators'

function aktion(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ... state,
        action.id
      ]
    case REMOVE:
      return [
        ...state.slice(0, state.indexOf(action.id)),
        ...state.slice(state.indexOf(action.id) + 1)
      ]
    default:
      return state;
  }
}

export default aktion;