import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../style/QuestionCard.css';
import store, { history } from '../store';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

//import action
import { getOldTestPaper, getTestPaper, paperDown, paperUp, paperDelete, paperUup, paperDdown, finalAction } from '../actions/actionCreators';

//component
import QuestionCard from '../components/QuestionCard';
import NotRadio from '../components/NotRadio';
import PaperChoosed from '../components/PaperChoosed';

class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        display: 'none' 
      },
      score: 0,
      open: false
    }
    this.handleChange = this.handelChange.bind(this);
    this.handleMake = this.handleMake.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const query = window.location.search;
    if(query === '') {
    dispatch(getTestPaper());
    } else {
      dispatch(getOldTestPaper(query));
    }
  };

  handleMake(array) {
    const { dispatch } = this.props;
    dispatch(finalAction(array));
    const { subName, type, questions, qurl, aurl } = this.props.testPaper;
    if (qurl !== "") {
      this.setState({style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        marginTop: '-56px',
        backgroundColor: 'hsla(0, 0%, 0%, 0.5)'}
      })
      document.documentElement.style.overflow='hidden';
    } else {
      this.setState({style: { display: 'none' },open: 'true'});
      document.documentElement.style.overflow='auto';
    }
  }

  handleClose() {
    this.setState({open: false});
  }

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
    const { subName, type, questions, qurl, aurl } = this.props.testPaper;
    let others = [], radios = {i: 0, questions: []}, length = 0;
    let rs = 0, nrs = 0;//选择题总分，非选择题总分
    for (let i = 0; i < questions.length; i++) {
      if(questions[i].type === '选择题') {
        // for(let j = 0; j < questions[i].questions.length; j++) {
        //   rs += questions[i].questions[j].score;
        // }
        radios = {...radios, i: i, questions: [...questions[i].questions]};
      } else {
        // for(let j = 0; j < questions[i].questions.length; j++) {
        //   nrs += questions[i].questions[j].score;
        // }
        others = [...others, {...questions[i], i: i}];
        length += questions[i].questions.length;
      }
    }
    let ts = rs + nrs; //总分
    const otherL = length === 0;
    const radioL = radios.questions.length === 0;
    return (
      <div>
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
              <h2 style={{display: 'inline-block'}}>{subName}{type}卷</h2>
              <h3 style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总分：{ts}</h3>
            </header>
            {radioL
              ? null
              : <section className={styles.second}>
                <h3 className={styles.h3}>第I卷（选择题）</h3>
                <p style={{margin: 0}}>本试卷第一部分共有{radios.questions.length}道试题, {rs}分。</p>
                <h4 style={{margin: 0}}>一、选择题（共{radios.questions.length}小题, {rs}分）</h4>
                {radios.questions.map((radio, i) => 
                  <QuestionCard 
                    dispatch = {this.props.dispatch} 
                    key={i} radio={radio} index={radios.i} i={i} 
                    length={radios.questions.length} onChange={this.handleChange}
                  />)
                }
              </section>
            }
            {otherL
              ? null
              : <section className={styles.second}>
              {radioL
                ? <h3 className={styles.h3}>第I卷（非选择题）</h3>
                : <h3 className={styles.h3}>第II卷（非选择题）</h3>
              } 
              <p style={{margin: 0}}>本试卷第一部分共有{length}道试题, {nrs}分。</p>
              {others.map((other,i) => <NotRadio l = {radioL} {...this.props} i={i} key={i} other={other} length={others.length} onChange={this.handleChange}/>)}
            </section>
            }
          </section>
          <div className={styles.Side} style={{ right: 0,width: '270px'}}>
            <PaperChoosed { ...this.props } radios={radios} others={others} onChange={this.handleMake}/>
          </div>
        </div>
        <div style={this.state.style}>
          <CircularProgress />
        </div>
        <Dialog
          title="点击下载"
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <a download={qurl}>试卷</a>, <a download={aurl}>答案</a>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({grades, testPaper}) => ({grades, testPaper});

export default connect(mapStateToProps)(Paper);
