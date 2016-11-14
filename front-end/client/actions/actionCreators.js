/**
 * 本项用于定义用户的各种动作
 * */
export const RECEIVE_INITIAL_STATE = 'RECEIVE_INITIAL_STATE';
export const RECEIVE_SELECT = 'RECEIVE_SELECT';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const REMOVEALL = 'REMOVEALL';
export const COLLECTION = 'COLLECTION';
export const DISCOLL = 'DISCOLL';
export const TOGGLE = 'TOGGLE';
export const LOGIN = 'LOGIN';
export const USERLIST = 'USERLIST';
export const REMOVESUBJECT = 'REMOVESUBJECT';
export const ADDSUBPRE = 'ADDSUBPRE';
export const ADDNEWSUBPRE = 'ADDNEWSUBPRE';
export const REMOVESUBPRE = 'REMOVESUBPRE';
export const REMOVENEWSUBPRE = 'REMOVENEWSUBPRE';
export const USERCHANGE = 'USERCHANGE';
export const DELETEUSER = 'DELETEUSER';
export const CREATEUSER = 'CREATEUSER';

/**
 * 真正与reducer沟通的函数
 * */
//首页科目列表, 更新数据, 轮播图链接
export const recevieInitialState = json => ({
  type: RECEIVE_INITIAL_STATE,
  posts: json
});

//选题界面的各种选项
export const recevieSelect = json => ({
  type: RECEIVE_SELECT,
  posts: json
});

//选题界面的各种题目,同时包括页码信息
export const recevieQuestion = json => ({
  type: RECEIVE_QUESTION,
  posts: json
});

//管理员管理用户接面所需的各种用户资料
export const userList = json => ({
  type: USERLIST,
  posts: json
});

//登录动作
export const login = json => ({
  type: LOGIN,
  posts: json
});

//选课界面添加题目
export const add = details => ({
  type: ADD,
  details
});

//选课界面取消添加题目
export const remove = details => ({
  type: REMOVE,
  details
});

//选课界面取消添加的所有题目
export const removeAll = () => ({
  type: REMOVEALL
});

//选课界面收藏题目
export const collection = details => ({
  type: COLLECTION,
  details
});

//选课界面取消收藏题目
export const discoll = details => ({
  type: DISCOLL,
  details
});

//选课界面查看答案动作
export const toggle = details => ({
  type: TOGGLE,
  details
});

//管理员取消用户对某项科目的使用权限
export const removeSubject = details => ({
  type: REMOVESUBJECT,
  details
});

//管理员对用户预添加科目使用权限
export const addSubPre = details => ({
  type: ADDSUBPRE,
  details
});

//管理员对新用户预添加科目使用权限
export const addNewSubPre = details => ({
  type: ADDNEWSUBPRE,
  details
});

//管理员对用户取消预添加科目使用权限
export const removeSubPre = details => ({
  type: REMOVESUBPRE,
  details
});

//管理员对新用户取消预添加科目使用权限
export const removeNewSubPre = details => ({
  type: REMOVENEWSUBPRE,
  details
});

//管理员改变用户信息
export const userChange = details => ({
  type: USERCHANGE,
  details
});

//管理员删除某用户
export const deleteUser = details => ({
  type: DELETEUSER,
  details
});

//管理员添加新用户
export const createUser = details => ({
  type: CREATEUSER,
  details
});

/*
* 异步动作
* redux 本身没有异步处理能力, 这里用了中间件thunk
* */
//对应recevieInitialState()
export const getInitialState = () => dispatch => {
  return fetch('http://104.236.165.244:8111/AutoGenPaperSystem/api/subjectlist')
    .then( response => response.json())
    .then( json =>
      dispatch(recevieInitialState(json))
    )
};

//对应recevieSelect()
export const getSelect = url => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api${url}`)
    .then( response => response.json())
    .then( json =>
      dispatch(recevieSelect(json))
    )
};

//对应recevieQuestion()
export const getQuestion = (url, query="?page=1") => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api${url}/question${query}`)
    .then( response => response.json())
    .then( json =>
      dispatch(recevieQuestion(json))
    )
};

//对应userList()
export const getUserList = () => dispatch => {
  return fetch('http://104.236.165.244:8111/AutoGenPaperSystem/api/admin/userlist')
    .then( response => response.json())
    .then( json =>
      dispatch(userList(json))
    )
};

//对应add()
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

//对应remove()
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

//对应collection()
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

//对应discoll()
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

//对应removeAll()
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

//对应removeSubject()
export const asynRemoveSubject = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/admin/removesubjectcan`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userId + '&subid=' + details.subid + '&i=' + details.i + '&k=' + details.k
  })
    .then(response => response.json())
    .then(json =>
      dispatch(removeSubject(json))
    )
};

//对应change()
export const asynChange = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/admin/change`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      ...details.user,
    })
  })
    .then(response => response.json())
    .then(json =>
      dispatch(userChange({user:json, k: details.k}))
    )
};

//对应deleteUser()
export const asynDeleteUser = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/admin/deleteuser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userId
  })
    .then(response => response.json())
    .then(json =>
      dispatch(deleteUser({json, k: details.k}))
    )
};

//对应createUser()
export const asynCreateUser = (details) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/admin/createuser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      ...details
    })
  })
    .then(response => response.json())
    .then(json =>
      dispatch(createUser(json))
    )
};

//对应login()
export const asynLogin = (username, password) => dispatch => {
  return fetch(`http://104.236.165.244:8111/AutoGenPaperSystem/api/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + username + '&password=' + password
  })
    .then(response => response.json())
    .then(json =>
      dispatch(login(json))
    )
};
