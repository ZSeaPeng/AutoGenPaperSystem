import React, { Component } from 'react';
import { connect } from 'react-redux';

//UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';

import SubUser from './SubUser';

import { getSubUser, asynCreateSubUser } from '../actions/actionCreators'

class BigUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phone: '',
      email: '',
      phone: '',
      school: '',
      open: false,
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.schoolChange = this.schoolChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleAddUser() {
    this.setState({open: true})
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  schoolChange(e) {
    this.state.school = e.target.value
  }

  phoneChange(e) {
    this.state.phone = e.target.value
  }

  emailChange(e) {
    this.state.email = e.target.value
  }

  handleClose() {
    this.setState({open: false});
  };

  handleRequestClose() {
    const { dispatch } = this.props;
    dispatch(clear());
  };

  handleSubmit() {
    const { username, password, phone, email, school } = this.state;
    const { subUser, dispatch } = this.props;
    let count = 0;
    let reg = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
    if( username === '' || password === '') {
      count++;
      alert('用户名或密码不能为空');
    }
    if(!reg.test(password) || password.length < 8) {
      count++;
      alert('密码强度太低，请至少八位，并包含字母数字')
    }
    for (let i = 0; i < subUser.length; i++) {
      if (username === subUser[i].username) {
        count++;
        alert('用户名重复');
      }
    }
    if(count === 0) {
      dispatch(asynCreateSubUser({username, password, school, phone, email}));
      this.setState({type: !this.state.type})
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSubUser());
  }

  render() {
    const { subUser } = this.props;
    const isDelete = subUser.delete !== "";
    let styles = {
      div: {
        display: '-webkit-flex', /* Safari */
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
    };

    return (
      <div>
        <div style={styles.div}>
          <Card style={{maxWidth: "30%", margin: 10, display: 'inline-block'}} onClick={this.handleAddUser}>
            <CardText style={{fontSize: 36, color: '#9E9E9E'}}>
              添加用户
            </CardText>
          </Card>
          { subUser.user.map((user, i) =>
            <SubUser { ...this.props } user = {user} key={i} i={i}/>)
          }
        </div>
        <Dialog
          title="添加用户"
          actions={[<RaisedButton label="确认添加用户" secondary={true} onClick={this.handleSubmit}/>]}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
          <TextField
            floatingLabelText="用户名(请输入真实姓名)"
            onChange={ this.usernameChange }
          /><br />
          <TextField
            floatingLabelText="密码"
            onChange={ this.passwordChange }
          /><br />
          <TextField
            floatingLabelText="学校名称"
            onChange={ this.schoolChange }
          /><br />
          <TextField
            floatingLabelText="邮箱"
            onChange={ this.emailChange }
          /><br />
          <TextField
            floatingLabelText="手机"
            onChange={ this.phoneChange }
          /><br />
        </Dialog>
        <Snackbar
          open={isDelete}
          message={`用户(${subUser.delete})已删除`}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ subUser }) => ({ subUser });

export default connect(mapStateToProps)(BigUser);
// export default BigUser;
