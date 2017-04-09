import { history } from '../store';
import { browserHistory } from 'react-router';

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
export const LOGINERROR = 'LOGINERROR';
export const LOGOUT = 'LOGOUT';
export const USERLIST = 'USERLIST';
export const COURSELIST = 'COURSELIST';
export const REMOVESUBJECT = 'REMOVESUBJECT';
export const ADDSUBPRE = 'ADDSUBPRE';
export const ADDNEWSUBPRE = 'ADDNEWSUBPRE';
export const REMOVESUBPRE = 'REMOVESUBPRE';
export const REMOVENEWSUBPRE = 'REMOVENEWSUBPRE';
export const USERCHANGE = 'USERCHANGE';
export const DELETEUSER = 'DELETEUSER';
export const CREATEUSER = 'CREATEUSER';
export const CREATECOURSE = 'CREATECOURSE';
export const DELETECOURSE = 'DELETECOURSE';
export const CREATENODE = 'CREATENODE';
export const DELETENODE = 'CREATENODE';
export const TESTPAPER = 'TESTPAPER';
export const PAPERDOWN = 'PAPERDOWN';
export const PAPERUP = 'PAPERUP';
export const PAPERDDOWN = 'PAPERDDOWN';
export const PAPERDELETE = 'PAPERDELETE';
export const PAPERUUP = 'PAPERUUP';
export const RECEIVE_USERINFO = 'RECEIVE_USERINFO';
export const CLEAR = 'CLEAR';
export const SUBUSER = 'GETSUBUSER';
export const CREATESUBUSER = 'CREATESUBUSER';
export const DELETESUBUSER = 'DELETESUBUSER';
export const CHANGEUSERINFO = 'CHANGEUSERINFO';
export const GETPAPER = 'GETPAPER';
export const POSITIONCHANGE = 'POSITIONCHANGE';
export const SCORECHANGE = 'SCORECHANGE';
export const CHANGEPAPERNAME = 'CHANGEPAPERNAME'

let port = "http://localhost:8111";

/**
 * 真正与reducer沟通的函数
 * */
export const changePaperName = paperName => ({
  type: CHANGEPAPERNAME,
  paperName
})

export const scoreChange = details => ({
  type: SCORECHANGE,
  details
})
export const getPaper = json => ({
  type: GETPAPER,
  json
})
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

export const courseList = json => ({
  type: COURSELIST,
  posts: json
});

//登录动作
export const login = json => ({
  type: LOGIN,
  posts: json
});

export const loginError = details => ({
  type: LOGINERROR,
  details
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

export const deleteSubUser = details => ({
  type: DELETESUBUSER,
  details
});

//管理员添加新用户
export const createUser = details => ({
  type: CREATEUSER,
  details
});

//添加新科目
export const createCourse = details => ({
  type: CREATECOURSE,
  details
});

//删除科目
export const deleteCourse = details => ({
  type: DELETECOURSE,
  details
});

//创建节点
export const createNode = details => ({
  type: CREATENODE,
  details
});

//删除节点
export const deleteNode = details => ({
  type: DELETENODE,
  details
});

//试卷预览界面初始数据
export const testPaper = details => ({
  type: TESTPAPER,
  details
});

export const paperDelete = details => ({
  type: PAPERDELETE,
  details
});

export const paperUp = details => ({
  type: PAPERUP,
  details
});

export const paperDown = details => ({
  type: PAPERDOWN,
  details
});

export const paperUup = details => ({
  type: PAPERUUP,
  details
});

export const paperDdown = details => ({
  type: PAPERDDOWN,
  details
});

export const recevieUserInfo = details => ({
  type: RECEIVE_USERINFO,
  details
});

export const logout = details => ({
  type: LOGOUT,
  details
});

export const clear = details => ({
  type: CLEAR
});

export const subUser = details => ({
  type: SUBUSER,
  details
})

export const createSubUser = details => ({
  type: CREATESUBUSER,
  details
})

export const changeUserInfo = details => ({
  type: CHANGEUSERINFO,
  details
})

export const positionChange = details => ({
  type: POSITIONCHANGE,
  details
})

/*
* 异步动作
* redux 本身没有异步处理能力, 这里用了中间件thunk
* */
//对应recevieInitialState()
export const getInitialState = () => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/subjectlist`)
    .then( response => response.json())
    .then( json =>
    {
      if (sessionStorage.getItem('userid') !== null) {
        json = { ...json, userid: sessionStorage.getItem('userid'), username: sessionStorage.getItem('username') };
      } else {
        json = { ...json, username: '' };
      }
      dispatch(recevieInitialState(json))
    }
    )
};

//对应recevieSelect()
export const getSelect = url => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api${url}`, {
    method: 'GET',
    credentials: 'include'
  })
    .then( response => response.json())
    .then( json =>
      dispatch(recevieSelect(json))
    )
};

//对应recevieQuestion()
export const getQuestion = (url, query="?page=1") => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api${url}/question${query}`, {
    method: 'GET',
    credentials: 'include'
  })
    .then( response => response.json())
    .then( json =>
      dispatch(recevieQuestion(json))
    )
};

export const getCollection = (url, query="?page=1") => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api${url}/question${query}`, {
    method: 'GET',
    credentials: 'include'
  })
    .then( response => response.json())
    .then( json => {
      let userCollection = []
      for(let i = 0; i < json.length; i++) {
        userCollection.push(json[i].id)
      }
      json = {context: [ ...json], userChosen: [], userCollection}
      dispatch(recevieQuestion(json))
      }
    )
};

