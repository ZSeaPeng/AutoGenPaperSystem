import React, { Component } from 'react';
import style from '!style!css!../style/slick.min.css';

import imgSrc1 from '../img/jytd1.png';
import imgSrc2 from '../img/jytd2.png';

const styles = {
  title: {
    fontFamily: "Microsoft YaHei",
    fontWeight: "normal",
    color: "#E91E63",
    fontSize: 30,
  },
  title1: {
    fontFamily: "Microsoft YaHei",
    fontWeight: "normal",
    color: "#333",
    fontSize: 30,
  },
  container: {
    padding: 'auto',
    margin: 'auto',
  },
  container2: {
    width: 900,
    padding: 'auto',
    margin: 'auto',
    paddingTop: 10,
  },
  title2: {
    fontFamily: "Microsoft YaHei",
    fontWeight: "bold",
    color: "#E91E63",
    fontSize: 30,
  },
  text: {
    fontFamily: "Microsoft YaHei",
    fontWeight: "normal",
    fontSize: 24,
  },
};

export default class TeachingTeam extends Component {
	render() {
		return (
      <div style={styles.container}>
        <div style={styles.container2}>
          <h1 style={styles.title2}>教研团队</h1>
          <div style={{padding: 50}}>
            <img src={imgSrc1}/>
          </div>
          <p style={styles.text}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            智题库的教研团队由国家级高职考命题研究专家、曾经参与过高职考命题的专家，高职考模拟考试命题人、
            高职考阅卷人，全国《课程改革》和《考试说明》的编写者，全国教育发达地区教研室、研究所、教学基地、
            培训基地的教研员，全国重点职业中学的特(高)级骨干教师组成。
          </p>
          <div style={{padding: 50}}>
            <img src={imgSrc2}/>
          </div>
          <p style={styles.text}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            为确保智题库的试题质量高、内容新、更新快，导向科学、有利教学、贴近高职考，且符合高职考命题方向，
            智题库特别成立了专家委员会和高职考命题研究中心，聘请全国高职考命题研究专家、全国高职考辅导领军老师、
            国家级特（高）级教师担任高职考各学科的学科专家和研究员。
          </p>
        </div>
      </div>
		);
	}
}
