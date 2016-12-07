import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333",
  },
  slider: {
    width: "76%",
    marginLeft: "12%",
  },
  table: {
    width: "90%",
    marginLeft: "5%",
    fontFamily: "Microsoft YaHei",
    color: "gray",
  }
};



class ChooseDifficulty extends Component {
  state = {
    diff: 0.5,
  };

  handleChange = (event, value) => {
    this.setState({diff: value});
    if (value == 0) {
      this.props.callback("1");
    } else if (value == 0.25) {
      this.props.callback("2");
    } else if (value == 0.5) {
      this.props.callback("3");
    } else if (value == 0.75) {
      this.props.callback("4");
    } else {
      this.props.callback("5");
    };
  };

  render() {
    return (
      <div>
        <h3 style={styles.title}>选择难度</h3>
        <Slider style={styles.slider}
          step={0.25}
          defaultValue={0.5}
          value={this.state.diff}
          onChange={this.handleChange}
          />
        <table style={styles.table}>
          <tbody>
          <tr>
            <th>1.00-0.86</th>
            <th>0.85-0.71</th>
            <th>0.70-0.56</th>
            <th>0.55-0.41</th>
            <th>0.40-0.26</th>
          </tr>
          <tr>
            <th>容易</th>
            <th>较易</th>
            <th>中等</th>
            <th>较难</th>
            <th>困难</th>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

export default ChooseDifficulty;
