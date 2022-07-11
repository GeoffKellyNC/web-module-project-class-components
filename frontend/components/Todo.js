import React from 'react'
import styled from 'styled-components'

export default class Todo extends React.Component {
  render() {
    return (
      <TodoStyled>
        <span className = 'id'>{this.props.id + 1}.</span>
        <p>{this.props.todo}</p>
        <button onClick={() => this.props.handleComplete(this.props.id)}>Complete</button>
      </TodoStyled>
    )
  }
}


const TodoStyled = styled.div`
  display: flex;
  margin-top: 10px;

  .id {
    margin-right: 10px;
  }


`
