import React, { Component } from 'react'

export class Menu extends Component{

  render(){
      return(
          <div className="column is-3 ">
            <aside className="menu">
              <p className="menu-label">
                General
              </p>
              <ul className="menu-list">
                <li>Dashboard</li>
                <li>Customers</li>
              </ul>
            </aside>
          </div>
      )
    }
}
