import React, { Component } from 'react';
import './App.css';
import Todos from'./components/Todos';

class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: 'Pray',
        completed: false
      },
      {
        id: 2,
        title: 'Cook',
        completed: true
      } ,
      {
        id: 3,
        title: 'Workout',
        completed: false
      },     
      {
        id: 4,
        title: 'Read',
        completed: false
      }
    ]
  }

  markComplete = (e) =>{
    console.log("hi")
}
 render(){
   console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos ={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
