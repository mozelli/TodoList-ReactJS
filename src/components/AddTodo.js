import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-row mt-3">
          <div className="col-10">
            <input
              type="text"
              name="title"
              placeholder="Add Todo..."
              className="form-control"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-info btn-block btn-sm"
            ><i className="material-icons">note_add</i></button>
          </div>
        </div>
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
