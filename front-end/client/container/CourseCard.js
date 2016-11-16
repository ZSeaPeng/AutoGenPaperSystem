import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

import SubList from '../components/SubList';

import { asynDeleteNode, asynDeleteCourse } from '../actions/actionCreators';

const styles = {
  card: {
    minWidth: 330,
    margin: 10,
    display: 'inline-block'
  }
};

export default class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddNode = this.handleAddNode.bind(this);
  }

  handleDelete() {
    const { sub, i, dispatch } = this.props;
    dispatch(asynDeleteCourse({subName: sub.subName, i}));
  }

  handleChange(details) {
    const { i, sub, dispatch } = this.props;
    if(details.type === 'show') {
      this.props.onChange({subName:sub.subName, id: details.id, i});
    } else if (details.type === 'delete') {
      dispatch(asynDeleteNode({id: details.id, i}));
    }
  }

  handleAddNode() {
    const { sub, i } = this.props;
    this.props.onChange({subName: sub.subName, id: 0, i})
  }

  render() {
    const { sub } = this.props;
    return (
      <Card style={styles.card}>
        <CardHeader
          titleStyle = {{fontSize: 36}}
          title={sub.subName}
        />
        <CardActions>
          <FlatButton label="添加节点" secondary={true} onClick={this.handleAddNode}/>
        </CardActions>
        <CardText>
          <List>
            {sub.points.map((point, i) =>
              <SubList sub={sub} point={point} key={i} i={i} onChange={this.handleChange}/>)
            }
          </List>
        </CardText>
        <CardActions>
          <FlatButton label="删除此科目" secondary={true} onClick={this.handleDelete}/>
        </CardActions>
      </Card>
    );
  }
}
