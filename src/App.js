import React, { Component } from 'react';
import './App.css';
import Todos from'./components/Todos';
import AddTodo from'./components/AddTodo';
import uuid from'uuid';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './pages/About.js';
import axios from 'axios';

class App extends Component {
  state = {
    todos : []
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = (id) =>{

    console.log(id+" is id")
    //let selectedTitle = e.target.parentElement.children[1].innerText;

    // let filteredTodo = this.state.todos.filter(e=>{
    //  if(e.title === selectedTitle) return true;
    //  return false;
    // })
    this.state.todos.map(e=>{

      if(e.id === id){
         e.completed = !e.completed;
         this.setState(e)
      }
    });
    
}

 // Delete Todo
 deleteTodo = id => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  );
};

addTodo = title => {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => {
      res.data.id = uuid.v4();
      this.setState({ todos: [...this.state.todos, res.data] });
    });
};

 render(){
   console.log(this.state.todos);
    return (
      <Router>
            <div className="App">
              <Link to="/">Home  </Link>
              <Link to="/about">About</Link>
              <div className="Container">
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos 
                    todos ={this.state.todos} 
                    markComplete={this.markComplete} 
                    deleteTodo = {this.deleteTodo}/> 
                  </React.Fragment>        
                )}/>
                <Route path="/about" component={About}></Route>
              </div>
            </div>
      </Router>
      
    );
  }
}

export default App;
