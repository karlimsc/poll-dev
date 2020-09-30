import React, { Component } from 'react'

export class Menu extends Component{

  render(){
      return(
            <aside className="menu">
              <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li className="menu-list-a is-active">Dashboard</li>
                    <li className="menu-list-a">Change password</li>
                </ul>
                <p className="menu-label">
                    Manage Poll
                </p>
                <p className="menu-label">
                    Manage Authorities
                </p>
                <p className="menu-label">
                    Manage Interfaces
                </p>
                <p className="menu-label">
                    Manage Reports
                </p>
            </aside>
      )
    }
}
