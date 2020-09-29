import React, { Component } from 'react'
import {Title} from '../components/Title.js'
import {LoginForm} from '../components/LoginForm.js'
import {MainPage} from './MainPage.js'

export class Home extends Component {
  state = { usedSearch: false, results:[] }

  _handleResults = (results) =>  {
    this.setState( {results ,usedSearch: true })
  }

  render(){
    if (this.state.usedSearch){
      return <MainPage clients={this.state.results}/>
  }

    return(
      <div>
          <div className='Header'>
              <Title>Login</Title>
              <LoginForm onResults={this._handleResults} />
          </div>
      </div>
    )
  }
}
