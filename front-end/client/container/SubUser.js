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
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
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
  }

  handleExpand() {
    this.setState({open: !this.state.open})
  }

  render() {
    let { open } = this.state;
    let style = {};

    if(open) {
      style = {}
    } else {
      style = { display: 'none' }
    }


    return (
      <div>
        <div style={styles.title}>
          <strong>用户列表</strong>
          <FlatButton label="显示所有" secondary={true} onClick={this.handleExpand}/>
        </div>
        <div>
          <Card style={styles.card}>
            <CardHeader avatar="" title="张三"/>
            <CardActions>
              <FlatButton label="删除此用户" secondary={true} />
            </CardActions>
          </Card>
          <Card style={styles.card}>
            <CardHeader avatar="" title="张三"/>
            <CardActions>
              <FlatButton label="删除此用户" secondary={true} />
            </CardActions>
          </Card>
          <Card style={styles.card}>
            <CardHeader avatar="" title="张三"/>
            <CardActions>
              <FlatButton label="删除此用户" secondary={true} />
            </CardActions>
          </Card>
        </div>
        <div style={style}>
          <Card style={styles.card}>
            <CardHeader
              avatar=""
              title="张三"
            />
            <CardActions>
              <FlatButton label="删除此用户" secondary={true} />
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default SubUser;