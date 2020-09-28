import React, { Component } from 'react'
import {Title} from '../components/Title.js'
import {LoginForm} from '../components/LoginForm.js'
import {Menu} from '../components/Menu.js'

export class Home extends Component {
  state = { usedSearch: false, results:[] }

  _handleResults = (results) =>  {
    this.setState( {results ,usedSearch: true })
  }

  _renderResults(){
      return this.state.results.length === 0
         ? <p>Results not found</p>
         : <Menu clients={this.state.results}/>
    }

  render(){
    return(
      <div>
          <div className='Header'>
              <Title>Login</Title>
              <LoginForm onResults={this._handleResults} />
          </div>
                {  this.state.usedSearch
                      ? this._renderResults()
                      :<small>Use the form to search a movie</small>
                    }
      </div>
    )
  }
}
