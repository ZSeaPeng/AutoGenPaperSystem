import React, { Component }from 'react';
import { Link } from 'react-router';

//UI
import {Card, CardText} from 'material-ui/Card';

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
    };
    return (
      <div style={style.div}>
        { news.map((nee, i) =>
          <Card style = {style.Card}>
            <CardText>
              {nee.map((neee, i) =>
                <Link to={neee.url}>{neee.sub} </Link>)} 有更新
                <br/>
                <small style={{color: '#B3B3B3'}}>{ nee[0].date }</small>
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

export default News;
