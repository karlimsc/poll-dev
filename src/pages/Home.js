import React, { Component } from 'react'
import {Title} from '../components/Title.js'
import {LoginForm} from '../components/login-form.js'

export class Home extends Component {

  render(){
    return(
      <div>
          <div className='Header'>
              <Title>Login</Title>
              <LoginForm/>
          </div>
      </div>
    )
  }
}
