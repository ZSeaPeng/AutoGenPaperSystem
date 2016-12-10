import React from 'react';

import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

export default class UnChosenChip extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getUser() {
    return this.props.user.userId;
  }

  getInfo() {
    return this.props.sub.subid;
  }

  handleChange(e) {
    this.state.count = e.target.value;
    const id = this.getInfo();
    const count = this.state.count;
    this.props.onChange({id, count}, 'add')
  }

  render() {
    const { sub, user } = this.props;
    // let chip;

    // if(user.add.indexOf(sub.subid) === -1) {
    //   chip = {
    //     margin: 4
    //   }
    // } else {
    //   chip = {
    //     margin: 4,
    //     backgroundColor: '#00BCD4'
    //   }
    // }

    return (
      <TextField
        onChange={this.handleChange}
        floatingLabelText={sub.context}
        floatingLabelStyle = {{color: "#000000"}}
        floatingLabelFocusStyle={{color: "#00BCD4"}}
      />
    );
  }
}