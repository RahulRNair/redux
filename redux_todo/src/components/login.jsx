import React, { Component } from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../actions'
function login(e) {
      //dispatch(addTodo(e.target.value))
  }
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <div className="row">
        <div className="col-xs-6 col-md-4"></div>
        <div className="col-xs-6 col-md-4"><div>
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
            <button type="button" className="btn btn-default" onClick={this.onSubmit}>Submit</button>
          </form>
        </div></div>
        <div className="col-xs-6 col-md-4"></div>
        </div>
    )
  }
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
