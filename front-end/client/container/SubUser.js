import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import ChosenChip from '../components/ChosenChip';
import UnChosenChip from '../components/UnChosenChip';

import { asynRemoveSubject, addSubPre, removeSubPre, asynChange, asynDeleteSubUser } from '../actions/actionCreators';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    width: "30%",
    margin: 10,
    display: 'inline-block'
  }
};

class SubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      open: false,
    };
    this.handleExpand = this.handleExpand.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleExpand() {
    this.setState({open: !this.state.open})
  }

  handleDelete() {
    const { user, dispatch, i } = this.props;
    dispatch(asynDeleteSubUser({userId: user.userId, username: user.username, k: i}));
  }

  render() {
    const { user } = this.props;

    return (
      <Card style={styles.card} expanded={this.state.expanded}>
        <CardHeader
          avatar=""
          title={user.username}
        />
        <CardActions>
          <FlatButton label="删除此用户" secondary={true} onClick={this.handleDelete}/>
        </CardActions>
      </Card>
    )
  }
}

export default SubUser;