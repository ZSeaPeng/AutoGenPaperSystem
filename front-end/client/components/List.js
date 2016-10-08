import React from 'react';
import { Link } from 'react-router';

const List = React.createClass({
    render() {
        const { type } = this.props;
        return (
            <Link to={`${type.url}`}>{type.name}</Link>
        )
    }

});

export default List;