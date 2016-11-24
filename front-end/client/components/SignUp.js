import React, { Component } from 'react';

//UI
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernameChange(e) {
    this.state.username = e.target.value
  }

  passwordChange(e) {
    this.state.password = e.target.value
  }

  handleSubmit() {
    let username = this.state.username;
    let password = this.state.password;
    this.props.onChange(username, password);
  }

  render() {
    const style = {
      zIndex: 9999,
      height: 270,
      width: 300,
      margin: 20,
      backgroundColor: '#FAFAFA',
      textAlign: 'center',
      display: 'inline-block',
      position: 'absolute',
      top: 100,
      right: 100,
      paddingTop: 30
    };
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
          <br />
          <br />
          <RaisedButton label="登录" secondary={true} fullWidth={true} onClick={this.handleSubmit}/>
        </div>
      </Paper>
      </div>
    );
  }
}

export default SignUp;