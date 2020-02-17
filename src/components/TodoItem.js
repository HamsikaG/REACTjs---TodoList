import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    // constructor(props) {
    //     super(props);
    //   }

    getStyle = () => {
        return  {
            background: 'yellow',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            }
        }
    //  shouldComponentUpdate(nextProps, nextState){
  
    //   return true;
    //  }
  
    render() {
        const { id, title } = this.props.todo;

        return (
            <div style = {this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                <div>{title}</div>
                <button onClick={this.props.deleteTodo.bind(this,id)}>Delete Todo</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }

export default TodoItem
