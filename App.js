 import React, {Component} from 'react'
import styles from './style.css';
export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: '' };
    this.removeItem = this.removeItem.bind(this)
  }

  addTodo(e) {
    e.preventDefault();
     this.setState({ todos: [ this.state.text, ...this.state.todos ], text: '' });
  }


  updateValue(e) {
    this.setState({ text: [e.target.value]})
  }
  removeItem(index) {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ todos })
  }
  render() {
    return(
      <div>
        <form onSubmit = {(e) => this.addTodo(e)}>
          <input
            placeholder="Add Todo"
            value={this.state.text}
            onChange={(e) => {this.updateValue(e)}}
            />
            
         <button type="submit">+</button>
                  </form>
        <TodoList todos= {this.state.todos} removeItem={this.removeItem} />
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return(
      <ul>
        { this.props.todos.map((todo, index) => {
          return <li onClick={(e) => { this.props.removeItem(index)}} key={todo}>{ todo }</li>
        })}
      </ul>
    );
  }}
