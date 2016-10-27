import React, { Component } from 'react';
import { Link } from 'react-router';

//UI
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

class Choosed extends Component{
  render() {
    const { add } = this.props
    const style = {
      float: 'right',
      margin: '16px 0',
    };
    return (
      <Paper style={style}>
      <Menu desktop={true}>
        <List>
          <Subheader style={{paddingLeft: "10px"}} inset={true}>已选题目</Subheader>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar
                  color="#FFFFFF"
                  backgroundColor="#1E88E5"
                  size={30}
                  style={{margin: 5}}
                >
                  {add}
                </Avatar>
              }
            >
              选择题
            </ListItem>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar
                  color="#FFFFFF"
                  backgroundColor="#1E88E5"
                  size={30}
                  style={{margin: 5}}
                >
                  {add}
                </Avatar>
              }
            >
              阅读题
            </ListItem>
        </List>
        <Divider />
        <MenuItem primaryText="删除所有" style={{color: '#FF5252'}}/>
        <MenuItem primaryText="组成试卷"/>
      </Menu>
      </Paper>
    )
  }
};

export default Choosed;
