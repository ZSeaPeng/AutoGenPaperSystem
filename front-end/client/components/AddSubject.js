
import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  checkbox: {
    marginBottom: 16,
  },
  dialog: {

    width: 600,
  }
};

export default class AddSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


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
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="选择科目" onTouchTap={this.handleOpen} />
        <Dialog
          title="选择科目"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={styles.dialog}
        >
          <Checkbox
            label="语文"
            style={styles.checkbox}
            id={0}
            checked={this.props.subjectChecked[0]}
            onCheck={this.props.onChange}
          />
          <Checkbox
            label="数学"
            style={styles.checkbox}
            id={1}
            checked={this.props.subjectChecked[1]}
            onCheck={this.props.onChange}
          />
        </Dialog>
      </div>
    );
  }
}
