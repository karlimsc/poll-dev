import React, { Component } from 'react'


export class LoginForm extends Component {
  constructor(){
  super();
  this.state={ email:'', password:'' }
  }

  _handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()

    const url = "http://192.168.2.4:8084/client/login";
    const data = { email:this.state.email, password:this.state.password }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response)); }


  render () {
    return(
        <form className="login-form" onSubmit={this._handleSubmit}>


          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input"
              name="email"
              type="email"
              placeholder="Email"
              onChange={this._handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fa fa-check"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left">
              <input className="input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={this._handleChange}/>
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success">
                Login
              </button>
            </p>
          </div>
      </form>
    )
  }
}
