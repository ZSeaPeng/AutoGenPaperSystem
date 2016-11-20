import React from 'react';
import styles from '../style/QuestionCard.css';
let Nzh = require("nzh");
let nzhcn = Nzh.cn;

import FlatButton from 'material-ui/FlatButton';

//component
import QuestionCard from '../components/QuestionCard';

export default class NotRadio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
  }

  handleDown() {
    const { i, other } = this.props;
    this.props.onChange({i, title: true, type: other.type}, 'down')
  }

  handleUp() {
    const { i, other } = this.props;
    this.props.onChange({i, title: true, type: other.type}, 'up')
  }

  handleChange(details, type) {
    const { other, i } = this.props;
    this.props.onChange({...details, titleId: i}, type);
  }

  render() {
    const { other, i, length } = this.props;
    const first = i === 0;
    const last = i + 1 == length;
    return (
      <div >
        <div className={styles.notRadio}>
          <h4 className={styles.h4}>{nzhcn.encodeS(i + 2)}、{other.type}(共{other.questions.length}小题)</h4>
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
        {other.questions.map((question, i) =>
          <QuestionCard key={i} radio={question} i={i} length={other.questions.length} onChange={this.handleChange}/>
        )}
      </div>
    );
  }
}
