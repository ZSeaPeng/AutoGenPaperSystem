import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  render() {
    const { contextList } = this.props;
    return (
      <Card style={{margin: '10px'}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardMedia>
          <img src={`http://${contextList.qurl}`} />
        </CardMedia>
        <CardActions>
          <FlatButton label="加入试卷" secondary={true} />
          <FlatButton label="下载试题" secondary={true} />
          <FlatButton label="收藏试题" secondary={true} />
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
