import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor () {
    super()
    this.state = {
      todoList: [],
      todo: '',
    }
  }

  handleChange = e => {
    this.setState({ todo: e.target.value })
    console.log(this.state)
  }

  onSubmit = e => {
    const newTodo = {task: this.state.todo, completed: false, id: Math.floor(Math.random() * 100)}
    console.log(newTodo)
    e.preventDefault()
    this.setState({todoList: [...this.state.todoList, newTodo]})
    console.log(this.state.todoList)
    window.localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
    console.log(window.localStorage.getItem('todoList'))
    this.setState({todo: ''})
  }

  update = () => {
    this.setState({
      todoList: this.state.todoList.filter(elem => elem.completed === false)
    })
    window.localStorage.updateItem('todoList', JSON.stringify(this.state.TodoList))
    console.log(window.localStorage)
  
  }

toggleComplete = (id) => {
  this.setState({
    todoList: this.state.todoList.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      else
      return todo;
    })

  })
  console.log(this.state.todoList)
    
}

// storage = window.localStorage.setItem('token', JSON.stringify(this.state))





  render() {
    return (
      <div>
        <TodoList storage={this.storage} update={this.update} toggleComplete={this.toggleComplete} list={this.state.todoList} onSubmit = {this.onSubmit} handleChange={this.handleChange} todoList = {this.state.todoList} todo = {this.state.todo}/>
      </div>
    );
  }
}

export default App;
