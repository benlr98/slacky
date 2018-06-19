import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import base from './base'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
      rebaseBinding: null,
    }
  }

  componentWillMount() {
    this.syncMessages()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.room.name !== this.props.room.name) {
      this.syncMessages()
    }
  }

  syncMessages = () => {
    if (this.state.rebaseBinding) {
      base.removeBinding(this.state.rebaseBinding)
    }

    const rebaseBinding = base.syncState(
      `${this.props.room.name}/messages`,
      {
        context: this,
        state: 'messages',
        asArray: true,
      }
    )

    this.setState({ rebaseBinding })
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    messages.push({
      id: `${this.props.user.uid}-${Date.now()}`,
      user: this.props.user,
      body,
      createdAt: Date.now(),
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat" style={styles}>
        <ChatHeader
          room={this.props.room}
          removeRoom={this.props.removeRoom}
        />
        <MessageList
          messages={this.state.messages}
          room={this.props.room}
        />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat