import React from 'react';
import styles from '../style/QuestionCard.css';
let Nzh = require("nzh");
let nzhcn = Nzh.cn;

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

//component
import QuestionCard from '../components/QuestionCard';

import scoreChange from '../actions/actionCreators';

export default class NotRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
  }

  handleDown() {
    const { i, other } = this.props;
    this.props.onChange({index: other.i, title: true}, 'down')
  }

  handleUp() {
    const { i, other } = this.props;
    this.props.onChange({index: other.i, title: true}, 'up')
  }

  handleScore(e) {
    this.setState({score: e.target.value})
  }

  handleChange(details, type) {
    const { other, i } = this.props;
    this.props.onChange({...details}, type);
  }

  handleScoreChange() {
    const {dispatch, other} = this.props;
    const { score } = this.state;
    dispatch(scoreChange({index: other.i, score}))
    this.state.score = ''
  }

  render() {
    const { other, i, length, l, score } = this.props;
    const first = i === 0;
    const last = i + 1 == length;
    const empty = other.questions.length === 0;
    return (
      <div>
      {empty
        ? null
        : <div>
          <div className={styles.notRadio}>
            {l
              ? <h4 className={styles.h4}>{nzhcn.encodeS(i + 1)}、{other.type}(共{other.questions.length}小题, {score}分)</h4>
              : <h4 className={styles.h4}>{nzhcn.encodeS(i + 2)}、{other.type}(共{other.questions.length}小题, {score}分)</h4>
            } 
            <div>
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
            <div>
              修改分值
              <TextField value = {this.state.score} onChange={this.handleScore}/>
              <FlatButton label="确定" secondary={true} onClick={this.handleScoreChange} />
            </div>
          {other.questions.map((question, i) =>
            <QuestionCard {...this.props} key={i} radio={question} i={i} index={other.i} length={other.questions.length} onChange={this.handleChange}/>
          )}
        </div>
      }
      </div>
    )
  }
}
