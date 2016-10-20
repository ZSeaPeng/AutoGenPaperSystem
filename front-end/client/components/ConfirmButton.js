import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  confirmButton: {
    width: "16%",
    height: 50,
    marginLeft: "42%",
    marginTop: 30,
  },
};

class ConfirmButton extends Component{
    render() {
        return(
        	<div>
            <RaisedButton
              label="选择试题"
              secondary={true}
              href="/"
              style={styles.confirmButton}
            />
          </div>
        )
    }
};



export default ConfirmButton;