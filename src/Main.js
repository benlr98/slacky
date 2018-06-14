import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  state= {
    room: {
      name: 'test name',
      description: 'chat it up yo',
      messages: [],
    }
  }
  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar 
          user={this.props.user} 
          signOut={this.props.signOut} />
        <Chat 
          user={this.props.user}
          room={this.state.room}
        />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main