import React, { Component } from 'react'
import  {Container} from '../components/Container.js'
import {Menu} from '../components/Menu.js'

export class MainPage extends Component{

  render(){
    const { clients } = this.props
    console.log(clients)
    return(
      <div>
        <div>
        <Menu/>
        </div>
        <div>
        <Container clients={clients} />
        </div>
      </div>

    )
  }
}
