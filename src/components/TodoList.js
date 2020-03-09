import React, { Component } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends Component {
    render() {
        return (
            <div>
               <TodoForm onSubmit={this.props.onSubmit} handleChange= {this.props.handleChange} todo={this.props.todo}/> 
               {this.props.list.map((elem,i) => {
                   return <Todo toggleComplete={this.props.toggleComplete} id={elem.id} key={i} complete={elem.completed} text={elem.task}/>
               })}
               <button onClick={this.props.update}>Remove Items from List</button>
              {console.log(this.props.storage)}
            </div>
        );
    }
}

export default TodoList;
