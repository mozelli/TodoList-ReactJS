import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends Component{
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({ todos: res.data });
      });
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
      });
  }

  // Add todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    })
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      })
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
