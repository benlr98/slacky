import React from 'react'

const MessageList = () => {
    const messages = [
        {id: 1 , username: 'benlr98', body: 'Chatting away!'},
        {id: 2 , username: 'billy', body: 'hahah'},
    ]


    return(
        <div className="MessageList">
            {
            messages.map(message => (
                <div key={message.id}>
                    {message.username}: {message.body}
                </div>
                ))
            }
        </div>
    )
}

export default MessageList;