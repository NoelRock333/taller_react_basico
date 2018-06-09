import React from 'react'
import Item from './Item'
import { AppContext } from '../../AppContext';

class Todo extends React.Component {
  state = {
    todoList: [],
    newItem: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.newItem) {
      this.setState({ 
        todoList: [
          ...this.state.todoList,
          { text: this.state.newItem, done: false }
        ],
        newItem: ''
      });
      this.myInput.focus();
    }
  }

  onChange = (event) => {
    this.setState({ newItem: event.target.value });
  }

  handleInputChange = (index) =>  {
    let todoList = this.state.todoList;
    this.setState(() => {
      todoList[index] = { ...todoList[index], done: !todoList[index].done }
      return { todoList: todoList }
    })
  }

  countUndone = () => {
    return this.state.todoList.reduce((a, b) => {
      if (!b.done)
        return a + 1
      else 
        return a;
      }, 0)
  }

  itemsList = (item, index) => {
    return <Item item={item} index={index} key={index} handleInputChange={this.handleInputChange} /> 
  }

  render() {
    const todoList = this.state.todoList.map(this.itemsList);
    
    return (
      <div className="">
        {/* <button onClick={this.props.history.goBack}>&lt; Regresar</button>
        <AppContext.Consumer>
            {(context) => (
              <div>
                <span>{context.number}</span>
                <button onClick={context.inc}>INC</button>
              </div>
            )}
        </AppContext.Consumer> */}
        <h2>Mi lista de cosas por hacer</h2>
        <span>Tareas por hacer: </span><b>{this.countUndone()}</b>
        <form className="todo-form input-group" onSubmit={this.onSubmit}>
          <input
            className="input-group-prepend"
            value={this.state.newItem}
            onChange={this.onChange}
            ref={(input) => { this.myInput = input; }}
          />
          <button className="btn btn-success">Submit</button>
        </form>
        <div className="row mt-3">
          <div className="col-sm-3">
            <ul className="list-group">
              {todoList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo;