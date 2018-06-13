import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const SignOut = () => {
  return (
    <button className={css(styles.button)}>
      <i className="fas fa-sign-out-alt"></i>
    </button>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    border: 0,
    padding: 0,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1.2rem',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
      cursor: 'pointer',
    },
  },
})

export default SignOut