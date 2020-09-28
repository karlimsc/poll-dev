import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Menu extends Component{
  static propTypes = {
      clients: PropTypes.array
    }
  render(){
    const { clients } = this.props
    console.log(clients);
      return(

          <div>
          <p>clients[0]</p>
          </div>
      )
    }
}
