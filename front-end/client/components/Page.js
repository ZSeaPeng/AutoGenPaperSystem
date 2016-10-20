import React, {Component} from 'react';
import { Link } from 'react-router';

class Page extends Component {
  render() {
    const { pageNum, pages } = this.props
    const { pathname } = this.props.location;
    const path = pathname.replace(/\/question/i, '');
    var rows = [];
    const style = {
      height: '25px',
      border: '1px solid #C5CAE9',
      display: 'inline-block',
      lineHeight: '25px',
      margin: '1px 1px 5px 1px',
      padding: '0 10px'
    }
    if (pageNum > 1) {
      rows.push(
        <div style = {style}>
          <Link to={`${path}/question?page=${pageNum - 1}`}>上一页</Link>
        </div>
      )
    }
    for (let i = pageNum - 3; i <= pageNum + 3; i++) {
      if (i > 0 && i <= pages && i !==pageNum ) {
        rows.push(
          <div style={style}>
            <Link to={`${path}/question?page=${i}`}>{i}</Link>
          </div>
        )
      } else if (i === pageNum) {
        rows.push(<div style={{
          color: '#FFFFFF',
          border: '1px solid #FF5252',
          background: '#FF5252',
          width: '25px',
          height: '25px',
          display: 'inline-block',
          lineHeight: '25px',
          margin: '1px 1px 5px 1px'
        }}>{i}</div>)
      }
    }
    if (pageNum < pages) {
      rows.push(
        <div style = {style}>
          <Link to={`${path}/question?page=${pageNum + 1}`}>下一页</Link>
        </div>
      )
    }
    return (
      <div style = {{textAlign: 'center'}}>
        { rows }
      </div>
    );
  }
}

export default Page;
