import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

import { asynChangeInfo } from '../actions/actionCreators';

const styles = {
  radioButton: {
    marginTop: 16,
  },
  table: {

    color: "gray",
    borderSpacing: 5,
  },
  dialog: {

    width: 600,
  }
};

export default class UserEdit extends Component {
  state = {
    infoChange: ["", "", "", ""],
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleConfirm = () => {
    const { dispatch } = this.props;
    let username = this.state.infoChange[0] == "" ? this.props.infoEdit[0].context : this.state.infoChange[0];
    let school = this.state.infoChange[1] == "" ? this.props.infoEdit[1].context : this.state.infoChange[1];
    let email = this.state.infoChange[2] == "" ? this.props.infoEdit[2].context : this.state.infoChange[2];
    let phonenum = this.state.infoChange[3] == "" ? this.props.infoEdit[3].context : this.state.infoChange[3];

    dispatch(asynChangeInfo(username, school, email, phonenum));
    this.handleClose();
  }
  handleChange = (e, value) => {
    let index = parseInt(e.target.id);
    this.state.infoChange[index] = value;

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
        onTouchTap={this.handleConfirm}
      />,
    ];


    return (
      <div>
        <RaisedButton primary= {true} label="编辑信息" onTouchTap={this.handleOpen} />

        <Dialog
          title="编辑信息"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={styles.dialog}
        >
          <table style={styles.table}>
            <tbody>
              {this.props.infoEdit.map((inf, i) => <tr key ={i}>
                <td style={{width: 100,}}><p>{inf.name}</p></td>
                <td style={{width: 20}}><p>:</p></td>
                <td>
                  <TextField
                    defaultValue={inf.context}
                    id = {''+i}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>)}
            </tbody>
          </table>
        </Dialog>
      </div>
    );
  }
 }
