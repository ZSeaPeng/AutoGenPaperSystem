import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../style/QuestionCard.css';
import store, { history } from '../store';

//import action
import { getOldTestPaper, getTestPaper, paperDown, paperUp, paperDelete, paperUup, paperDdown } from '../actions/actionCreators';

//component
import QuestionCard from '../components/QuestionCard';
import NotRadio from '../components/NotRadio';
import PaperChoosed from '../components/PaperChoosed';

class Paper extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handelChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const search = window.location.search;
    if(search === '') {
    dispatch(getTestPaper());
    } else {
      dispatch(getOldTestPaper(query));
    }
  };

  handelChange(details, type) {
    const { dispatch } = this.props;
    if(type === 'up') {
      if(!details.title) {
        dispatch(paperUp(details))
      } else {
        dispatch(paperUup(details))
      }
    } else if (type === 'down') {
      if(!details.title) {
        dispatch(paperDown(details))
      } else {
        dispatch(paperDdown(details))
      }
    } else if (type === 'delete') {
      dispatch(paperDelete(details))
    }
  }

  render() {
    const { userid } = this.props.grades;
      if(userid === -1) {
        alert("请先登录");
        history.push('/')
      }
    const { subName, Type, questions } = this.props.testPaper;
    let others = [], radios = {i: 0, questions: []}, length = 0;
    for (let i = 0; i < questions.length; i++) {
      if(questions[i].type === '单选题') {
        radios = {...radios, i: i, questions: [...questions[i].questions]};
      } else {
        others = [...others, {...questions[i], i: i}];
        length += questions[i].questions.length;
      }
    }
    const otherL = length === 0;
    const radioL = radios.questions.length === 0;
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
          {radioL
            ? null
            : <section className={styles.second}>
              <h3 className={styles.h3}>第I卷（选择题）</h3>
              <p style={{margin: 0}}>本试卷第一部分共有{radios.questions.length}道试题。</p>
              <h4 style={{margin: 0}}>一、单选题（共{radios.questions.length}小题）</h4>
              {radios.questions.map((radio, i) => <QuestionCard key={i} radio={radio} index={radios.i} i={i} length={radios.questions.length} onChange={this.handleChange}/>)}
            </section>
          }
          {otherL
            ? null
            : <section className={styles.second}>
            <h3 className={styles.h3}>第II卷（非选择题）</h3>
            <p style={{margin: 0}}>本试卷第一部分共有{length}道试题。</p>
            {others.map((other,i) => <NotRadio i={i} key={i} other={other} length={others.length} onChange={this.handleChange}/>)}
          </section>
          }
        </section>
        <div className={styles.Side} style={{ right: 0,width: '270px'}}>
          <PaperChoosed radios={radios} others={others} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({grades, testPaper}) => ({grades, testPaper});

export default connect(mapStateToProps)(Paper);