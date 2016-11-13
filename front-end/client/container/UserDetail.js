import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import ChosenChip from '../components/ChosenChip';
import UnChosenChip from '../components/UnChosenChip';

import { asynRemoveSubject, addSubPre, removeSubPre, asynChange, asynDeleteUser } from '../actions/actionCreators';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    maxWidth: "30%",
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
      password: ''
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleExpand() {
    this.setState({expanded: !this.state.expanded})
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  handleDelete() {
    const { user, dispatch, i } = this.props;
    dispatch(asynDeleteUser({userId: user.userId, k: i}))
  }

  handleChange(detail, type) {
    const { dispatch, user, i } = this.props;
    if (type === 'delete') {
      console.log({...detail, k: i});
      dispatch(asynRemoveSubject({...detail, k: i}))
    } else if (type === 'add') {
      if(user.add.indexOf(detail) == -1) {
        dispatch(addSubPre({subid:detail, i: i}))
      } else {
      const k = user.add.indexOf(detail);
      dispatch(removeSubPre({i: i, k: k}))
      }
    }
  }

  handleSubmit() {
    const { user, i, dispatch } = this.props;
    var username = this.state.username;
    var password = this.state.password;
    if(username === "" && password === "") {
      dispatch(asynChange({user: user, k: i}))
    } else if (username === "" && password != "") {
      dispatch(asynChange({user: {...user, userpassword: password}, k: i}))
    } else if (username != "" && password === "") {
      dispatch(asynChange({user: {...user, username: username}, k: i}))
    }
   }

  render() {
    const { user, sublist } = this.props;
    var subject = [], nosub = [];
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
      <Card style={styles.card} expanded={this.state.expanded}>
        <CardHeader
          avatar=""
          title={user.username}
          subtitle={`密码: ${user.userpassword}`}
        />
        <div style={styles.wrapper}>
          {subject.map((sub, i) =>
            <ChosenChip key={i} i={i} sub={sub} user={user} onChange={this.handleChange}/>)}
        </div>
        <CardActions>
          <FlatButton label="删除此用户"  secondary={true} onClick={this.handleDelete}/>
          <FlatButton label="修改用户资料" primary={true} onTouchTap={this.handleExpand}/>
        </CardActions>
        <CardText expandable={true}>
          <TextField
            hintText={user.username}
            floatingLabelText="用户名"
            floatingLabelFixed={true}
            onChange={ this.usernameChange }
          /><br />
          <TextField
            hintText={user.userpassword}
            floatingLabelText="密码"
            floatingLabelFixed={true}
            onChange={ this.passwordChange }
          /><br />
          <div>点击以添加</div>
          <div style={styles.wrapper}>
            {nosub.map((sub, i) =>
              <UnChosenChip key={i} i={i} sub={sub} user={user} onChange={this.handleChange}/>)}
          </div>
          <RaisedButton label="确认修改" fullWidth={true} secondary={true} onClick={this.handleSubmit}/>
        </CardText>
      </Card>
    )
  }
}

export default UserDetail;