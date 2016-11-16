import React from 'react';

import Chip from 'material-ui/Chip';

export default class UnChosenChip extends React.Component {
  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  getUser() {
    return this.props.user.userId;
  }

  getInfo() {
    return this.props.sub.subid;
  }

  handleTouchTap() {
    this.props.onChange(this.getInfo(), 'add');
  }

  render() {
    const { sub, user } = this.props;
    let chip;

    if(user.add.indexOf(sub.subid) === -1) {
      chip = {
        margin: 4
      }
    } else {
      chip = {
        margin: 4,
        backgroundColor: '#00BCD4'
      }
    }

    return (
      <Chip
        style={chip}
        onTouchTap = {this.handleTouchTap}>
        {sub.context}
      </Chip>
    );
  }
}