import React from 'react';
import style from '../style/QuestionCard.css';

import FlatButton from 'material-ui/FlatButton';

export default class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      over: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
  }

  handleMouseEnter() {
    this.setState({over: !this.state.over})
  }

  handleMouseLeave() {
    this.setState({over: !this.state.over})
  }

  handleDelete() {
    const { i, index } = this.props;
    this.props.onChange({i, index}, 'delete')
  }

  handleDown() {
    const { i, index } = this.props;
    this.props.onChange({i, index, title: false, type: ""}, 'down')
  }

  handleUp() {
    const { i, index } = this.props;
    this.props.onChange({i, index, title: false, type: ""}, 'up')
  }

  render() {
    const { radio, i, length } = this.props;
    const first = i === 0;
    const last = i + 1 == length;
    let buttonArea = {};
    if(this.state.over) {
      buttonArea = { padding: '1em' }
    } else {
      buttonArea = { display: 'none' }
    }

    return (
      <div className={style.Card} onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
        <div>{i + 1}.<img src={`http://${radio.qurl}`} /></div>
        <div style={buttonArea}>
          <FlatButton label="删除此题" secondary={true} onClick={this.handleDelete}/>
          {first
            ? null
            : <FlatButton label="上移" onClick={this.handleUp}/>
          }
          {last
            ? null
            : <FlatButton label="下移" onClick={this.handleDown}/>
          }
        </div>
      </div>
    );
  }
}
