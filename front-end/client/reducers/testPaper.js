import { TESTPAPER, PAPERDOWN, PAPERUP, PAPERDELETE, PAPERUUP, PAPERDDOWN } from '../actions/actionCreators'

function testPaper(state={
  type: '单元测试',
  subName: '语文',
  questions:[]}, action) {
  switch (action.type) {
    case TESTPAPER:
      return {
        ...state,
        ...action.details,
      };
    case PAPERDELETE:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index),
          {
            ...state.questions[action.details.index],
            questions: [
              ...state.questions[action.details.index].questions.slice(0, action.details.i),
              ...state.questions[action.details.index].questions.slice(action.details.i + 1)
            ]
          },
          ...state.questions.slice(action.details.index + 1)
        ]
      };
    case PAPERUP:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index),
          {
            ...state.questions[action.details.index],
            questions: [
              ...state.questions[action.details.index].questions.slice(0, action.details.i - 1),
              state.questions[action.details.index].questions[action.details.i],
              state.questions[action.details.index].questions[action.details.i - 1],
              ...state.questions[action.details.index].questions.slice(action.details.i + 1)
            ]
          },
          ...state.questions.slice(action.details.index + 1)
        ]
      };
    case PAPERDOWN:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index),
          {
            ...state.questions[action.details.index],
            questions: [
              ...state.questions[action.details.index].questions.slice(0, action.details.i),
              state.questions[action.details.index].questions[action.details.i + 1],
              state.questions[action.details.index].questions[action.details.i],
              ...state.questions[action.details.index].questions.slice(action.details.i + 2)
            ]
          },
          ...state.questions.slice(action.details.index + 1)
        ]
      };
    case PAPERUUP:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index - 1),
          state.questions[action.details.index],
          state.questions[action.details.index - 1],
          ...state.questions.slice(action.details.index + 1)
        ]
      };
    case PAPERDDOWN:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index),
          state.questions[action.details.index + 1],
          state.questions[action.details.index],
          ...state.questions.slice(action.details.index + 2)
        ]
      };
    default:
      return state;
  }
}

export default testPaper;