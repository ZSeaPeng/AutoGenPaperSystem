import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {display: 'inline-block'},
      hide: {display: 'none'},
      expanded: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
    this.handleCollection = this.handleCollection.bind(this);
  }

  getInfo() {
    return this.props.contextList.id
  }

  handleAdd() {
    this.props.onChange(this.getInfo(), 'add');
    const temp = this.state.show;
    this.state.show = this.state.hide;
    this.state.hide = temp;
  }

  handleDownload() {
    this.props.onChange(this.getInfo(), 'download')
  }

  handleCollection() {
    this.props.onChange(this.getInfo(), 'collection')
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  render() {
    const { contextList, pageNum, i } = this.props;
    var style = {};

    if( parseInt(i) >= 5 * pageNum - 5 && parseInt(i) < 5 * pageNum ) {
      style = { margin: 10 }
    } else {
      style = { display: 'none' }
    }

    return (
      <Card style={style} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardMedia>
          <img src={`http://${contextList.qurl}`} />
        </CardMedia>
        <CardActions>
          <FlatButton label="加入试卷" secondary={true} onClick={this.handleAdd} style={this.state.show}/>
          <RaisedButton label="移除试卷" secondary={true} onClick={this.handleAdd} style={this.state.hide}/>
          <FlatButton label="下载试题" secondary={true} onClick={this.handleDownload}/>
          <FlatButton label="收藏试题" secondary={true} onClick={this.handleCollection}/>
        </CardActions>
        <CardText style={{display: 'inline-block'}}>
          <Toggle
            toggled={this.state.expanded}
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
