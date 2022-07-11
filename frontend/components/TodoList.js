import React from 'react'

import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map((todo, index) => {
            return <Todo key={index} todo={todo} id = {index} handleComplete = {this.props.handleComplete} />
          })
        }
      </div>
    )
  }
}
