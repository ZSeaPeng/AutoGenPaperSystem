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
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRemove() {
    this.props.onChange('all','add');
  }

  handleSubmit() {
    this.props.onChange('','submit');
  }

  render() {
    const { userChosen } = this.props;
    var types = [], newTypes = [], temp, count = 0;

    for (let i = 0; i < userChosen.length; i++) {
      types.push(userChosen[i].type);
    }

    for (let i = 0; i < types.length; i++) {
      if (types[i] != -1) {
        temp = types[i];
          for(let j = 0; j < types.length; j++){
            if(temp == types[j]){
            count++;
            types[j] = -1;
            }
          }
        newTypes.push({type: temp, count: count});
        count = 0;
      }
    }

    const style = {
      float: 'right',
      margin: '16px 0',
    };
    return (
      <Paper style={style}>
        <Menu desktop={true}>
          <List>
            <Subheader style={{paddingLeft: "10px"}} inset={true}>已选题目</Subheader>
                {newTypes.map((newType, i) =>
                  <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar
                        color="#FFFFFF"
                        backgroundColor="#1E88E5"
                        size={30}
                        style={{margin: 5}}
                      >
                        {newType.count}
                      </Avatar>
                    }
                  >
                    {newType.type}
                  </ListItem>
                )}
          </List>
          <Divider />
          <MenuItem primaryText="点击删除所有" style={{color: '#FF5252'}} onClick={this.handleRemove}/>
          <MenuItem primaryText="点击组成试卷" onClick={this.handleSubmit}/>
        </Menu>
      </Paper>
    )
  }
};

export default Choosed;
