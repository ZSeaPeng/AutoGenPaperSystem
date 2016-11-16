import React, { Component } from 'react';
import { connect } from 'react-redux';

//UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

//add component
import UserDetail from './UserDetail';
import NewUserChip from '../components/NewUserChip'

//add action
import { getUserList, addNewSubPre, removeNewSubPre, asynCreateUser } from '../actions/actionCreators';

class ControlUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: false,
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddUser() {
    this.setState({type: !this.state.type})
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  handleChange(detail, type) {
    const { dispatch, userList } = this.props;
    let count = 0, k = 0;
    if(type === 'add') {
      for (let i = 0; i < userList.new.subjects.length; i++) {
        if(detail.subid === userList.new.subjects[i]) {
          count++;
          k = i;
        }
      }
      if(count === 0) {
        dispatch(addNewSubPre(detail));
      } else {
        dispatch(removeNewSubPre({...detail, k: k}))
      }
    }
  }

  handleSubmit() {
    const { username, password } = this.state;
    const { userList, dispatch } = this.props;
    let count = 0;
    let subject = '0,' + userList.new.subjects.toString();
    let reg = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
    if( username === '' || password === '') {
      count++;
      alert('用户名或密码不能为空');
    }
    if(!reg.test(password) || password.length < 8) {
      count++;
      alert('密码强度太低，请至少八位，并包含字母数字')
    }
    for (let i = 0; i < userList.old.length; i++) {
      if (username === userList.old[i].username) {
        count++;
        alert('用户名重复');
      }
    }
    if(count === 0) {
      dispatch(asynCreateUser({username: username, userpassword: password, subjectcan: subject}));
      this.setState({type: !this.state.type})
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserList());
  }

  render() {
    const { userList, sublist } = this.props;
    const isEmpty = sublist.length === 0;
    let styles = {
      button: {
        position: 'fixed',
        bottom: 20,
        right: 20
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      div: {
        display: '-webkit-flex', /* Safari */
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
      card: {}
    };

    if(this.state.type) {
      styles.card = {
        padding: '1%',
        position: 'fixed',
        margin: 'auto',
        height: '390px',
        maxWidth: '30%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        boxShadow: '5px 5px 100px #888888'
      }
    } else {
      styles.card = {
        display: 'none'
      }
    }

    return (
      <div>
        <div style={styles.div}>
          <Card style={{maxWidth: "30%", margin: 10, display: 'inline-block'}} onClick={this.handleAddUser}>
            <CardText style={{fontSize: 36, color: '#9E9E9E'}}>
              添加用户
            </CardText>
          </Card>
          { userList.old.map((user, i) =>
            <UserDetail { ...this.props } user = {user} key={i} i={i}/>)
          }
        </div>
        <Card style={styles.card}>
          <TextField
            floatingLabelText="用户名"
            floatingLabelFixed={true}
            onChange={ this.usernameChange }
          /><br />
          <TextField
            floatingLabelText="密码"
            floatingLabelFixed={true}
            onChange={ this.passwordChange }
          /><br />
          <div>点击以添加</div>
          {!isEmpty
            ? <div style={styles.wrapper}>
              {
                sublist[0].contextList.map((context, i) =>
                  <NewUserChip key={i} i={i} sub={context} user={userList.new} onChange={this.handleChange}/>)
              }
            </div>
            : <div></div>
          }
          <RaisedButton label="确认添加用户" fullWidth={true} secondary={true} onClick = {this.handleSubmit}/>
          <RaisedButton style={{marginTop: 10}} label="取消操作" fullWidth={true} onClick = {this.handleAddUser}/>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ userList, grades }) => ({ userList, sublist: grades.sublist });

export default connect(mapStateToProps)(ControlUser);