//对应userList()
export const getUserList = () => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/userlist`, {
    method: 'GET',
    credentials: 'include'
  })
    .then( response =>
      {
        if(response.status !== 200) {
          history.push('/adminlogin');
          return;
      }
      response.json()
    .then( json =>
      dispatch(userList(json))
    )})
};

export const getSubUser = () => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/subuser`, {
    method: 'GET',
    credentials: 'include'
  })
    .then( response =>
      {
        if(response.status !== 200) {
          history.push('/adminlogin');
          return;
      }
      response.json()
    .then( json =>
      dispatch(subUser(json))
    )})
}

export const getCourseList = () => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/courselist`, {
    method: 'GET',
    credentials: 'include'
  })
    .then( response =>
      response.json())
    .then( json =>
        dispatch(courseList(json))
    );
};

//对应add()
export const asynAdd = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/question/add`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=0',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(add(json))
    )
};

//对应remove()
export const asynRemove = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/question/remove`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=' + details.k,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(remove(json))
    )
};

//对应collection()
export const asynCollection = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/question/save`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=0',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(collection(json))
    )
};

//对应discoll()
export const asynDiscoll = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/question/delete`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid + '&qid=' + details.id + '&k=' + details.k,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(discoll(json))
    )
};

//对应removeAll()
export const asynRemoveAll = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/question/allremove`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userid,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(removeAll())
    )
};

//对应removeSubject()
export const asynRemoveSubject = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/removesubjectcan`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userId + '&subid=' + details.subid + '&i=' + details.i + '&k=' + details.k,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(removeSubject(json))
    )
};

//对应change()
export const asynChange = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/change`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      ...details.user,
    }),
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(userChange({user:json, k: details.k}))
    )
};

//对应deleteUser()
export const asynDeleteUser = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/deleteuser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userId,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(deleteUser({...details}))
    )
};

export const asynDeleteSubUser = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/deleteuser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'userid=' + details.userId,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(deleteSubUser({...details}))
    )
};

//对应createUser()
export const asynCreateUser = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/adduser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      ...details
    }),
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(createUser(json))
    )
};

export const asynCreateSubUser = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/adduser`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      ...details
    }),
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(createSubUser(json))
    )
};


//对应createCourse()
export const asynCreateCourse = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/addcourse`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'course=' + details,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(createCourse(json))
    )
};

//对应deleteCourse()
export const asynDeleteCourse = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/deletecourse`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'subName=' + details.subName,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(deleteCourse({json: json, i: details.i}))
    )
};

//对应createNode()
export const asynCreateNode = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/addpoint`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'subName=' + details.subName + '&id=' + details.id + '&point=' + details.point,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(createNode({json: json, i: details.i}))
    )
};

//对应deleteNode()
export const asynDeleteNode = (details) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/deletepoint`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'pointid=' + details.id,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(deleteNode({json: json, i: details.i}))
    )
};

//对应testPaper()
export const getTestPaper = () => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/paper/getinfo`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(testPaper(json))
    )
};

export const getOldTestPaper = (query="?paper=1") => dispatch => {
    return fetch(`${port}/AutoGenPaperSystem/api/testpaper${query}`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(testPaper(json))
    )
};

export const finalAction = (array) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/paper/makepaper`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(array),
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(getPaper(json))
    )
};

//user change password himself
export const asynUserChange = (password) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/user/change`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({password}),
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json => {
        if(json.success === 'true') {
          dispatch(logout(json));
          history.push('/');
        }
      }
    )
}

//user change info himself
//noinspection JSAnnotator
export const asynChangeInfo = (email: '', phone: '') => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/user/changeinfo`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({email, phone}),
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(changeUserInfo(json))
    )
}

//get userinfo of himself
export const asynRecUserInfo = () => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/user/show`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      dispatch(recevieUserInfo(json))
    )
};

//对应login()
export const asynLogin = (username, password, type) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'username=' + username + '&password=' + password + '&type=' + type,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json => {
        if('error' in json) {
          dispatch(loginError(json))
        } else {
          window.sessionStorage.setItem('userid', json.userId)
          window.sessionStorage.setItem('username', json.username)
          dispatch(login(json))
          history.push('/index')
        }
      }
    )
};

export const adminLogin = (username, password) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/admin/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'username=' + username + '&password=' + password,
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json => {
        if('error' in json) {
          dispatch(loginError(json))
        } else {
          window.sessionStorage.setItem('userid', 0)
          window.sessionStorage.setItem('username', json.username)
          dispatch(login({username: json.username, userId: 0}));
          history.push('/admin')
        }
      }
    )
};

export const asynLogout = () => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/logout`, {
    method: 'GET',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json => {
      window.sessionStorage.clear();
      dispatch(logout(json));
      history.push('/')
    })
};

export const submitModel = (wordtype, subid) => dispatch => {
    return fetch(`${port}/AutoGenPaperSystem/api/combine/manual`,
      {
        method:'post',
        headers:{
          // 'Accept': 'application/json',
          // "Content-type":"application:/x-www-form-urlencoded:charset=UTF-8"
          'Accept': 'application/json, text/plain, */*',
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `subid=${subid}&wordtype=${wordtype}`
      })
        .then(response => response.json())
        .then(json =>
            browserHistory.push(json.url))

};

export const submitWordInfo = (wordInfo) => dispatch => {
  return fetch(`${port}/AutoGenPaperSystem/api/combine/auto`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      ...wordInfo
    })
  })
    .then(response => response.json())
    .then(json => dispatch(testPaper(json)))
    .then(browserHistory.push("/wait"))
};
