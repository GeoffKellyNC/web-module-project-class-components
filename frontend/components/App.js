import React from 'react'

import Form from './Form'
import TodoList from './TodoList'


const todos = []
const initialFormValues = {
  todo: ''
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos,
      formValues: initialFormValues,
      isComplete: false
    }
  }

  handleChange = (event) => {
    const formValues = { ...this.state.formValues }
    formValues[event.target.name] = event.target.value
    this.setState({ formValues })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.formValues.todo],
      formValues: initialFormValues
    })
  }

  handleComplete = (id) => {
    console.log('handleComplete', id)
    this.setState({
      isComplete: !this.state.isComplete
    })
    const todos = this.state.todos.filter((todo, index) => {
      return index !== id
    })
    this.setState({
      todos: todos
    })
  }


  render() {
    return (
      <div>
        Todo App
        <TodoList todos={this.state.todos} handleComplete = {this.handleComplete} />
        <Form formValues={this.state.formValues} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}
