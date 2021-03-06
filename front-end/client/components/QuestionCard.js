import React from 'react';
import style from '../style/QuestionCard.css';
import { browserHistory } from 'react-router';
var pinyin = require('pinyin');

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
  positionChange,
  paperDelete,
  asynRandomChange
} from '../actions/actionCreators';

export default class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      over: false,
      number: '',
      score: ''
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
  }

  handleMouseEnter() {
    this.setState({ over: !this.state.over });
  }

  handleMouseLeave() {
    this.setState({ over: !this.state.over });
  }

  handleDelete() {
    const { i, index } = this.props;
    this.props.onChange({ i, index }, 'delete');
  }

  handleDown() {
    const { i, index } = this.props;
    this.props.onChange({ i, index, title: false, type: '' }, 'down');
  }

  handleUp() {
    const { i, index } = this.props;
    this.props.onChange({ i, index, title: false, type: '' }, 'up');
  }

  handleNumberChange(e) {
    this.setState({ number: e.target.value });
  }

  handleRandom() {
    const { dispatch, i, index, subName, radio } = this.props;
    dispatch(asynRandomChange({ index, i, id: radio.id }));
    // const subNameList = pinyin(subName, {
    //                       style: pinyin.STYLE_INITIALS
    //                     });
    // var subPath = "";
    // for(let i = 0; i < subNameList.length; i++) {
    //    subPath = subPath + subNameList[i];
    // }

    // browserHistory.push('/' + subPath + '/');
  }

  handlePositionChange() {
    const { dispatch } = this.props;
    const { i, index } = this.props;
    const { number } = this.state;
    if (i > number - 1) {
      dispatch(positionChange({ index, i, number: number - 1, title: false }));
      dispatch(paperDelete({ index, i: i + 1, title: false }));
    } else {
      dispatch(positionChange({ index, i, number, title: false }));
      dispatch(paperDelete({ index, i, title: false }));
    }
    this.state.number = '';
  }

  render() {
    const { radio, i, length } = this.props;
    const first = i === 0;
    const last = i + 1 == length;
    let buttonArea = {};
    if (this.state.over) {
      buttonArea = { padding: '1em' };
    } else {
      buttonArea = { display: 'none' };
    }

    return (
      <div
        className={style.Card}
        onMouseOver={this.handleMouseEnter}
        onMouseOut={this.handleMouseLeave}
      >
        <div>
          {i + 1}.
          <div style={{ width: '820px' }}>
            <img
              style={{ width: '95%', height: '95%' }}
              src={`http://${radio.qurl}`}
            />
          </div>
        </div>
        <div style={buttonArea}>
          <FlatButton
            label="删除此题"
            secondary={true}
            onClick={this.handleDelete}
          />
          {first ? null : <FlatButton label="上移" onClick={this.handleUp} />}
          {last ? null : <FlatButton label="下移" onClick={this.handleDown} />}
          <FlatButton label="换题" onClick={this.handleRandom} />
          <div>
            移至第
            <TextField
              value={this.state.number}
              onChange={this.handleNumberChange}
            />
            题(共{length}题)
            <FlatButton
              label="确定"
              secondary={true}
              onClick={this.handlePositionChange}
            />
          </div>
        </div>

      </div>
    );
  }
}
