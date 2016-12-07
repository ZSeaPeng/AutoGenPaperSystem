import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import ChosenChip from '../components/ChosenChip';
import UnChosenChip from '../components/UnChosenChip';

import { asynRemoveSubject, addSubPre, removeSubPre, asynChange, asynDeleteUser } from '../actions/actionCreators';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    width: "30%",
    margin: 10,
    display: 'inline-block'
  }
};

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      username: '',
      password: '',
      open: false,
      sub: [],
      count: [],
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleExpand() {
    this.setState({open: !this.state.open})
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  handleDelete() {
    const { user, dispatch, i } = this.props;
    dispatch(asynDeleteUser({userId: user.userId, username: user.username, k: i}));
  }

  handleClose() {
    this.state.count = [];
    this.state.sub=[];
    this.setState({open: false});
  };

  handleChange(detail, type) {
    const { dispatch, user, i } = this.props;
    let { sub, count } = this.state;
    if (type === 'delete') {
      dispatch(asynRemoveSubject({...detail, k: i}))
    } else if (type === 'add') {
      if(sub.indexOf(detail.id) < 0) {
        sub.push(detail.id);
      }
      count[detail.id]=detail.count;
    }
  }

  handleSubmit() {
    const { user, i, dispatch, userList } = this.props;
    const username = this.state.username;
    const password = this.state.password;
    const reg = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
    let count = 0;
    for(let i = 0; i < this.state.count.length; i++) {
      if(this.state.count[i] === undefined ) {
        this.state.count = [...this.state.count.slice(0, i),...this.state.count.slice(i + 1)];
        i--;
      }
    }
    if(username === "" && password === "") {
      dispatch(asynChange({user: {...user, add: this.state.sub, count: this.state.count}, k: i}))
    } else if (username === "" && password != "") {
      if(!reg.test(password) || password.length < 8) {
        alert('密码强度太低，请至少八位，并包含字母数字');
        return ;
      } else {
        dispatch(asynChange({user: {...user, add: this.state.sub, count: this.state.count, userpassword: password}, k: i}))
      }
    } else if (username != "" && password === "") {
      for (let i = 0; i < userList.old.length; i++) {
        if (username === userList.old[i].username) {
          count++;
          alert('用户名重复');
          return ;
        }
      }
      if( count === 0) {
        dispatch(asynChange({user: {...user, add: this.state.sub, count: this.state.count, username: username}, k: i}));
      }
    }
    this.state.count = [];
    this.state.sub=[];
    this.setState({open: false});
  }

  render() {
    const { user, sublist } = this.props;
    let subject = [], nosub = [];
    const subjectCan = user.subjectcan.split(",");

    for(let i = 1; i < subjectCan.length; i++ ) {
      for (let j = 0; j < sublist[0].contextList.length; j++) {
        if(subjectCan[i] == sublist[0].contextList[j].subid) {
          subject.push({ context: sublist[0].contextList[j].context, subid: sublist[0].contextList[j].subid });
        }
      }
    }

    let k = 0;
    for(let i = 0; i < sublist[0].contextList.length; i++) {
      for (let j = 0; j < subject.length; j++) {
        if(subject[j].subid === sublist[0].contextList[i].subid) {
          k++;
        }
      }
      if(k === 0) {
        nosub.push({context: sublist[0].contextList[i].context, subid: sublist[0].contextList[i].subid})
      }
      k = 0;
    }

    return (
      <div style={styles.card}>
        <Card expanded={this.state.expanded}>
          <CardHeader
            avatar=""
            title={user.username}
          />
          <div style={styles.wrapper}>
            {subject.map((sub, i) =>
              <ChosenChip key={i} i={i} sub={sub} user={user} onChange={this.handleChange}/>)}
          </div>
          <CardActions>
            <FlatButton label="删除此用户"  secondary={true} onClick={this.handleDelete}/>
            <FlatButton label="修改用户资料" primary={true} onTouchTap={this.handleExpand}/>
          </CardActions>
        </Card>
        <Dialog
          title="修改用户资料"
          actions={[<RaisedButton label="确认修改" fullWidth={true} secondary={true} onClick={this.handleSubmit}/>]}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
          <TextField
            hintText={user.username}
            floatingLabelText="用户名"
            floatingLabelFixed={true}
            onChange={ this.usernameChange }
          /><br />
          <TextField
            hintText="........"
            floatingLabelText="密码"
            floatingLabelFixed={true}
            onChange={ this.passwordChange }
          /><br />
          <div>点击以添加</div>
          <div style={styles.wrapper}>
            {nosub.map((sub, i) =>
              <UnChosenChip key={i} i={i} sub={sub} user={user} onChange={this.handleChange}/>)}
          </div>
          {/*<RaisedButton label="确认修改" fullWidth={true} secondary={true} onClick={this.handleSubmit}/>*/}
        </Dialog>
      </div>
    )
  }
}

export default UserDetail;