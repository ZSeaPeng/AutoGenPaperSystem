import React, { Component } from 'react';
import style from '!style!css!../style/slick.min.css';
import imgSrc1 from '../img/intro1.png';
import imgSrc2 from '../img/school.png';
import imgSrc3 from '../img/teacher.png';
import imgSrc4 from '../img/student.png';
import imgSrc5 from '../img/erweima.png';

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
  container1: {
    padding: 'auto',
    margin: 'auto',
    height: 500,
  },
  container3: {
    padding: 'auto',
    margin: 'auto',
    height: 500,
    backgroundColor: '#E0E0E0',
  },
  container2: {
    width: 900,
    height: 500,
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
  container4: {
    height: 600,
    padding: 'auto',
    margin: 'auto',
  },
  container5: {
    padding: 'auto',
    margin: 'auto',
    height: 800,
    backgroundColor: '#E0E0E0',
  },
  container6: {
    height: 400,
    padding: 'auto',
    margin: 'auto',
  },
  container7: {
    width: 900,
    height: 400,
    padding: 'auto',
    margin: 'auto',
    paddingTop: 10,
  },
};

export default class ProductIntro extends Component {
	render() {
		return (
      <div style={styles.container}>
        <div style={styles.container1}>
          <div style={styles.container2}>
            <p style={{padding:10}}></p>
            <img src={imgSrc1}/>
            <div>
              <p style={styles.title1}><span style={styles.title}><img src={imgSrc2}/>&nbsp;学校：&nbsp;</span>
                保证了教学质量测验的科学性、客观性、高效性、全面性</p>
            </div>
            <div>
              <p style={styles.title1}><span style={styles.title}><img src={imgSrc3}/>&nbsp;教师：&nbsp;</span>
                全身心投入教学，保证学生全面的接受检测，减少工作量</p>
            </div>
            <div>
              <p style={styles.title1}><span style={styles.title}><img src={imgSrc4}/>&nbsp;学生：&nbsp;</span>
                需要科学全面的受到检测，查漏补缺，找准方向提升成绩</p>
            </div>
          </div>
        </div>

        <div style={styles.container3}>
          <div style={styles.container2}>
            <h2 style={styles.title2}>需求分析:</h2>
            <p style={styles.text}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              当今社会，应试教育造成的升学压力一直笼罩在教师、学生及其家长心头。
              为使学生获得更好的成绩，学校组织定期的考试测验是必不可少的，我们已经意识到沉重的课业负担压迫着广大中学生。
              但是，社会各界对于中学老师面临的压力却很少被提及，尤其是中职教育的老师们。
            </p>
            <p style={styles.text}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              除日常的校内各项活动和授课的工作外，学校定期组织的测验测试是极其重要不可忽视的，
              为了更科学、更高效完成考试测验的工作准备，减轻中职教师的负担，东博职教通题库及智能组卷系统应运而生。
              杭州东博文化传媒公司以学校应用的理念为核心，开发了这套集老师找题、选题、人工组卷、
              智能组卷为一体的东博职教通题库及智能组卷系统。
            </p>
          </div>
        </div>

        <div style={styles.container4}>
          <div style={styles.container2}>
            <h2 style={styles.title2}>产品概述:</h2>
            <p style={styles.text}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              东博职教通题库及智能组卷系统是由杭州东博文化传媒有限公司研发的一个旨在为广大职业教育老师找题、
              选题、人工组卷、智能组卷等提供便捷、高效精准的互联网教育平台。
              本系统是全国首款针对中等职业学校所量身打造的智能组卷系统，
              将满足职业学校在各类考试试卷准备上的各种需求。
            </p>
            <p style={styles.text}>
              功能简介：帮助老师查询题目，进行人工或者智能组卷<br/>
              1.&nbsp;试题查询浏览：通过知识点、难易度、题干内容等条件查询所需题目<br/>
              2.&nbsp;人工组卷：选择试卷参数，试题范围，题型题分，汇总整合完成出卷，试卷微调，试卷预览<br/>
              3.&nbsp;智能组卷：选择试卷参数，试题范围，题型题分，完成出卷，试卷微调及预览<br/>
              4.&nbsp;试题打印：组卷完成的试卷可一键根据需求进行打印<br/>
              5.&nbsp;试卷备份：一个教师账号完成的组卷后的试卷，系统会自动进行备份<br/>
            </p>
          </div>
        </div>

        <div style={styles.container5}>
          <div style={styles.container2}>
            <h2 style={styles.title2}>优势分析:</h2>
            <p style={styles.text}>
              1.&nbsp;东博职教通题库及智能组卷系统是目前职业教育行业首创的题库组卷平台。<br/>
              2.&nbsp;题库内容丰富，覆盖面广，试题质量高，内容新，符合高职考命题思路。<br/>
              3.&nbsp;智能组卷系统操作简单、快捷。<br/>
              4.&nbsp;东博职教通题库及智能组卷系统进行组卷，试卷内容更科学、客观、全面。
            </p>
            <p style={styles.text}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              东博职教通题库及智能组卷系统是由东博文化传媒的一批计算机专业人才利用互联网优势和计算机技术，
              经过不断的实践与创新，将传统的、固化的、单调的试题信息，通过计算机程序的加工处理，形成灵活的、
              可随意修改和增减试题信息的个性化、标准化试卷，是目前职业教育行业首创的题库组卷平台。
            </p>
            <p style={styles.text}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              东博职教通题库编写团队为省内资深教研人员及国家级重点中职学校一线骨干教师。
              题库内容包含近五年高职考试卷、省联合体联考试卷、其他地区模拟试卷等。
              所有试题均符合浙江省高职（单考单招）招生考试说明的要求，导向科学、题路清晰、有利教学、贴近高考，
              所有试题质量高、内容新，符合高职考命题思路。东博职教通题库及智能组卷系统在找题、选题和组卷过程中，
              组成试卷的题型、题量、难易度、区分度等要素可自由调整，灵活把控。组卷分人工组卷和智能组卷，
              组卷教师可以根据不同科目不同章节知识点，人工选择题型题目，完成组卷；也可选中科目章节后，
              由系统自动完成试卷生成。适合高一高二的同步练习、阶段测试和高三综合练习、模拟考试的人工组卷和智能组卷。
            </p>
          </div>
        </div>

        <div style={styles.container6}>
          <div style={styles.container7}>
            <p style={{fontFamily: "Microsoft YaHei",
                        fontWeight: "bold",
                        color: "#2196F3",
                        textAlign: 'center',
                        fontSize: 30,}}>
              更多资讯，敬请关注微信公众号“浙江职教通”
            </p>
            <div style={{textAlign: 'center'}}>
              <img src={imgSrc5}/>
            </div>
          </div>
        </div>

      </div>
		);
	}
}
