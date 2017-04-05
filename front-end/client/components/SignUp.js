import React, { Component } from 'react';

//UI
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      type: 1,
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  handleChange1() {
    this.setState({type: 1});
  }

  handleChange2() {
    this.setState({type: 2});
  }

  handleSubmit() {
    const username = this.state.username;
    const password = this.state.password;
    const type = this.state.type;
    this.props.onChange(username, password, type);
  }

  render() {
    const style = {
      zIndex: 9999,
      maxHeight: 350,
      width: 300,
      margin: 20,
      backgroundColor: '#FAFAFA',
      textAlign: 'center',
      display: 'inline-block',
      position: 'absolute',
      top: '46%',
      right: 100,
      paddingTop: 30
    };
    const radioButton={
      marginBottom: 16,
    };
    const isadmin = window.location.pathname === '/adminlogin';
    let error = "";

    if (this.props.error === "username") {
      error = "用户名错误";
    } else if (this.props.error === "password") {
      error = "密码错误";
    }

    return (
      <div>
      <Paper style={style} zDepth={1}>
        <div style={{color: 'red'}}>{error}</div>
        <div style={{padding: '0 15px'}}>
          <TextField
            floatingLabelText="用户名"
            onChange={ this.usernameChange }
          />
          <br />
          <TextField
            floatingLabelText="密码"
            type="password"
            onChange={ this.passwordChange }
          />
          {!isadmin
            ? null
            : <RadioButtonGroup name="shipSpeed" defaultSelected="0">
              <RadioButton
                value="0"
                label="普通用户"
                style={radioButton}
                onClick={this.handleChange1}
              />
              <RadioButton
                value="1"
                label="集团用户"
                style={radioButton}
                onClick={this.handleChange2}
              />
            </RadioButtonGroup>
          }

          <RaisedButton label="登录" secondary={true} style={{marginBottom: '10px'}} fullWidth={true} onClick={this.handleSubmit}/>
        </div>
      </Paper>
      </div>
    );
  }
}

export default SignUp;
