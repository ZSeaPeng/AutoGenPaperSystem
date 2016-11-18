import React, { Component } from 'react';

class Paper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      main: {
        position: 'absolute',
        marginLeft: '50%',
        left: '-400px',
        width: '900px',
        display: '-webkit-flex',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      second: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%'
      },
      td1: {
        padding: '20px 50px',
        border: '1px solid black'
      },
      td2: {
        padding: '5px',
        border: '1px solid black',
        verticalAlign: 'middle',
        textAlign: 'center'
      },
      div: {
        display: 'flex',
        width: '1000px',
        position: 'absolute',
        marginLeft: '50%',
        left: '-500px',
      },
      table: {
        borderCollapse: 'collapse',
        padding: '10px 3px',
        transform: 'rotate(-90deg)',
        margin: '300px 0 0 -200px'
      },
      h3: {
        display: 'flex',
        justifyContent: 'center'
      }
    }
    return (
      <div style={style.div}>
        <table style={style.table}>
          <tr>
            <td style={style.td1}>学校:___________&nbsp;&nbsp;班级：___________&nbsp;&nbsp;姓名：___________&nbsp;&nbsp;考号：___________</td>
          </tr>
          <tr>
            <td style={style.td2}>密&nbsp;&nbsp;&nbsp;封&nbsp;&nbsp;&nbsp;线&nbsp;&nbsp;&nbsp;内&nbsp;&nbsp;&nbsp;不&nbsp;&nbsp;&nbsp;要&nbsp;&nbsp;&nbsp;答&nbsp;&nbsp;&nbsp;题</td>
          </tr>
        </table>
        <section style={style.main}>
          <header>
            <h2>高中语文随堂练习</h2>
          </header>
          <section style={style.second}>
            <h3 style={style.h3}>第I卷（选择题）</h3>
            <p style={{margin: 0}}>本试卷第一部分共有4道试题。</p>
            <h4 style={{margin: 0}}>一、单选题（共4小题）</h4>
          </section>
          <section style={style.second}>
            <h3 style={style.h3}>第II卷（非选择题）</h3>
            <p style={{margin: 0}}>本试卷第一部分共有4道试题。</p>
            <h4 style={{margin: 0}}>二、单选题（共4小题）</h4>
          </section>
        </section>
      </div>
    );
  }
}

export default Paper;