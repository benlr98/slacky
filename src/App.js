import React, { Component } from 'react'

import './App.css'
import SignIn from './SignIn'
import Main from './Main'

class App extends Component {
  state = {
    user: {},
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.setState({ user })
    }
  }

  handleAuth = (user) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main user={this.state.user} signOut={this.signOut} />
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App