import React from 'react';

import Chip from 'material-ui/Chip';

export default class NewUserChip extends React.Component {
  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  getInfo() {
    return this.props.sub.subid;
  }

  handleTouchTap() {
    this.props.onChange({subid: this.getInfo()}, 'add');
  }

  render() {
    const { sub, user } = this.props;
    var chip = {}, count = 0;

    for (let i = 0; i < user.subjects.length; i++) {
      if(user.subjects[i] == sub.subid) {
        count++;
      }
    }

    if( count === 0) {
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