import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ChosenChip from '../components/ChosenChip';
import UnChosenChip from '../components/UnChosenChip';
import UserEdit from '../components/UserEdit.js';

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
      open1: false,
      open2: false,
      open3: false,
    };
    this.handleExpand = this.handleExpand.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleClose() {
    this.setState({open1: false,open2: false, open3: false});
  }

  handleExpand() {
    this.setState({open: !this.state.open})
  }

  handleEdit(event) {
    let id = event.target.id;
    console.log(id);
    this.setState({open2: true});
  }
  handleDelete(event) {
    let id = event.target.id;
    console.log(id);
    this.setState({open3: true});
  }
  submit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render() {
    let { open } = this.state;
    let style = {};

    if(open) {
      style = {}
    } else {
      style = { display: 'none' }
    }

    var users = [];
    for (let i = 1; i < 28; i++) {
      users.push({
        id: i,
        name: 'tony' + i,
        job: 'employee' + i,
      });
    }


    return (
      <div>
        <div style={styles.title}>
            <h3>&nbsp;用户管理</h3>
          
          {/* <FlatButton label="显示所有" secondary={true} onClick={this.handleExpand}/> */}
        </div>
        {/* <div>
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
        </div> */}
        <Tabs selectedIndex={0}>
          <TabList>
            <Tab>用户列表</Tab>
            <Tab>添加用户</Tab>
          </TabList>
          <TabPanel>
            <Table height={'400px'}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                  <TableHeaderColumn>编辑</TableHeaderColumn>
                  <TableHeaderColumn>删除</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}
                showRowHover={true}>
                {
                  users.map((user, index) => (
                    <TableRow key = {index}>
                      <TableRowColumn>{user.id}</TableRowColumn>
                      <TableRowColumn>{user.name}</TableRowColumn>
                      <TableRowColumn>{user.job}</TableRowColumn>
                      <TableRowColumn>
                        <input type="button" value="删除" id={user.id} onClick={this.handleEdit} style={{width:100, height:35, backgroundColor: "#63B8FF", border: 'none', color: "#ffffff", fontSize: 14}}/>

                      </TableRowColumn>
                      <TableRowColumn>
                        <RaisedButton label="删除" id={user.id} secondary={true} onClick={this.handleDelete}/>
                      </TableRowColumn>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel>
            <h2>添加用户</h2>
            <UserEdit onSubmit={this.submit} type="0"/>
          </TabPanel>
        </Tabs>
        <Dialog
          title="修改用户"
          modal={false}
          open={this.state.open2}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}>
          <UserEdit onSubmit={this.submit} type="2"/>
        </Dialog>
        <Dialog
          title="确认"
          actions={[<RaisedButton label="确认" secondary={true} onClick={this.handleSubmit3}/>,
          <RaisedButton label="取消" primary={true} onClick={this.handleClose}/>]}
            modal={false}
            open={this.state.open3}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}>
            <h3>确认删除用户？</h3>
        </Dialog>
      </div>
    )
  }
}

export default SubUser;
