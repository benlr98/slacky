import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import base, { auth } from './base'
import SignIn from './SignIn'
import Main from './Main'

class App extends Component {
  state = {
    user: {},
    users: {},
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.setState({ user })
    }

    base.syncState(
      'users',
      {
        context: this,
        state: 'users',
      }
    )

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
    // Build the user object
    const user = {
      email: oauthUser.email,
      uid: oauthUser.uid,
      displayName: oauthUser.displayName,
      photoUrl: oauthUser.photoURL,
    }

    // Add/update the user in the list
    const users = {...this.state.users}
    users[user.uid] = user

    // Update state and localStorage
    this.setState({ user, users })
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
    const mainProps = {
      user: this.state.user,
      signOut: this.signOut,
      users: this.state.users,
    }

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
                  {...mainProps}
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