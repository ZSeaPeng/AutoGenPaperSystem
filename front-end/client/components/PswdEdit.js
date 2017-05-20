import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

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
  }
};

export default class PswdEdit extends Component {
  state = {
    open: false,
    valid: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        disabled={!this.state.valid}
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
                    floatingLabelText="Password"
                    type="password"
                  /></td>
                </tr>
                <tr>
                  <td style={{width: 100,}}><p>确认密码</p></td>
                  <td style={{width: 20}}><p>:</p></td>
                  <td><TextField
                    floatingLabelText="Confirm"
                    type="password"
                  /></td>
                </tr>
              </tbody>
            </table>
        </Dialog>
      </div>
    );
  }
 }
