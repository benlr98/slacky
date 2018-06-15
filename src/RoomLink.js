import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RoomLink = ({ room, loadRoom }) => {
  const handleClick = (ev) => {
    ev.preventDefault()
    loadRoom(room)
  }

  return (
    <li className={css(styles.item)}>
      <a
        href="/"
        className={css(styles.link)}
        onClick={handleClick}
      >
        { room.name }
      </a>
    </li>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  },
})

export default RoomLink