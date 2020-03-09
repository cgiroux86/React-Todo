import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>Add Todo: 
                    <input onChange={this.props.handleChange} name='todo' value={this.props.todo}></input>
                </label>
                <button type='submit'>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;