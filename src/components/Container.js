import React, { Component } from 'react'

export class Container extends Component{

  render(){
    const { clients } = this.props
    console.log(clients);
      return(
        <section className="hero is-info welcome is-small">
          <div className="hero-body">
            <div className="container">
                <h1 className="title">
                  Hello, {clients.name}
                </h1>
            </div>
           </div>
          </section>
      )
    }
}
