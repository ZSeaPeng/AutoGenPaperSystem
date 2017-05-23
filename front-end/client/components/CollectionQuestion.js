import React, { Component } from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class CollectionQuestion extends Component{

  render() {

    return (
      <Card style={{padding: 20}}>
        <CardMedia>
          <h3>第{this.props.i+1}题：</h3>
          <img src={`http://${this.props.collection.qurl}`}/>
          <img src={`http://${this.props.collection.aurl}`}/>
        </CardMedia>
        <CardActions>
          <FlatButton label="下载试题" secondary={true} href={"http://121.196.206.205:8111/AutoGenPaperSystem/upload/temp/201745u28shuxue9slv5e.docx"} />
          <RaisedButton label="取消收藏" primary={true} onTouchTap={this.handleCollectionCancel} />
        </CardActions>
      </Card>
    )
  }

  handleCollectionCancel = () => {
    let id = this.props.collection.id;
    let i = this.props.i;
    this.props.handleCollection(id, i);
  }
};

export default CollectionQuestion;
