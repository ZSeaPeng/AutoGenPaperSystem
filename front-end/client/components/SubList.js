import React, { Component } from 'react';

import {ListItem} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

class SubList extends Component{
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    const { point } = this.props;
    this.props.onChange({id: point.id, type: 'show'})
  }

  handleDelete() {
    const { point } = this.props;
    this.props.onChange({id: point.id, type: 'delete'});
  }

  render() {
    const { point, i } = this.props;
    const I = i + 1;

    return (
      <div>
        <ListItem
          nestedLevel={ point.level }
          key = { I }
          leftIcon = {
            <IconMenu style={{margin: 0}} iconButtonElement={iconButtonElement}>
              <MenuItem onClick={this.handleShow}>添加子节点</MenuItem>
              <MenuItem onClick={this.handleDelete}>删除节点</MenuItem>
            </IconMenu>
          }
          initiallyOpen={false}
          primaryTogglesNestedList={false}
          nestedItems =
          {point.pointList.map((point, i) =>
            <SubList {...this.props} point={point} key={i} i={i}/>)}
        >
          {point.name}
        </ListItem>
      </div>
    )
  }
}

export default SubList;