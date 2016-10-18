// export const REQUEST = 'REQUEST';
export const RECEIVE_INITIAL_STATE = 'RECEIVE_INITIAL_STATE';
export const RECEIVE_SELECT = 'RECEIVE_SELECT';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

// export const request = () => ({
//     type: REQUEST
// });

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

export const getInitialState = () => dispatch => {
    // dispatch(request());
    return fetch('http://localhost:8111/AutoGenPaperSystem/api/subjectlist')
        .then( response => response.json())
        .then( json =>
            dispatch(recevieInitialState(json))
        )
};

export const getSelect = url => dispatch => {
    // dispatch(request());
    return fetch(`http://localhost:8111/AutoGenPaperSystem/api${url}`)
        .then( response => response.json())
        .then( json =>
            dispatch(recevieSelect(json))
        )
};

export const getQuestion = url => dispatch => {
    // dispatch(request());
    return fetch(`http://localhost:8111/AutoGenPaperSystem/api${url}/question?page=1`)
        .then( response => response.json())
        .then( json =>
            dispatch(recevieQuestion(json))
        )
};
