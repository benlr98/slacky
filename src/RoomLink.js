import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RoomLink = ({room}) => {
    return(
        <li className={css(styles.item)}>
            <a href="/" className={css(styles.link)}>
                {room.name}
            </a>
        </li>
    )
}

const styles = StyleSheet.create(
    {
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
    }
)

export default RoomLink