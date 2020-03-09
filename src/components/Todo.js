import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    render() {
        return (
            <div className={`${this.props.complete ? 'completed' : ''}`} onClick={() => this.props.toggleComplete(this.props.id)} >
             {this.props.text}
            </div>
        );
    }
}

export default Todo;