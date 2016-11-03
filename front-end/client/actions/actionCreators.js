export const RECEIVE_INITIAL_STATE = 'RECEIVE_INITIAL_STATE';
export const RECEIVE_SELECT = 'RECEIVE_SELECT';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const DOWNLOAD = 'DOWNLOAD';
export const COLLECTION = 'COLLECTION';

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

export const add = id => ({
    type: ADD,
    id
})

export const remove = id => ({
    type: REMOVE,
    id
})

export const download = id => ({
    type: DOWNLOAD,
    id
})

export const collection = id => ({
    type: COLLECTION,
    id
})

//asyn
//fetch state for the index page
export const getInitialState = () => dispatch => {
    return fetch('http://localhost:8110/AutoGenPaperSystem/api/subjectlist')
        .then( response => response.json())
        .then( json =>
            dispatch(recevieInitialState(json))
        )
};

//fetch state for all the sellections
export const getSelect = url => dispatch => {
    return fetch(`http://localhost:8110/AutoGenPaperSystem/api${url}`)
        .then( response => response.json())
        .then( json =>
            dispatch(recevieSelect(json))
        )
};

//fetch questions you need
export const getQuestion = (url, query="?page=1") => dispatch => {
    return fetch(`http://localhost:8110/AutoGenPaperSystem/api${url}/question${query}`)
        .then( response => response.json())
        .then( json =>
            dispatch(recevieQuestion(json))
        )
};