import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../actions'

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e => {
      if(e.keyCode === 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
      dispatch(deleteTodo(index))
    }}>X</button></p>)}
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile"/>
    <p className="help-block">Example block-level help text here.</p>
  </div>
  <div className="checkbox">
    <label>
      <input type="checkbox"/> Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
  </div>
)

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
