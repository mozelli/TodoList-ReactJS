import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with girlfriend',
        completed: false,
      },
      {
        id: 3,
        title: 'Meeting with client',
        completed: false,
      },
    ]
  }

  // Toggle Completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
