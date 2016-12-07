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
  };
  handleCheck(e){

    var isChecked = e.target.checked;
    var pointId = e.target.name;
    this.props.callback(isChecked, pointId);
  };

  onPointChanged = (isChecked, pointId) => {
    this.props.callback(isChecked, pointId);
  }
  render() {
    const { point, pointValue, pId } = this.props;
    var style = {};
    if (parseInt(pointValue) === parseInt(pId)) {
      style = { display: 'block' }
    } else {
      style = { display: 'none' }
    }
    var isEmpty = point.sublist === 0;
    return (
      <div style={style}>
        {isEmpty ?
          <div>
            <Checkbox
              name={point.id}
              label={point.name}
              style={styles.checkbox}
              onCheck={this.handleCheck}
            />
          </div>
          :
          <div>
            <Checkbox
              name={point.id}
              label={point.name}
              style={styles.checkbox}
              onCheck={this.handleCheck}
            />
            {point.pointList.map((point, i) =>
              <ChoosePoint point={point} key={i} pId={100} callback={this.onPointChanged}/>)}
          </div>
        }

      </div>
    )
  }
};

export default ChoosePoint;
