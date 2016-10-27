import React, { Component }from 'react';
import { Link } from 'react-router';

//UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class News extends Component {
  render() {
    const { news } = this.props;
    const style = {
      Card: {
        backgroundColor: '#FAFAFA',
        width: 700,
        marginBottom: 10
      },
      div: {
        position: 'absolute',
        top: 450,
        left: 100
      }
    }
    return (
      <div style={style.div}>
        { news.map((nee, i) =>
          <Card style = {style.Card}>
            <CardText>
              <Link to = "/">{nee}</Link> 有更新
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

export default News;
