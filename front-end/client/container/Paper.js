import React, { Component } from 'react';

class Paper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <header>
          <h2>高中语文随堂练习</h2>
        </header>
        <section>
          <h3>第I卷（选择题）</h3>
          <p>本试卷第一部分共有4道试题。</p>
          <h4>一、单选题（共4小题）</h4>
        </section>
        <section>
          <h3>第II卷（非选择题）</h3>
          <p>本试卷第一部分共有4道试题。</p>
          <h4>二、单选题（共4小题）</h4>
        </section>
      </section>
    );
  }
}

export default Paper;