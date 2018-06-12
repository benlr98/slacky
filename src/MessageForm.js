import React from 'react'

const MessageForm = () => {
    return(
        <form className="MessageForm">
            <input
                type="text" 
                name="body" 
                placeholder="Type a message..."
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default MessageForm