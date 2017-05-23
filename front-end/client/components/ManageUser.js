import React, { Component } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import AddSubject from './AddSubject.js';
import ChooseCourse from '../components/ChooseCourse';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  table: {
    margin: 'auto',
    fontSize: 15,
    color: "gray",
    borderSpacing: 0,
  },
  checkbox: {
    marginBottom: 16,
  },
  dialog: {
    height: 800,
    width: 600,
  }
};

const courses = [{
                  context: '数学',
                  max: 300
                },
                {
                  context: '语文',
                  max: 150

                }];

export default class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      subject: ['语文 ','数学 '],
      subjectChecked: [ false, false ],
    };
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleCheck = (e, isChecked) => {
    let index = e.target.id;
    let newSubjectChecked = [...this.state.subjectChecked];
    newSubjectChecked[index] = isChecked;
    this.setState({
      subjectChecked : newSubjectChecked
    });
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
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="编辑" onTouchTap={this.handleOpen} primary={true}/>
        <Dialog
          title="编辑用户"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={styles.dialog}

        >
          <table style={styles.table}>
            <tbody>
              <tr>
                <td style={{width: 100,}}><p>邮箱</p></td>
                <td style={{width: 20}}><p>:</p></td>
                <td>
                  <TextField
                    defaultValue={this.props.user.email}
                    id = "email"
                  />
                </td>
              </tr>
              <tr>
                <td style={{width: 100,}}><p>电话</p></td>
                <td style={{width: 20}}><p>:</p></td>
                <td>
                  <TextField
                    defaultValue={this.props.user.phonenum}
                    id = "phoneNum"
                  />
                </td>
              </tr>
              <tr>
                <td style={{width: 100,}}><p>密码</p></td>
                <td style={{width: 20}}><p>:</p></td>
                <td>
                  <TextField
                    defaultValue=""
                    id = "password"
                    type = "password"
                  />
                </td>
              </tr>
              <tr>
                <td style={{width: 100,}}><p>科目</p></td>
                <td style={{width: 20}}><p>:</p></td>
                <td>
                  <ChooseCourse courses={courses} callback={this.courseChange}/>
                </td>

              </tr>
              <tr>
                <td style={{width: 100,}}><p>确认科目</p></td>
                <td style={{width: 20}}><p>:</p></td>
                <td>
                  {
                    this.state.subjectChecked.map((s, i) =>
                      <span key = {i}>
                        {
                          s? this.state.subject[i] : ''
                        }
                      </span>
                    )
                  }

                </td>

              </tr>
            </tbody>
          </table>
        </Dialog>
      </div>
    );
  }
}
