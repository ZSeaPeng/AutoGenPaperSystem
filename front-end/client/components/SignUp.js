import React, { Component } from 'react';

//UI
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

class SignUp extends Component {
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
      right: 100
    };

    return (
      <div>
      <Paper style={style} zDepth={1}>
        <div style={{marginTop: '30px',padding: '0 15px'}}>
          <TextField
            floatingLabelText="用户名"
          />
          <br />
          <TextField
            floatingLabelText="密码"
            type="password"
          />
          <br />
          <br />
          <RaisedButton label="登录" secondary={true} fullWidth={true} />
        </div>
      </Paper>
      </div>
    );
  }
};

export default SignUp;