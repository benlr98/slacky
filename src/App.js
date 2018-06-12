import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import Chat from './Chat';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Sidebar />
        <Chat />
      </div>
    );
  }
}

export default App;
