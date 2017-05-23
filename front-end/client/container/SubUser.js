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
import SelectField from 'material-ui/SelectField';

import ManageUser from '../components/ManageUser';
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
    fontSize: 20,
    color: "gray",
    borderSpacing: 5,
  },
  checkbox: {
    marginBottom: 16,
  },
  dialog: {

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

export default class SubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      open: false,
      info:{},
      valid: true,
      maxValue: 300,
      username: ''
    };
  }

  handleChange = (value) => {
  this.setState({
      value: value,
    });
  };

  handleCheck = (e, isChecked) => {

    let index = e.target.id;
    let newSubjectChecked = [...this.state.subjectChecked];
    newSubjectChecked[index] = isChecked;
    this.setState({
      subjectChecked : newSubjectChecked
    });
  };
  courseChange = (value) => {
    this.state.info.subject = value === 0 ? 15 : 16;
    if(value === 0){
      this.setState({
        maxValue:300,
      })
    } else {
      this.setState({
        maxValue:150,
      })
    }
  };

  handleInfoChange = (e, value) => {
    let item = e.target.id;
    this.state.info[item] = value;
    console.log(this.state);
  };

  handleCreate = () => {
    this.props.createUser({...this.state, commanagerId: 3});
  };


  render() {
    let users = [];
    if (this.props.userList !== undefined) {
      users = [...this.props.userList];
    }

    return (
      <Paper style={{width:900, height:750, margin:'auto'}}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="管理用户" value="a">
            <Table
              height={'600px'}
              fixedHeader={true}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>用户名</TableHeaderColumn>
                  <TableHeaderColumn>学校</TableHeaderColumn>
                  <TableHeaderColumn>编辑</TableHeaderColumn>
                  <TableHeaderColumn>删除</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                showRowHover={true}>
                {
                  users.map((user, i) =>
                  <TableRow key={i}>
                    <TableRowColumn>{user.username}</TableRowColumn>
                    <TableRowColumn>{user.school}</TableRowColumn>
                    <TableRowColumn>
                      <ManageUser user={user}/>
                    </TableRowColumn>
                    <TableRowColumn>
                        <button
                          id={user.userid}
                          onClick={this.props.handleDelete}
                          style={{height:37,
                                  width:80,
                                  fontSize: 14,
                                  color: '#ff3366'}}
                        >删除
                        </button>
                        {/* <RaisedButton label="删除" secondary={true} onClick = {this.props.handleDelete}/> */}
                    </TableRowColumn>
                  </TableRow>
                )
                }
              </TableBody>
            </Table>
          </Tab>
          <Tab label="添加用户" value="b">
            <div>
              <table style={styles.table}>
                <tbody>
                  <tr>
                    <td style={{width: 100,}}><p>用户名</p></td>
                    <td style={{width: 20}}><p>:</p></td>
                    <td>
                      <TextField
                        defaultValue=""
                        id = "username"
                        onChange = {this.handleInfoChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: 100,}}><p>学校</p></td>
                    <td style={{width: 20}}><p>:</p></td>
                    <td>
                      <TextField
                        defaultValue=""
                        id = "school"
                        onChange = {this.handleInfoChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: 100,}}><p>邮箱</p></td>
                    <td style={{width: 20}}><p>:</p></td>
                    <td>
                      <TextField
                        defaultValue=""
                        id = "email"
                        onChange = {this.handleInfoChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: 100,}}><p>电话</p></td>
                    <td style={{width: 20}}><p>:</p></td>
                    <td>
                      <TextField
                        defaultValue=""
                        id = "phonenum"
                        onChange = {this.handleInfoChange}
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
                        onChange = {this.handleInfoChange}
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
                    <td style={{width: 100,}}><p>可下载试卷</p></td>
                    <td style={{width: 20}}><p>:</p></td>
                    <td>
                      <TextField
                        hintText={'不大于' + this.state.maxValue}
                        id = "allowpaper"
                        type = "number"
                        onChange = {this.handleInfoChange}
                      />
                    </td>

                  </tr>
                  <tr>
                    <td>

                    </td>
                    <td>
                      <RaisedButton label="添加" primary={true} onClick={this.handleCreate}/>
                    </td>
                    <td>
                      <RaisedButton label="取消" secondary={true}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
        </Tabs>
      </Paper>
    );
  }
}
