import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../style/QuestionCard.css';
import store, { history } from '../store';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

//import action
import { 
  getOldTestPaper, getTestPaper, paperDown, paperUp, 
  paperDelete, paperUup, paperDdown, finalAction, scoreChange, changePaperName 
} from '../actions/actionCreators';

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
      open: false,
      open1: false,
      score1: '',
      paperName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleMake = this.handleMake.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose1 = this.handleClose1.bind(this);
    this.paperNameChange = this.paperNameChange.bind(this);
  }

  handleChangeName() {
    this.setState({open1: !this.state.open1})
  }

  handleClose1() {
    this.setState({open1: !this.state.open1})
  }

  paperNameChange(e) {
    this.state.paperName = e.target.value;
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { paperName } = this.state;
    dispatch(changePaperName(paperName))
    this.setState({paperName: '', open1: false})

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
    let { paperName, subid, questions, subName } = this.props.testPaper;
    let l = 0;
    for(let i = 0; i < questions.length; i++) {
      l += questions[i].questions.length;
    }
    if(paperName === '')  { paperName = '单元测试卷' }
    let info = {
      userid: sessionStorage.getItem('userid'),
      title: paperName,
      question: array,
      subid,
      length: l,
      subName
    }
    dispatch(finalAction(info));
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
    const funcx = () => {
      const {qurl, aurl } = this.props.testPaper;
      if (qurl === "") {
        funcx()
      } else {
        this.setState({style: { display: 'none' },open: 'true'});
        document.documentElement.style.overflow='auto';
      }
    }
    funcx()
  }

  handleClose() {
    this.setState({open: false});
  }

  handleChange(details, type) {
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

  handleScore(e) {
    this.state.score1 = e.target.value
  }

  handleScoreChange() {
    const {dispatch } = this.props;
    const { score1 } = this.state;
    dispatch(scoreChange({index: 0, score: score1}))
    this.state.score1 = ''
  }

  render() {
    const { subName, type, questions, qurl, aurl, paperName } = this.props.testPaper;
    let others = [], radios = {i: 0, questions: []}, length = 0;
    let s = 0, rs = 0, ls = [];
    for (let i = 0; i < questions.length; i++) {
      if(questions[i].type === '选择题') {
        s += parseInt(questions[i].score);
        rs = s;
        radios = {...radios, i: i, questions: [...questions[i].questions]};
      } else {
        s += parseInt(questions[i].score);
        ls.push(parseInt(questions[i].score));
        others = [...others, {...questions[i], i: i}];
        length += questions[i].questions.length;
      }
    }
    let lss = s - rs;
    const otherL = length === 0;
    const radioL = radios.questions.length === 0;
    const hasName = paperName === ''
    return (
      <div>
        <div className={styles.div}>
          <section className={styles.main}>
            <header>
              {paperName
                ? <h2 style={{display: 'inline-block'}}>{paperName}</h2>
                : <h2 style={{display: 'inline-block'}}>{subName}{type}卷</h2>
              }
              <FlatButton label = "修改标题" secondary={true} onClick = {this.handleChangeName} />
              <h3 style={{margin: 0}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                总分：{s}
              </h3>
            </header>
            {radioL
              ? null
              : <section className={styles.second}>
                <h3 className={styles.h3}>第I卷（选择题）</h3>
                <p style={{margin: 0}}>本试卷第一部分共有{radios.questions.length}道试题, {rs}分。</p>
                <h4 style={{margin: 0}}>一、选择题（共{radios.questions.length}小题, {rs}分）</h4>
                 <div>
                  修改分值
                  <TextField onChange={this.handleScore}/>
                  <FlatButton label="确定" secondary={true} onClick={this.handleScoreChange} />
                </div>
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
              <p style={{margin: 0}}>本试卷第一部分共有{length}道试题, {lss}分。</p>
              {others.map((other,i) => <NotRadio {...this.props} score = {ls[i]} l = {radioL} {...this.props} i={i} key={i} other={other} length={others.length} onChange={this.handleChange}/>)}
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
          title="修改标题"
          actions={[<RaisedButton label="确认" secondary={true} onClick={this.handleSubmit}/>]}
          modal={false}
          open={this.state.open1}
          onRequestClose={this.handleClose1}>
          <TextField
            onChange={ this.paperNameChange }
          />
        </Dialog>
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
