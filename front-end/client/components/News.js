import React, { Component }from 'react';
import { Link } from 'react-router';

//UI
import {Card, CardText} from 'material-ui/Card';

class News extends Component {
  render() {
    let { news } = this.props;
    for (let i = 0; i < news.length; i++) {
      news[i] === [];
      news = [ ...news.slice(0, i), ...news.slice(i + 1) ]
    }
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
          <Card style = {style.Card} key={i}>
            <CardText>
              {nee.map((neee, i) =>
                <Link to={neee.url} key={i}>{neee.sub} </Link>)
              }
              有更新
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
