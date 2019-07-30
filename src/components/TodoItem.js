import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component{

  getStyle = () => {
    return this.props.todo.completed ?
      'list-group-item list-group-item-success text-muted' :
      'list-group-item font-weight-bold';
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <li className={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        {'  '}{title}
        <button className="btn btn-danger btn-sm float-right" onClick={this.props.delTodo.bind(this, id)}>
          <i className="material-icons">delete_outline</i>
        </button>
      </li>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodoItem;
