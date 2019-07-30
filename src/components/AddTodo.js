import React, {Component} from 'react';

export class AddTodo extends Component {
  render() {
    return (
      <form>
        <div className="form-row mt-3">
          <div className="col-10">
            <input
              type="text"
              name="title"
              placeholder="Add Todo..."
              className="form-control"
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

export default AddTodo;
