import { ADD } from '../actions/actionCreators'

function add(state = 0, action) {
  switch (action.type) {
    case ADD:
      return action.id;
    default:
      return state;
  }
}

export default add;