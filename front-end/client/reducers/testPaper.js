import { TESTPAPER, PAPERDOWN, PAPERUP, PAPERDELETE, PAPERUUP, PAPERDDOWN, GETPAPER, POSITIONCHANGE, SCORECHANGE, CHANGEPAPERNAME, RAMDOMCHANGE } from '../actions/actionCreators'

function testPaper(state={
  type: '单元测试',
  subName: '语文',
  subid: 0,
  paperName: '',
  questions:[],
  qurl: "",
  aurl: ""}, action) {
  switch (action.type) {
    case CHANGEPAPERNAME:
      return {
        ...state,
        paperName: action.paperName
      }
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
    case POSITIONCHANGE:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index),
          {
            ...state.questions[action.details.index],
            questions: [
              ...state.questions[action.details.index].questions.slice(0, action.details.number ),
              state.questions[action.details.index].questions[action.details.i],
              ...state.questions[action.details.index].questions.slice(action.details.number)
            ]
          },
          ...state.questions.slice(action.details.index + 1)
        ]
      }
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
    case GETPAPER:
      return {
        ...state,
        qurl: action.json.qurl,
        aurl: action.json.aurl
      }
    case SCORECHANGE:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index),
          {
            ...state.questions[action.details.index],
            score: action.details.score
          },        
          ...state.questions.slice(action.details.index + 1)
        ]
      }
    case RAMDOMCHANGE:
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, action.details.index),
          {
            ...state.questions[action.details.index],
            questions: [
              ...state.questions[action.details.index].questions.slice(0, action.details.i ),
              action.details.json,
              ...state.questions[action.details.index].questions.slice(action.details.i)
            ]
          },
          ...state.questions.slice(action.details.index + 1)
        ]
      }
    default:
      return state;
  }
}

export default testPaper;
