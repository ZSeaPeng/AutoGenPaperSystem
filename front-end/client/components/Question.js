import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

class Question extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
    this.handleCollection = this.handleCollection.bind(this);
  }

  getI() {
    return this.props.i;
  }

  getInfo() {
    return this.props.contextList.id
  }

  handleAdd() {
    const { userid } = this.props;
    this.props.onChange({id: this.getInfo(), userid: userid}, 'add');
  }

  handleDownload() {
    this.props.onChange(this.getInfo(), 'download')
  }

  handleCollection() {
    const { userid } = this.props;
    this.props.onChange({id: this.getInfo(), userid: userid}, 'collection')
  }

  handleToggle(event, toggle) {
    this.props.onChange({toggle: toggle, i: this.getI()}, 'toggle')
  };

  render() {
    const { contextList, pageNum, userChosen, userCollection } = this.props;
    var style = { margin: 10 };
    var style1 = {}, style2 = {}, style3 = {}, style4 = {};
    var j = 0, k = 0;

    userChosen.map((chosen,i) => {
      if (chosen.id === contextList.id) {
        j++;
      }
    })

    if (j === 1) {
      style1 = {display: 'none'};
      style2 = {display: 'inline-block'};
    } else {
      style2 = {display: 'none'};
      style1 = {display: 'inline-block'};
    }

    if(userCollection.indexOf(contextList.id) === -1) {
      style4 = {display: 'none'};
      style3 = {display: 'inline-block'};
    } else {
      style3 = {display: 'none'};
      style4 = {display: 'inline-block'};
    }

    return (
      <Card style={style} expanded={contextList.expanded}>
        <CardMedia>
          <img src={`http://${contextList.qurl}`} />
        </CardMedia>
        <CardActions>
          <FlatButton label="加入试卷" secondary={true} onClick={this.handleAdd} style={style1}/>
          <RaisedButton label="移除试卷" secondary={true} onClick={this.handleAdd} style={style2}/>
          <FlatButton label="下载试题" secondary={true} onClick={this.handleDownload}/>
          <FlatButton label="收藏试题" secondary={true} onClick={this.handleCollection} style={style3}/>
          <RaisedButton label="取消收藏" secondary={true} onClick={this.handleCollection} style={style4}/>
        </CardActions>
        <CardText style={{display: 'inline-block'}}>
          <Toggle
            toggled={contextList.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="查看解析"
          />
        </CardText>
        <CardMedia expandable={true}>
          <img src={`http://${contextList.aurl}`} />
        </CardMedia>
      </Card>
    )
  }
};

export default Question;
