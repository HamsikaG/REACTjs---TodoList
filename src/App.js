import React, { Component } from 'react';
import './App.css';
import Todos from'./components/Todos';

class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: 'Pray',
        completed: true
      },
      {
        id: 2,
        title: 'Cook',
        completed: true
      } ,
      {
        id: 3,
        title: 'Workout',
        completed: true
      },     
      {
        id: 4,
        title: 'Read',
        completed: true
      }
    ]
  }

 render(){
   console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos ={this.state.todos}/>
      </div>
    );
  }
}

export default App;
