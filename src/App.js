import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import { auth } from './base'
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

    auth.onAuthStateChanged(
      user => {
        if (user) {
          this.handleAuth(user)
        } else {
          this.handleUnauth()
        }
      }
    )
  }

  handleAuth = (oauthUser) => {
    const user = {
      email: oauthUser.email,
      uid: oauthUser.uid,
      displayName: oauthUser.displayName,
    }
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    auth.signOut()
  }

  handleUnauth = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/sign-in"
            render={navProps => (
              this.signedIn()
                ? <Redirect to="/rooms/general" />
                : <SignIn />
            )}
          />
          <Route
            path="/rooms/:roomName"
            render={navProps => (
              this.signedIn()
              ? <Main
                  user={this.state.user}
                  signOut={this.signOut}
                  {...navProps}
                />
              : <Redirect to="/sign-in" />
            )}
          />
          <Route
            render={() => (
              this.signedIn()
                ? <Redirect to="/rooms/general" />
                : <Redirect to="/sign-in" />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App