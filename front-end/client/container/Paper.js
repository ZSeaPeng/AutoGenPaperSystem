import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../style/QuestionCard.css';

//import action
import { getTestPaper, changeLength, changeOthers, changeRadios } from '../actions/actionCreators';

import FlatButton from 'material-ui/FlatButton';

//component
import QuestionCard from '../components/QuestionCard';
import NotRadio from '../components/NotRadio';

let others = [], radios = [], length = 0;

class Paper extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTestPaper());
    setTimeout(getInfo(), 1000);
  };

  getInfo() {
    const { dispatch } = this.props;
    const { subName, Type, questions, others, radios, length } = this.props.testPaper;
    for (let i = 0; i < questions.length; i++) {
      if(questions[i].type === '单选题') {
        dispatch(changeRadios(questions[i].questions))
      } else {
        dispatch(changeOthers(questions[i]));
        dispatch(changeLength);
      }
    }
  }

  handleChange(details, type) {
    if(type === 'up') {
      console.log(details)
    } else if (type === 'down') {
      console.log(details)
    } else if (type === 'delete') {
      if(details.titleId === "") {
        radios = [...radios.slice(0, details.i), ...radios.slice(details.i + 1)];
        console.log(radios);
      } else {
        others[details.titleId].questions = [...others[details.titleId].questions.slice(0, details.i), ...others[details.titleId].questions.slice(details.i + 1)];
        console.log(others);
      }
    }
  }

  render() {
    const { subName, Type, questions, others, radios, length } = this.props.testPaper;
    // for (let i = 0; i < questions.length; i++) {
    //   if(questions[i].type === '单选题') {
    //     dispatch(changeRadios(questions[i].questions))
    //   } else {
    //     dispatch(changeOthers(questions[i]));
    //     dispatch(changeLength);      }
    // }
    this.getInfo();
    return (
      <div className={styles.div}>
        <table className={styles.table}>
          <tr>
            <td className={styles.td1}>学校:___________&nbsp;&nbsp;班级：___________&nbsp;&nbsp;姓名：___________&nbsp;&nbsp;考号：___________</td>
          </tr>
          <tr>
            <td className={styles.td2}>密&nbsp;&nbsp;&nbsp;封&nbsp;&nbsp;&nbsp;线&nbsp;&nbsp;&nbsp;内&nbsp;&nbsp;&nbsp;不&nbsp;&nbsp;&nbsp;要&nbsp;&nbsp;&nbsp;答&nbsp;&nbsp;&nbsp;题</td>
          </tr>
        </table>
        <section className={styles.main}>
          <header>
            <h2>{subName}{Type}卷</h2>
          </header>
          <section className={styles.second}>
            <h3 className={styles.h3}>第I卷（选择题）</h3>
            <p style={{margin: 0}}>本试卷第一部分共有{radios.length}道试题。</p>
            <h4 style={{margin: 0}}>一、单选题（共{radios.length}小题）</h4>
            {radios.map((radio, i) => <QuestionCard key={i} radio={radio} i={i} length={radios.length} onChange={this.handleChange}/>)}
          </section>
          <section className={styles.second}>
            <h3 className={styles.h3}>第II卷（非选择题）</h3>
            <p style={{margin: 0}}>本试卷第一部分共有{length}道试题。</p>
            {others.map((other,i) => <NotRadio i={i} key={i} other={other} length={others.length} onChange={this.handleChange}/>)}
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({grades, testPaper}) => ({grades, testPaper});

export default connect(mapStateToProps)(Paper);