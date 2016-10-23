import React, { Component }from 'react';

//UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class News extends Component {
  render() {
    const style = {
      Card: {
        backgroundColor: '#FAFAFA',
        width: 700,
        marginBottom: 10
      },
      div: {
        position: 'absolute',
        top: 300,
        left: 100
      }
    }
    return (
      <div style={style.div}>
        <Card style = {style.Card}>
          <CardHeader
            title="New Topic"
          />
          <Divider />
          <CardText>
            Deteils
          </CardText>
        </Card>
        <Card style = {style.Card}>
          <CardHeader
            title="New Topic"
          />
          <Divider />
          <CardText>
            Deteils
          </CardText>
        </Card>
        <Card style = {style.Card}>
          <CardHeader
            title="New Topic"
          />
          <Divider />
          <CardText>
            Deteils
          </CardText>
        </Card>
      </div>
    );
  }
}

export default News;
