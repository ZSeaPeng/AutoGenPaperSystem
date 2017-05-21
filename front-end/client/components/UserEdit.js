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

export default class UserEdit extends Component {
  state = {
    open: false,
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
