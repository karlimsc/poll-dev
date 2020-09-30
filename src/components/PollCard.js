import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PollCard extends Component{
  static propTypes = {
      polls: PropTypes.array
    }

render(){
  const { polls } = this.props
  console.log(polls)
  return(
  <div>
      <a href='/' className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
      prueba
      </a>

      <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            All
          </button>
      </div>
    </div>
  )
  }

}
