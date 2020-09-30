import React, { Component } from 'react'
import {PollCard} from '../components//PollCard.js'

export class PanelPoll extends Component{

state = { _id: this.props, Search : [], usedSearch: false}

  _fetchMovie({id}) {
    fetch(`http://localhost:8083/poll/client/${id}`)
      .then(res =>  res.json())
      .catch(error => console.error("Error:", error))
      .then(poll => {
        this.setState({Search: poll ,usedSearch: true});
    })
  }

  componentDidMount(){
    this._fetchMovie({id : this.state._id.id})
}

_renderResults(){
  return this.state.Search.length === 0
     ?  <p> Add poll </p>
     : <PollCard polls={this.state.Search}/>
}

  render(){
    console.log(this.state.Search)
      console.log(this.state.usedSearch)
      return(
        <nav className="panel">
            <p className="panel-heading">Polls</p>
            <div className="panel-block">
            </div>
            <p className="panel-tabs justify">
                <a href='/'> + Create</a>
            </p>
            {
              this.state.usedSearch
              ?this._renderResults()
              :<small>Add  poll</small>
            }
        </nav>
      )
    }
}
