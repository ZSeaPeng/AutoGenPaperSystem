import React, { Component }from 'react';
import { Link } from 'react-router';

class Lest extends Component{
  render() {
    const { type } = this.props;
    const { select } = type ;
    return (
      <div>
      {select
          ?<span
            style = {{lineHeight: '56px', margin: '0 5px', padding:'5px 10px', color:'#FFFFFF', background: ' #1E88E5'}}>
            {type.name}
          </span>
          :<Link
            style = {{lineHeight: '56px', margin: '0 5px', padding:'0 10px'}}
            to={`${type.url}`}>
            {type.name}
          </Link>
      }
      </div>
    )
  }
};

export default Lest;