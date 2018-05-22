import React from 'react'

class Todo extends React.Component {
  state = {
    todoList: [],
    newItem: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.newItem) {
      this.setState({ 
        todoList: [...this.state.todoList, this.state.newItem],
        newItem: ''
      });
      this.myInput.focus();
    }
  }

  onChange = (event) => {
    this.setState({ newItem: event.target.value });
  }

  render() {
    const todoList = this.state.todoList.map((item, index) => {
      return <li key={index}>{item}</li>
    });
  
    return (
      <div>
        <h2>Mi lista de cosas por hacer</h2>
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input value={this.state.newItem} onChange={this.onChange} ref={(input) => { this.myInput = input; }}  />
          <button>Submit</button>
        </form>
        <ul>
          {todoList}
        </ul>
      </div>
    )
  }
}

export default Todo;