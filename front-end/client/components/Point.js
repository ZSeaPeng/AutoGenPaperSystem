import React, { Component } from 'react';
import { Link } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

class Point extends Component{
  render() {
    const { point, i } = this.props;
    const I = i + 1;
    const isEmpty = point.pointList.length === 0;
    return (
      <div>
      {
        isEmpty
          ? <ListItem key = { I } nestedLevel={ point.level }>
            <Link
              to={`${point.url}`}>
              {point.name}
            </Link>
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
            <Link
              to={`${point.url}`}>
              {point.name}
            </Link>
          </ListItem>
      }
      </div>
    )
  }
};

export default Point;

