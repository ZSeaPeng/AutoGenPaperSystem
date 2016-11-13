import React from 'react';

import Chip from 'material-ui/Chip';

const style = {
  chip: {
    margin: 4,
  }
}

export default class ChosenChip extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);
  }

  getUser() {
    return this.props.user.userId;
  }

  getInfo() {
    return this.props.sub.subid;
  }

  handleRequestDelete() {
    this.props.onChange({userId: this.getUser(), subid: this.getInfo()}, 'delete');
  }

  render() {
    const { sub } = this.props;
    return (
      <Chip
        style={style.chip}
        onRequestDelete={this.handleRequestDelete}>
        {sub.context}
      </Chip>
    );
  }
}
