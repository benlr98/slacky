import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'
import RoomLink from './RoomLink';

class RoomList extends Component {
state={
  rooms: {
    general: {
      name: 'test',
      description: 'lame stuff',
      messages: []
    },
    memes: {
      name: 'memes',
      description: 'avacados',
      messages: []
    }
  }
}
  
  render() {
    return (
      <nav
        className={`RoomList ${css(styles.nav)}`}
      >
        <h2 className={css(styles.h2)}>Rooms</h2>
        <ul className={css(styles.list)}>
          {
            Object.keys(this.state.rooms).map((roomName) => (
            <RoomLink 
              key={roomName} 
              room={this.state.rooms[roomName]} />
          ))}
        </ul>
      </nav>
    )
  }
}

const styles = StyleSheet.create(
  {
    nav: {
      padding: '0 1rem',
    },

    h2: {
      fontSize: '1rem',
    },

    list: {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
    },

      '::before': {
        content: '"# "',
      },

      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
  },
)

export default RoomList