import React from 'react';
import { Link } from 'react-router';

//UI
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

import { finalAction } from '../actions/actionCreators'

class PaperChoosed extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { radios, others } = this.props;
    let array = [];
    for (let i = 0; i < radios.questions.length; i++) {
      array.push(radios.questions[i].id);
    }
    for (let i = 0; i < others.length; i++) {
      for (let j = 0; j < others[i].questions.length; j++) {
        array.push(others[i].questions[j].id);
      }
    }
    this.props.onChange();
    dispatch(finalAction(array));
  }

  render() {
    const { radios, others } = this.props;
    let newTypes = [];

    newTypes.push({type: '单选题', count: radios.questions.length});

    for(let i = 0; i < others.length; i++ ) {
      newTypes.push({type: others[i].type, count: others[i].questions.length});
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
          <MenuItem onClick={this.handleSubmit}>点击组成试卷</MenuItem>
        </Menu>
      </Paper>
    )
  }
};

export default PaperChoosed;