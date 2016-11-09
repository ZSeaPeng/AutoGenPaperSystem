export const RECEIVE_INITIAL_STATE = 'RECEIVE_INITIAL_STATE';
export const RECEIVE_SELECT = 'RECEIVE_SELECT';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const REMOVEALL = 'REMOVEALL';
export const DOWNLOAD = 'DOWNLOAD';
export const COLLECTION = 'COLLECTION';
export const DISCOLL = 'DISCOLL';
export const TOGGLE = 'TOGGLE';

// send to the reducer
export const recevieInitialState = json => ({
    type: RECEIVE_INITIAL_STATE,
    posts: json
});


export const recevieSelect = json => ({
    type: RECEIVE_SELECT,
    posts: json
});

export const recevieQuestion = json => ({
    type: RECEIVE_QUESTION,
    posts: json
});

export const add = details => ({
    type: ADD,
    details
})

export const remove = details => ({
    type: REMOVE,
    details
})

export const removeAll = () => ({
  type: REMOVEALL
})

export const download = details => ({
    type: DOWNLOAD,
    details
})

export const collection = details => ({
    type: COLLECTION,
    details
})

export const discoll = details => ({
  type: DISCOLL,
  details
})

export const toggle = details => ({
  type: TOGGLE,
  details
})

//asyn
//fetch state for the index page
export const getInitialState = () => dispatch => {
    return fetch('http://104.236.165.244:8111/AutoGenPaperSystem/api/subjectlist')
        .then( response => response.json())
        .then( json =>
          dispatch(recevieInitialState(json))
        )
};

//fetch state for all the sellections
export const getSelect = url => dispatch => {
    return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api${url}`)
        .then( response => response.json())
        .then( json =>
          dispatch(recevieSelect(json))
        )
};

//fetch questions you need
export const getQuestion = (url, query="?page=1") => dispatch => {
    return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api${url}/question${query}`)
        .then( response => response.json())
        .then( json =>
          dispatch(recevieQuestion(json))
        )
};

export const asynAdd = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/question/add`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=0'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(add(json))
    )
};

export const asynRemove = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/question/remove`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=' + details.k
  })
    .then(response => response.json())
    .then(json =>
      dispatch(remove(json))
    )
};

export const asynCollection = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/question/save`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=0'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(collection(json))
    )
};

export const asynDiscoll = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/question/delete`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=' + details.k
  })
    .then(response => response.json())
    .then(json =>
      dispatch(discoll(json))
    )
};

export const asynRemoveAll = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/question/allremove`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid
  })
    .then(response => response.json())
    .then(json =>
      dispatch(removeAll())
    )
};

// export const asynSubmit = ()

export const login = (username, password) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(response => response.json())
    .then(json =>
      console.log(json))
    .catch(e =>
      console.log(e))
  // console.log(username, password)
}
