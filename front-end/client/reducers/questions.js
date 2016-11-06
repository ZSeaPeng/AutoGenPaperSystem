import { RECEIVE_QUESTION, TOGGLE, ADD, REMOVE, REMOVEALL, COLLECTION, DISCOLL } from '../actions/actionCreators';

function questions(state = { context: [], pageNum: 1, pages: 1, userChosen: [], userCollection: [] }, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        context: [
          ...action.posts.context
        ],
        pageNum: action.posts.pageNum,
        pages: action.posts.pages,
        userChosen: [
          ...action.posts.userChosen
        ],
        userCollection: [
          ...action.posts.userCollection
        ]
      };
    case TOGGLE:
      return {
        ... state,
        context: [
          ...state.context.slice(0, action.details.i),
          {
            ...state.context[action.details.i],
            expanded: action.details.toggle
          },
          ...state.context.slice(action.details.i + 1)
        ]
      };
    case ADD:
      return {
        ...state,
        userChosen: [
          ...state.userChosen,
          {
            id: action.details.id,
            type: action.details.userid
          }
        ]
      };
    case REMOVE:
      return {
        ...state,
        userChosen: [
          ...state.userChosen.slice(0, action.details.k),
          ...state.userChosen.slice(action.details.k + 1)
        ]
      };
    case REMOVEALL:
      return {
        ...state,
        userChosen: []
      }
    case COLLECTION:
      return {
        ... state,
        userCollection: [
          ...state.userCollection,
          action.details.id
        ]
      };
    case DISCOLL:
      return {
        ...state,
        userCollection: [
          ...state.userCollection.slice(0, action.details.k),
          ...state.userCollection.slice(action.details.k + 1)
        ]
      };
    default:
      return state;
  }
};

export default questions;