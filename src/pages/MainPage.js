import React, { Component } from 'react'
import {Container} from '../components/Container.js'
import {Menu} from '../components/Menu.js'
import {PanelPoll} from '../components/PanelPoll.js'

export class MainPage extends Component{

  render(){
    const { clients } = this.props
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
              <div>
                <nav className="navbar"></nav>
              </div>
              <div className="columns">
                <div className="column is-6">
                  <div className="card events-card">
                    <PanelPoll id={clients.idClient}/>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="card">
                  </div>
                  <div className="card">
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    )
  }
}
