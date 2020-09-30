import React, { Component } from 'react'
import  {Container} from '../components/Container.js'
import {Menu} from '../components/Menu.js'

export class MainPage extends Component{

  render(){
    const { clients } = this.props
    console.log(clients)
    return(
    <div className="main-page">
    <nav className="navbar is-white"></nav>
    <div className="navbar-brand"></div>
      <div className="container">
        <div className="columns">
            <div className="column is-3">
              <Menu/>
            </div>
            <div className="column is-9">
              <Container clients={clients} />
            </div>
        </div>
      </div>
    </div>

    )
  }
}
