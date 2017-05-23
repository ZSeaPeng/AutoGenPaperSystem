import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

import { asynUserChange } from '../actions/actionCreators';

const styles = {
  radioButton: {
    marginTop: 16,
  },
  table: {

    color: "gray",
    borderSpacing: 10,
  },
  dialog: {
    width: 600,
  },
  floatingErrorStyle: {
    color: orange500,
  },
  floatingStyle: {
    color: blue500,
  }
};

export default class PswdEdit extends Component {
  state = {
    open: false,
    passwordValid: false,
    confirmValid: false,
    password:'',
    confirmPassword:'',
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handlePassword = (e, password) => {
    const reg = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;
    if( reg.test(password) && password.length >= 8) {
      this.setState({
        passwordValid: true,
        password: password,
      });
    } else {
      this.setState({
        passwordValid: false,
      });
    }
  };

  handleConfirm = (e, passwordConfirm) => {
    this.setState({
      confirmPassword: passwordConfirm,
    });
    if(passwordConfirm == this.state.password) {
      this.setState({
        confirmValid: true,
        password: passwordConfirm,
      });
    } else {
      this.setState({
        confirmValid: false,
      });
    }
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    dispatch(asynUserChange(this.state.password));
    this.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="确认"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
        disabled={!this.state.confirmValid}
      />,
    ];

    return (
      <div>
        <RaisedButton secondary= {true} label="修改密码" onTouchTap={this.handleOpen} />
        <Dialog
          title="修改密码"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={styles.dialog}
        >
            <table style={styles.table}>
              <tbody>
                <tr>
                  <td style={{width: 100,}}><p>输入密码</p></td>
                  <td style={{width: 20}}><p>:</p></td>
                  <td><TextField
                    floatingLabelText={this.state.passwordValid ? '' : '密码需大于8位,且包含字母'}
                    floatingLabelFocusStyle={this.state.passwordValid ? styles.floatingStyle : styles.floatingErrorStyle}
                    type="password"
                    onChange={this.handlePassword}
                    id="password"
                  /></td>
                </tr>
                <tr>
                  <td style={{width: 100,}}><p>确认密码</p></td>
                  <td style={{width: 20}}><p>:</p></td>
                  <td><TextField
                    floatingLabelText={this.state.confirmValid ? '' : '请重新输入密码'}
                    floatingLabelFocusStyle={this.state.confirmValid ? styles.floatingStyle : styles.floatingErrorStyle}
                    type="password"
                    onChange={this.handleConfirm}
                    id="passwordConfirm"
                  /></td>
                </tr>
              </tbody>
            </table>
        </Dialog>
      </div>
    );
  }
 }
