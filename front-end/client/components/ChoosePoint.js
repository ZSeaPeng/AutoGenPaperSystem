import React, { Component, PropTypes } from 'react';

import Checkbox from 'material-ui/Checkbox';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWright: "normal",
    color: "#333",
  },
  style: {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
    color: 'red',
  },
  checkbox: {
    marginBottom: 16,
  },
  child: {
    width: 200,
    backgroundColor: "#2196F3",
  }
};

class ChoosePoint extends Component {
  constructor (props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      isChecked : false,
      value : props.value
    };
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.value != this.state.value) {
      this.setState({value: this.props.value,
                     isChecked: false
                   });
    }
  }

  handleCheck(e){
    this.setState({isChecked: !this.state.isChecked});
    var isChecked = e.target.checked;
    var pointId = e.target.name;
    this.props.callback(isChecked, pointId);
  };

  onPointChanged = (isChecked, pointId) => {
    this.props.callback(isChecked, pointId);
  }
  render() {
    const { point, pointValue, pId, value } = this.props;
    var style = {};
    if (parseInt(pointValue) === parseInt(pId)) {
      style = { display: 'block' }
    } else {
      style = { display: 'none' }
    }
    var isEmpty = point.sublist === 0;
    return (
      <div >
        {isEmpty ?
          <div style={style}>
            <Checkbox
              checked={this.state.isChecked}
              name={point.id}
              label={point.name}
              style={styles.checkbox}
              onCheck={this.handleCheck}
            />
          </div>
          :
          <div style={style}>
            <Checkbox
              checked={this.state.isChecked}
              name={point.id}
              label={point.name}
              style={styles.checkbox}
              onCheck={this.handleCheck}
            />
            {point.pointList.map((subpoint, i) =>
              <ChoosePoint
                pointValue={pId}
                point={subpoint}
                key={i}
                pId={pId}
                callback={this.onPointChanged}
                value={value}
                />
              )}
          </div>
        }

      </div>
    )
  }
};

export default ChoosePoint;
