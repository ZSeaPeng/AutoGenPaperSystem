import React, { Component }from 'react';
import { Link } from 'react-router';

//UI
import {Card, CardText} from 'material-ui/Card';

class News extends Component {
  render() {
    const { news } = this.props;
    let updates = [];
    for (let i = 0; i < news.length; i++) {
      if(news[i].length !== 0) {
        updates.push(news[i])
      }
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
        { updates.map((nee, i) =>
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
