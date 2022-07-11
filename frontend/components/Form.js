import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
      super(props)
    }



  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            name="todo" 
            value={this.props.formValues.todo} 
            onChange={this.props.onChange} />
          <button onClick={this.props.onSubmit}>Add Todo</button>
        </form>
      </div>
    )
  }
}
