import React, { Component } from 'react';
import { Link } from 'react-router';
import {ListItem} from 'material-ui/List';

class Point extends Component{
  render() {
    const { point, i } = this.props;
    const I = i + 1;
    const isEmpty = point.pointList.length === 0;
    const { select } = point;
    const style = {
      color: '#FF5252'
    };
    return (
      <div>
      {
        isEmpty
          ? <ListItem key = { I } nestedLevel={ point.level }>
            { select
              ? <span style = {style}>{ point.name }</span>
              : <Link
                to={`${point.url}`}>
                {point.name}
              </Link>
            }
          </ListItem>
          : <ListItem
            nestedLevel={ point.level }
            key = { I }
            initiallyOpen={false}
            primaryTogglesNestedList={false}
            nestedItems =
            {point.pointList.map((point, i) =>
              <Point point={point} key={i} i={i}/>)}
          >
            { select
              ? <span style = {style}>{ point.name }</span>
              : <Link
                to={`${point.url}`}>
                {point.name}
              </Link>
            }
          </ListItem>
      }
      </div>
    )
  }
}

export default Point;

